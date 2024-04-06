export const STORAGE_CITY = "taiwan_bus_$city";
export const STORAGE_ROUTE = "taiwan_bus_$route";
export const STORAGE_FAVORITES = "taiwan_bus_$favorites";

export const getStorage = (type) => {
  if (localStorage.getItem(type)) {
    return JSON.parse(localStorage.getItem(type));
  }
};

export const setStorage = (type, content) => {
  localStorage.setItem(type, JSON.stringify(content));
}
