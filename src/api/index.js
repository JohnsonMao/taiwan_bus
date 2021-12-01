import ajax from "./ajax";
import Wkt from "wicket";

const ROOT_URL = "https://ptx.transportdata.tw/MOTC/v2/Bus";

const noCity = [0, "Please set the city parameters"];

/* 預設篩選城市路線資料 */
const initCityBus = {
  $select: [
    "RouteUID",
    "RouteName",
    "DepartureStopNameZh",
    "DestinationStopNameZh",
  ],
};

/* City Bus API */
export const apiCityBus = (city = "") =>
  city === "" ? noCity : ajax(ROOT_URL + "/Route/City/" + city, initCityBus);

/* 路線站點資料
 *
 * RouteUID 路線識別碼
 * Direction 去返程
 * Stops 車站
 *    StopID
 *    StopName
 *    StopBoarding [-1:'可下車',0:'可上下車',1:'可上車']
 *    StopSequence 順序
 *    StopPosition 定位
 *        PositionLon 經度
 *        PositionLat 緯度
 *        GeoHash 空間碼
 */
/* 預設篩選特定路線資料 */
const initStopOfRoute = {
  $select: ["RouteUID", "Direction", "Stops"],
};

const apiStopOfRoute = (city = "", routeName = "") =>
  ajax(
    ROOT_URL + "/StopOfRoute/City/" + city + "/" + routeName,
    initStopOfRoute
  );

/* 批次動態定點資料
 *
 * PlateNumb 車牌號碼
 * StopID 站牌識別碼
 * A2EventType 進站離站: [0:'離站',1:'進站']
 */
const initBusNearStop = {
  $select: ["PlateNumb", "StopID", "A2EventType"],
};

const apiBusNearStop = (city = "", routeName = "") =>
  ajax(
    ROOT_URL + "/RealTimeNearStop/City/" + city + "/" + routeName,
    initBusNearStop
  );

/* 批次預估到站資料
 *
 * RouteName 路線名
 * StopID 站牌識別碼
 * Direction 車輛方向 [0:'去程',1:'返程',2:'迴圈',255:'未知']
 * EstimateTime 預估到站時間 [與 StopStatus 有關連]
 * StopStatus 車輛狀態 [0:'正常',1:'尚未發車',2:'交管不停靠',3:'末班車已過',4:'今日未營運']
 */
const initEstimatedTime = {
  $select: ["RouteName", "StopID", "Direction", "EstimateTime", "StopStatus"],
};

const apiEstimatedTime = (city = "", routeName = "") =>
  ajax(
    ROOT_URL + "/EstimatedTimeOfArrival/City/" + city + "/" + routeName,
    initEstimatedTime
  );

/* 路線線型
 *
 * RouteUID
 * RouteName
 * Direction
 * Geometry 路線軌跡
 */
const initShape = {
  $select: ["RouteUID", "RouteName", "Direction", "Geometry"],
};

const apiShape = (city = "", routeName = "") =>
  ajax(ROOT_URL + "/Shape/City/" + city + "/" + routeName, initShape);

/* 整合 Route 資料 */
export const apiRouteName = async (city = "", routeName = "") => {
  if (city === "") {
    return noCity;
  }
  const stopOfRoute = await apiStopOfRoute(city, routeName);
  const busNearStop = await apiBusNearStop(city, routeName);
  const estimatedTime = await apiEstimatedTime(city, routeName);
  const shape = await apiShape(city, routeName);
  /* stopOfRoute   [{Direction: 0, stops: [...], ...}, {Direction: 1, stops: [...], ...}]
   * busNearStop   [{Direction..., StopUID..., Plate..., A2E... }, ...]
   * estimatedTime [{Direction..., StopUID..., Estimate..., StopStatus...}, ...]
   */

  /* 站點資料重新排序整合 */
  let stops = [...stopOfRoute[0].Stops, ...stopOfRoute[1].Stops];
  stops.sort((first, second) => first.StopID - second.StopID);

  /* 過濾資料並排序整合 */
  let newEstimatedTime = estimatedTime.filter(
    (stop) => stop.RouteName.Zh_tw === routeName
  );
  newEstimatedTime.sort((first, second) => first.StopID - second.StopID);
  stops.forEach((stop, index) => {
    Object.assign(stop, newEstimatedTime[index]);
  });

  /* 資料區分成 去程 與 返程 */
  const result = [[], []];
  stops.forEach((stop) => {
    // Direction 車輛方向 [0:'去程',1:'返程',2:'迴圈',255:'未知']
    if (stop.Direction === 0 || stop.Direction === 1) {
      result[stop.Direction].push(stop);
    }
  });

  /* 按照站序排列 */
  result[0].sort((first, second) => first.StopSequence - second.StopSequence);
  result[1].sort((first, second) => first.StopSequence - second.StopSequence);

  /* 將 即將到站巴士資料 整合進 站點資料 */
  busNearStop.forEach((bus) => {
    result[bus.Direction][bus.StopSequence - 1] = Object.assign(
      result[bus.Direction][bus.StopSequence - 1],
      bus
    );
  });

  /* Geometry 字串轉 GeoJson */
  const wkt = new Wkt.Wkt();
  wkt.read(shape[0].Geometry);
  const newGeoJson = wkt
    .toJson()
    .coordinates.map((position) => position.reverse());
  result.push(newGeoJson);

  return result; // result: [[Direction: 0], [Direction: 1], GeoJson]
};

/* 批次動態定時資料 Map
 *
 * PlateNumb 車牌號碼
 * BusPosition 車輛經緯度
 * Speed 行駛速度
 * Direction 去程返程
 */

/* 附近站牌資料 API
 *
 * StationUID 站位識別碼
 * StationName 站位名稱
 * StationPosition 站牌位置
 * StationAddress 站位地址
 * Stops 經過站牌的路線
 * LocationCityCode 城市代碼
 */
const initNearby = {
  $select: [
    "StationUID",
    "StationName",
    "StationPosition",
    "StationAddress",
    "Stops",
    "LocationCityCode",
  ],
};

export const apiNearby = (data = null) =>
  ajax(ROOT_URL + "/Station/NearBy", Object.assign(initNearby, data));
