import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Index from './pages/Index';
import CityBus from './pages/CityBus';
import RouteName from './pages/RouteName';
import './asset/scss/style.scss';

export default function App() {
  const [ pathname, setPathname ] = useState('/');
  const handlePathname = (e) => setPathname(e);
  const routeProps = {
    setPathname: handlePathname
  }
  return (
    <HashRouter>
      <div className={`${pathname === '/' ? '' : 'page '}wrap vh-100`}>
        <Header />
        <Routes>
          <Route path="/" element={<Index {...routeProps} />} />
          <Route path="citybus" element={<CityBus {...routeProps} />}>
            <Route path=":id" element={<RouteName />} />
          </Route>
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
