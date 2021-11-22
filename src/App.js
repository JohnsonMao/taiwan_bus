import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import CityBus from "./pages/CityBus";
import RouteName from "./pages/RouteName";
import "./asset/scss/style.scss";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="citybus" element={<CityBus />} />
          <Route path="citybus/:id" element={<RouteName />} />
          <Route path="citybus/:id/map" element={<RouteName />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
