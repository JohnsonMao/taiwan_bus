import ajax from "./ajax";

const ROOT_URL = 'https://ptx.transportdata.tw/MOTC/v2/Bus';

/* 預設篩選資料 */
const initCityBus = {
  $select: [
  ]
}

/* City Bus API */