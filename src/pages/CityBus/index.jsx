import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Keyboard from '../../components/Keyboard';
import DataList from '../../components/DataList';

export default function CityBus({ setPathname }) {
  const { pathname } = useLocation();

  useEffect(() => {
    setPathname(pathname);
  }, [setPathname, pathname])

  return (
    <main className="main">
      <DataList />
      <Keyboard />
    </main>
  )
}
