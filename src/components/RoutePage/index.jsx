import React, { useState, useEffect, useContext } from "react";

import { Context } from "../../pages/Layout";
import { ROUTENAME } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";
import Loading from "../Loading";
import RouteTable from "../RouteTable";
import Map from "../Map";

export default function RoutePage() {

  const CD = 30;    /* 幾秒更新 */
  const { city_En, isBack, search_keyword } = useContext(Context);
  const [control, setControl] = useState(true)
  const [count, setCount] = useState(CD)

  const { data, error } = useHttp(ROUTENAME, city_En, search_keyword, control);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count === 0) {
        setControl(!control);
        setCount(CD)
      }
      setCount(count => count - 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [count, setControl, control])
  
  const [map, setMap] = useState(null)
  const zoom = 14;
  const handleMap = (e) => {
    setMap(e)
  }
  return (
    <div className={isBack ? 'backMarkerShow' : 'goMarkerShow'}>
      {data.length === 0 ? (
        <Loading />
      ) : data[0] === 0　|| error ? <div>網頁出錯啦！</div> : (
        <>
          {map ? <RouteTable data={data} map={map} zoom={zoom} count={count} /> : null}
          <Map data={data} setMap={handleMap} zoom={zoom} />
        </>
      )}
    </div>
  );
}
