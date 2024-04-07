import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./pages/Layout";
import withSuspense from "./components/withSuspense";
import "./asset/styles/style.scss";

const Index = withSuspense(() => import("./pages/Index"));
const CityBus = withSuspense(() => import("./pages/CityBus"));
const SearchResult = withSuspense(() => import("./components/SearchResult"));
const RoutePage = withSuspense(() => import("./components/RoutePage"));
const Nearby = withSuspense(() => import("./pages/Nearby"));
const Favorites = withSuspense(() => import("./pages/Favorites"));

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={Index} />
          <Route path="citybus" element={CityBus}>
            <Route index element={SearchResult} />
            <Route path=":id" element={RoutePage} />
          </Route>
          <Route path="nearby/*" element={Nearby} />
          <Route path="favorites" element={Favorites} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
