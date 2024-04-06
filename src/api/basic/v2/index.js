import Wkt from "wicket";
import http from "../../createHttp";

/**
 * 取得指定[縣市]的市區公車路線資料
 * @returns {Promise<any[]>}
 */
export const apiGetBusRoutesByCity = (city) => {
  if (!city) return [];
  return http.get(`/api/basic/v2/Bus/Route/City/${city}`, {
    $select: [
      "RouteUID",
      "RouteName",
      "DepartureStopNameZh",
      "DestinationStopNameZh",
    ],
  });
};

/**
 * 路線站點資料
 *
 * @typedef Position
 * @prop {number} PositionLon 經度
 * @prop {number} PositionLat 緯度
 * @prop {string} GeoHash 空間碼
 *
 * @typedef BusStop
 * @prop {string} StopID
 * @prop {string} StopName
 * @prop {number} StopBoarding [-1:'可下車',0:'可上下車',1:'可上車']
 * @prop {number} StopSequence 順序
 * @prop {Position} StopPosition 定位
 *
 * @typedef BusStops
 * @prop {string} RouteUID 路線識別碼
 * @prop {string} Direction 去返程
 * @prop {BusStop[]} Stops 車站
 */

/**
 * 取得指定[縣市],[路線名稱]的市區公車路線站序資料
 * @returns {Promise<BusStops[]>}
 */
const apiGetBusStops = (city, routeName) =>
  http.get(`/api/basic/v2/Bus/StopOfRoute/City/${city}/${routeName}`, {
    $select: ["RouteUID", "Direction", "Stops"],
  });

/**
 * 批次動態定點資料
 *
 * @typedef BusRealTimeInfo
 * @prop {string} PlateNumb 車牌號碼
 * @prop {string} StopID 站牌識別碼
 * @prop {number} A2EventType 進站離站: [0:'離站',1:'進站']
 */

/**
 * 取得指定[縣市],[路線名稱]的公車動態定點資料(A2)[批次更新]
 * @return {Promise<BusRealTimeInfo[]>}
 */
const apiGetBusRealTimeNearStop = (city, routeName) =>
  http.get(`/api/basic/v2/Bus/RealTimeNearStop/City/${city}/${routeName}`, {
    $select: ["PlateNumb", "StopID", "A2EventType"],
  });

/**
 * 批次預估到站資料
 *
 * @typedef EstimatedTimeOfArrival
 * @prop {string} RouteName 路線名
 * @prop {string} StopID 站牌識別碼
 * @prop {number} Direction 車輛方向 [0:'去程',1:'返程',2:'迴圈',255:'未知']
 * @prop {string} EstimateTime 預估到站時間 [與 StopStatus 有關連]
 * @prop {number} StopStatus 車輛狀態 [0:'正常',1:'尚未發車',2:'交管不停靠',3:'末班車已過',4:'今日未營運']
 */

/**
 * 取得指定[縣市],[路線名稱]的公車預估到站資料(N1)[批次更新]
 * @returns {Promise<EstimatedTimeOfArrival[]>}
 */
const apiGetBusEstimatedTimeOfArrival = (city, routeName) =>
  http.get(
    `/api/basic/v2/Bus/EstimatedTimeOfArrival/City/${city}/${routeName}`,
    {
      $select: [
        "RouteName",
        "StopID",
        "Direction",
        "EstimateTime",
        "StopStatus",
      ],
    }
  );

/**
 * 路線軌跡
 *
 * @typedef BusShape
 * @prop {string} RouteUID
 * @prop {string} RouteName
 * @prop {string} Direction
 * @prop {string} Geometry 路線軌跡
 */

/**
 * 取得指定[縣市],[路線名稱]的市區公車線型資料
 * @returns {Promise<BusShape[]>}
 */
const apiGetBusShape = (city, routeName) =>
  http.get(`/api/basic/v2/Bus/Shape/City/${city}/${routeName}`, {
    $select: ["RouteUID", "RouteName", "Direction", "Geometry"],
  });

/**
 * 批次動態定時資料
 *
 * @typedef RealTimeByFrequency
 * @prop {string} PlateNumb 車牌號碼
 * @prop {Position} BusPosition 車輛經緯度
 * @prop {number} Speed 行駛速度
 * @prop {number} Direction 去程返程
 * @prop {number} Azimuth 方位角
 */

/**
 * 取得指定[縣市],[路線名稱]的公車動態定時資料(A1)[批次更新]
 * @returns {Promise<RealTimeByFrequency[]>}
 */
const apiGetBusRealTimeByFrequency = (city, routeName) =>
  http.get(`/api/basic/v2/Bus/RealTimeByFrequency/City/${city}/${routeName}`, {
    $select: ["PlateNumb", "BusPosition", "Speed", "Direction", "Azimuth"],
  });

/* 整合 Route 資料 */
export const apiGetBusRoute = async (city, routeName) => {
  if (!city || !routeName) return [];

  const promises = [
    apiGetBusShape(city, routeName),
    apiGetBusStops(city, routeName),
    apiGetBusRealTimeNearStop(city, routeName),
    apiGetBusEstimatedTimeOfArrival(city, routeName),
    apiGetBusRealTimeByFrequency(city, routeName),
  ];

  const [
    shape,
    originStops,
    realTimeNearStop,
    estimatedTimeOfArrival,
    realTimeByFrequency,
  ] = await Promise.all(promises);

  /* Geometry 字串轉 GeoJson */
  const wkt = new Wkt.Wkt();
  wkt.read(shape[0].Geometry);
  const geojson = wkt
    .toJson()
    .coordinates.map((position) => position.reverse());

  // 資料區分成 去程, 返程, GeoJson 與 公車定時資訊
  const result = [[], [], geojson, realTimeByFrequency];

  // 站點資料重新排序整合
  const stops = [...originStops[0].Stops, ...originStops[1].Stops].sort(
    (first, second) => first.StopID - second.StopID
  );

  // 過濾資料並排序整合
  estimatedTimeOfArrival.sort((first, second) => first.StopID - second.StopID);

  stops.forEach((stop, index) => {
    Object.assign(stop, estimatedTimeOfArrival[index]);
  });

  stops.forEach((stop) => {
    // Direction 車輛方向 [0:'去程',1:'返程',2:'迴圈',255:'未知']
    if (stop.Direction === 0 || stop.Direction === 1) {
      result[stop.Direction].push(stop);
    }
  });

  // 按照站序排列
  result[0].sort((first, second) => first.StopSequence - second.StopSequence);
  result[1].sort((first, second) => first.StopSequence - second.StopSequence);

  /* 將 即將到站巴士資料 整合進 站點資料 */
  realTimeNearStop.forEach((bus) => {
    result[bus.Direction][bus.StopSequence - 1] = Object.assign(
      result[bus.Direction][bus.StopSequence - 1],
      bus
    );
  });

  return result;
};
