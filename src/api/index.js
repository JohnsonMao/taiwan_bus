import ajax from "./ajax";

const ROOT_URL = "https://ptx.transportdata.tw/MOTC/v2/Bus";

const noCity = [0, "Please set the city parameters"]

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
export const apiCityBus = (city = "", data = null) =>
  city === ""
    ? noCity
    : ajax(ROOT_URL + "/Route/City/" + city, { ...initCityBus, ...data });

/* 路線資料
 *
 * RouteUID 路線識別碼
 * RouteName 路線名稱
 * Direction 去返程
 * Stops 車站
 *    StopUID
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
  $select: ["RouteUID", "RouteName", "Direction", "Stops"],
};

export const apiStopOfRoute = (city = "", routeName = "", data = null) =>
  city === ""
    ? noCity
    : ajax(ROOT_URL + "/DisplayStopOfRoute/City/" + city + "/" + routeName, {
        ...initStopOfRoute,
        ...data,
      });


/* 批次動態定點資料
 *
 * PlateNumb 車牌號碼
 * A2EventType 進站離站: [0:'離站',1:'進站']
 */

/* 批次預估到站資料
 *
 * PlateNumb 車牌號碼 [値為値為-1時，表示目前該站位無車輛行駛]
 * StopUID 站牌識別碼
 * StopName 站名
 * RouteName 路線名稱
 * Direction 車輛方向 [0:'去程',1:'返程',2:'迴圈',255:'未知']
 * EstimateTime 預估到站時間 [與 StopStatus 有關連]
 * StopStatus 車輛狀態 [0:'正常',1:'尚未發車',2:'交管不停靠',3:'末班車已過',4:'今日未營運']
 */


/* 批次動態定時資料 Map
 *
 * PlateNumb 車牌號碼
 * BusPosition 車輛經緯度
 * Speed 行駛速度
 * Direction 去程返程
 */


/* 路線線型
 *
 * RouteUID
 * RouteName
 * Direction
 * Geometry 路線軌跡
 */
