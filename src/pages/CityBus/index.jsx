import React, { useEffect } from 'react';

import Keyboard from '../../components/Keyboard';
import DataList from '../../components/DataList';

export default function CityBus({ setRouteLevel }) {

  useEffect(() => {
    setRouteLevel(1);
  }, [setRouteLevel])
  
  return (
    <main className="main">
      <DataList />
      <Keyboard />
    </main>
  )
}
