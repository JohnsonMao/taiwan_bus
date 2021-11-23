import ajax from "./ajax";

const ROOT_URL = "https://ptx.transportdata.tw/MOTC/v2/Bus";

/* 預設篩選資料 */
const initCityBus = {
  $select: [
    'RouteUID',
    'RouteName',
    'DepartureStopNameZh',
    'DestinationStopNameZh'
  ],
};

/* City Bus API */
export const apiCityBus = (city = 'Taipei', data = null) => 
  ajax(ROOT_URL + '/Route/City/' + city, {...initCityBus, ...data});