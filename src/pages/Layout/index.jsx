import React from "react";
import { useLocation, Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Nav from "../../components/Nav";

export default function Layout() {
  
  const { pathname } = useLocation();
  const pathnameArr = pathname.split('/');

  return (
    <div
      className={`wrap vh-100${
        pathnameArr[1] === "" ? "" : pathnameArr[2] === undefined ? " page" : " page result"
      }`}
    >
      <Header />
      <Nav />
      <Outlet />
    </div>
  );
}
