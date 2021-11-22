import React, { useEffect } from 'react'

export default function RouteName({ setRouteLevel }) {

  useEffect(() => {
    setRouteLevel(2);
  }, [setRouteLevel])
  
  return (
    <main className="main">
      RouteName
    </main>
  )
}
