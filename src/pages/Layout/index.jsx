import React, { useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Context from "../../utils/useContext";

export default function Layout() {
  
  /* 判斷路由深度，驅動畫面變換 */
  const { pathname } = useLocation();
  const pathnameArr = pathname.split('/');
  
  /* 紀錄城市 */
  const [city, setCity] = useState('');
  const handleCity = (e) => setCity(e.target.dataset.city || '');
  
  /* 傳遞 outlet props */
  const outlet = useOutlet();
  const outletProps = {
    city: city,
    setCity: handleCity
  }

  return (
    <div
      className={`wrap vh-100${
        pathnameArr[1] === '' ? '' : pathnameArr[2] ? " page result" : " page"
      }`}
    >
      <Header />
      <Nav />
      <Context.Provider value={outletProps}>
        {outlet}
      </Context.Provider>
    </div>
  );
}
