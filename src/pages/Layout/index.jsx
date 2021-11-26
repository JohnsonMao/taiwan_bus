import React, { useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { keyboard_city } from '../../utils/keyboard_config';

export const Context = React.createContext({})

export function Layout() {
  
  /* 判斷路由深度，驅動畫面變換 */
  const { pathname } = useLocation();
  const pathnameArr = pathname.split('/');
  
  /* City State */
  const [city, setCity] = useState('');
  const handleCity = (e) => {
    setCity(e.target.dataset.city || '');
  }
  /* City English name */
  const cityIndex = keyboard_city.findIndex((cityObj) => cityObj.CityName === city)
  const city_En = cityIndex !== -1 ? keyboard_city[cityIndex].City : '';
  
  /* Route Start and End State */
  const [routeArr, setRouteArr] = useState(['start', 'end'])
  const handleRouteArr = (e) => {
    setRouteArr(e)
  }

  /* Search keyword State */
  const [keyword, setKeyword] = useState('');
  const handleKeyword = (e) => {
    setKeyword(e)
  }
  
  /* Bus direction State */
  const [isBack, setIsBack] = useState(false);
  const handleIsBack = (e) => {
    setIsBack(e)
  } 

  /* 傳遞 outlet props */
  const outlet = useOutlet();
  const outletProps = {
    city: city,
    city_En: city_En,
    setCity: handleCity,
    keyword: keyword,
    isBack: isBack,
    routeName: decodeURI(pathnameArr[2]),
    setRouteArr: handleRouteArr
  }

  return (
    <div
      className={`wrap vh-100${
        pathnameArr[1] === '' ? '' : pathnameArr[2] ? " page result" : " page"
      }`}
    >
      <Header setKeyword={handleKeyword} />
      <Nav setIsBack={handleIsBack} routeArr={routeArr}/>
      <Context.Provider value={outletProps}>
        {outlet}
      </Context.Provider>
    </div>
  );
}
