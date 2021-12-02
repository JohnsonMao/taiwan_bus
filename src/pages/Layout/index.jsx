import React, { useState, useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { keyboard_city } from "../../utils/keyboard_config";
import {
  STORAGE_CITY,
  STORAGE_ROUTE,
  STORAGE_FAVORITES,
  getHistory,
  saveHistory,
} from "../../utils/localStorage";

export const Context = React.createContext({});

export function Layout() {
  /* 判斷路由深度，驅動畫面變換 */
  const { pathname } = useLocation();
  const pathnameArr = pathname.split("/");

  /* City State */
  const [city, setCity] = useState(getHistory(STORAGE_CITY) || "");
  const handleCity = (e) => {
    setCity(e);
    saveHistory(STORAGE_CITY, e || "");
  };
  /* City English name */
  const cityIndex = keyboard_city.findIndex(
    (cityObj) => cityObj.CityName === city
  );
  const city_En = keyboard_city[cityIndex]?.City || "";

  /* Route Start and End State */
  const [routeArr, setRouteArr] = useState(
    getHistory(STORAGE_ROUTE) || ["start", "end"]
  );
  const handleRouteArr = (e) => {
    setRouteArr(e);
    saveHistory(STORAGE_ROUTE, e);
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
    getHistory(STORAGE_FAVORITES) || []
  );
  const handleFavorites = (e) => {
    setFavorites(e);
  };

  useEffect(() => {
    saveHistory(STORAGE_FAVORITES, favorites);
  }, [favorites]);

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
  };

  return (
    <div
      className={`wrap vh-100${
        pathnameArr[1] === ""
          ? ""
          : pathnameArr[1] !== "citybus"
          ? " page other"
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
