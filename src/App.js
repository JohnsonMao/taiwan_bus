import React, { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Index from "./pages/Index";
import CityBus from "./pages/CityBus";
import RouteName from "./pages/RouteName";
import "./asset/scss/style.scss";

export default function App() {
  const [routeLevel, setRouteLevel] = useState(0);
  const handleRouteLevel = (e) => setRouteLevel(e);
  const routeProps = {
    setRouteLevel: handleRouteLevel,
  };
  return (
    <HashRouter>
      <div
        className={`${
          routeLevel === 0 ? "" : routeLevel === 1 ? "page " : "page result "
        }wrap vh-100`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Index {...routeProps} />} />
          <Route path="citybus" element={<CityBus {...routeProps} />} />
          <Route path="citybus/:id" element={<RouteName {...routeProps} />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
