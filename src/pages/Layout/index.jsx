import { createContext, useState, useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import useGeolocation from "react-hook-geolocation";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { keyboard_city } from "../../asset/keyboard";
import {
  STORAGE_CITY,
  STORAGE_ROUTE,
  STORAGE_FAVORITES,
  getStorage,
  setStorage,
} from "../../utils/localStorage";

export const Context = createContext({});

export function Layout() {
  /* 判斷路由深度，驅動畫面變換 */
  const { pathname } = useLocation();
  const pathnameArr = pathname.split("/");

  /* City State */
  const [city, setCity] = useState(getStorage(STORAGE_CITY) || "");
  const handleCity = (e) => {
    setCity(e);
    setStorage(STORAGE_CITY, e || "");
  };
  /* City English name */
  const cityIndex = keyboard_city.findIndex(
    (cityObj) => cityObj.CityName === city
  );
  const city_En = keyboard_city[cityIndex]?.City || "";

  /* Route Start and End State */
  const [routeArr, setRouteArr] = useState(
    getStorage(STORAGE_ROUTE) || ["start", "end"]
  );
  const handleRouteArr = (e) => {
    setRouteArr(e);
    setStorage(STORAGE_ROUTE, e);
  };

  /* Search keyword State */
  const [keyword, setKeyword] = useState("");
  const handleKeyword = (e) => {
    setKeyword(e);
  };

  /* Bus direction State */
  const [isBack, setIsBack] = useState(false);
  const handleIsBack = (e) => {
    setIsBack(e);
  };

  /* Show map State */
  const [showMap, setShowMap] = useState(false);
  const handleShowMap = (e) => {
    setShowMap(e);
  };

  /* Favorites State */
  const [favorites, setFavorites] = useState(
    getStorage(STORAGE_FAVORITES) || []
  );
  const handleFavorites = (e) => {
    setFavorites(e);
  };

  useEffect(() => {
    setStorage(STORAGE_FAVORITES, favorites);
  }, [favorites]);

  /* 獲取定位資訊 */
  const { latitude, longitude, error: geoError } = useGeolocation();

  /* 傳遞 outlet props */
  const outlet = useOutlet();
  const outletProps = {
    city: city,
    city_En: city_En,
    setCity: handleCity,
    keyword: keyword,
    isBack: isBack,
    search_keyword: decodeURI(pathnameArr[2]),
    setRouteArr: handleRouteArr,
    setShowMap: handleShowMap,
    showMap: showMap,
    favorites: favorites,
    setFavorites: handleFavorites,
    latitude: latitude,
    longitude: longitude,
    geoError: geoError,
  };

  return (
    <div
      className={`wrap vh-100${
        pathnameArr[1] === ""
          ? ""
          : pathnameArr[1] !== "citybus"
          ? " page " + pathnameArr[1]
          : pathnameArr[2]
          ? " page result"
          : " page"
      }`}
    >
      <Header
        setKeyword={handleKeyword}
        setShowMap={handleShowMap}
        showMap={showMap}
      />
      <Nav setIsBack={handleIsBack} routeArr={routeArr} />
      <Context.Provider value={outletProps}>{outlet}</Context.Provider>
    </div>
  );
}
