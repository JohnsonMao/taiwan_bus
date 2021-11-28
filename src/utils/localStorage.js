export const STORAGE_CITY = "taiwan_bus_$city";
export const STORAGE_ROUTE = "taiwan_bus_$route";
export const STORAGE_FAVORITES = "taiwan_bus_$favorites";

export const getHistory = (type) => {
  if (localStorage.getItem(type)) {
    return JSON.parse(localStorage.getItem(type));
  }
};

export const saveHistory = (type, content) => {
  const localHistory = JSON.stringify(content)
  localStorage.setItem(type, localHistory);
}
