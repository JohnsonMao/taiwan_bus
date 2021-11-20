import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Index from './pages/Index';
import './asset/scss/style.scss';

export default function App() {
  return (
    <div className='index vh-100'>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
