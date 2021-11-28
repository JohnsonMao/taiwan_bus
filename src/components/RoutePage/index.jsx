import React, { useState, useEffect, useContext } from "react";

import { Context } from "../../pages/Layout";
import { ROUTENAME } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";
import RouteTable from "../RouteTable";
import Map from "../Map";

export default function RoutePage() {

  const { city_En, isBack, routeName } = useContext(Context);
  const [control, setControl] = useState(true)
  const [count, setCount] = useState(15)

  const { data, error, loading } = useHttp(ROUTENAME, city_En, routeName, control);

  

  useEffect(() => {
    const timer = setInterval(() => {
      if (count === 0) {
        setControl(!control);
        setCount(15)
      }
      setCount(count => count - 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [count])

  console.log(count, control, data)

  const mapData = isBack ? data[1] : data[0];
  
  const [map, setMap] = useState(null)
  const zoom = 14;
  const handleMap = (e) => {
    setMap(e)
  }
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : data[0] === 0 ? null : (
        <>
          {map ? <RouteTable data={data} map={map} zoom={zoom} count={count} /> : null}
          <Map data={mapData} setMap={handleMap} zoom={zoom} geo={data[2]} />
        </>
      )}
    </div>
  );
}
