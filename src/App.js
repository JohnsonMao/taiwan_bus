import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import CityBus from "./pages/CityBus";
import SearchState from "./components/SearchState";
import RouteTable from "./components/RouteTable";
import Map from "./components/Map";
import "./asset/scss/style.scss";

export default function App() {
  return (
    <HashRouter>
      {/*  控制公車路線方向顯示的 CSS  */}
      <input id="go" className="d-none" name="direction" type="radio" />
      <input id="back" className="d-none" name="direction" type="radio" />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="citybus" element={<CityBus />}>
            <Route index element={<SearchState />} />
            <Route path=":id" element={<RouteTable />} />
            <Route path=":id/map" element={<Map />} />
          </Route>
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
