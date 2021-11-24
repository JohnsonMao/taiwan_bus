import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import CityBus from "./pages/CityBus";
import SearchResult from "./components/SearchResult";
import RouteTable from "./components/RouteTable";
import Map from "./components/Map";
import "./asset/scss/style.scss";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="citybus" element={<CityBus />}>
            <Route index element={<SearchResult />} />
            <Route path=":id" element={<RouteTable />} />
            <Route path=":id/map" element={<Map />} />
          </Route>
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
