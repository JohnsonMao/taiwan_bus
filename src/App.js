import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./pages/Layout";
import Index from "./pages/Index";
import CityBus from "./pages/CityBus";
import SearchResult from "./components/SearchResult";
import RoutePage from "./components/RoutePage";
import "./asset/scss/style.scss";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="citybus" element={<CityBus />}>
            <Route index element={<SearchResult />} />
            <Route path=":id" element={<RoutePage />} />
          </Route>
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
