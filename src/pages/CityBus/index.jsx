import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Keyboard from '../../components/Keyboard';

export default function CityBus({ setPathname }) {
  const { pathname } = useLocation();

  useEffect(() => {
    setPathname(pathname);
  }, [setPathname, pathname])

  return (
    <div className="fixed-bottom bg-gray p-6">
      <Keyboard />
    </div>
  )
}
