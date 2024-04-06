import http from "../../createHttp";

/**
 * 附近站牌資料
 *
 * @typedef Station
 * @prop {string} StationID 站位識別碼
 * @prop {string} StationName 站位名稱
 * @prop {import('../../basic/v2').Position} StationPosition 站牌位置
 * @prop {string} StationAddress 站位地址
 * @prop {import('../../basic/v2').BusStop[]} Stops 經過站牌的路線
 * @prop {string} LocationCityCode 城市代碼
 */

/** 取得指定[位置,範圍]的全臺公車站位資料 */
export const apiGetNearbyStation = (data = {}) =>
  http.get(`/api/advanced/v2/Bus/Station/NearBy`, {
    $select: [
      "StationID",
      "StationName",
      "StationPosition",
      "StationAddress",
      "Stops",
      "LocationCityCode",
    ],
    ...data,
  });

/**
 * 站牌路線 API
 *
 * @typedef StationRoute
 * @prop {string} RouteUID 識別碼
 * @prop {string} RouteName 路線名稱
 * @prop {string} DepartureStopNameZh 中文起點
 * @prop {string} DestinationStopNameZh 中文終點
 * @prop {string} DepartureStopNameEn 英文起點
 * @prop {string} DestinationStopNameEn 英文終點
 */

/** 取得指定[縣市],[站位]的市區公車路線資料 */
export const apiGetStationRoute = (city, stationID) => {
  if (!city || !stationID) return [];
  return http.get(
    `/api/advanced/v2/Bus/Route/City/${city}/PassThrough/Station/${stationID}`,
    {
      $select: [
        "RouteUID",
        "RouteName",
        "DepartureStopNameZh",
        "DestinationStopNameZh",
        "DepartureStopNameEn",
        "DestinationStopNameEn",
      ],
    }
  );
};
