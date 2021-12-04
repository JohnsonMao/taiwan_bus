import React, { useState, useEffect, useContext } from "react";

import { Context } from "../../pages/Layout";
import { ROUTENAME } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";
import Loading from "../Loading";
import RouteTable from "../RouteTable";
import Map from "../Map";

export default function RoutePage() {
  const { city_En, isBack, search_keyword } = useContext(Context);
  const [control, setControl] = useState(true);
  const handleControl = (e) => {
    setControl(e)
  }

  const { data, error } = useHttp(ROUTENAME, city_En, search_keyword, control);

  const [map, setMap] = useState(null);
  const zoom = 14;
  const handleMap = (e) => {
    setMap(e);
  };
  const [index, setIndex] = useState("noIndex");
  const handleIndex = (e) => {
    setIndex(e);
  };

  /* 擷取所有站點的中心點 */
  let latitude = 0;
  let longitude = 0;
  const stopsArr = data[0] || [];
  stopsArr.forEach((stop) => {
    latitude += stop.StopPosition.PositionLat;
    longitude += stop.StopPosition.PositionLon;
  });
  const stopsArrLen = stopsArr.length === 0 ? 1 : stopsArr.length;
  latitude = latitude / stopsArrLen;
  longitude = longitude / stopsArrLen;

  const [center, setCenter] = useState([latitude, longitude]);
  const handleCenter = (e) => {
    setCenter(e);
  };

  useEffect(() => {
    setCenter([latitude, longitude])
  }, [latitude, longitude , setCenter])

  return (
    <div className={isBack ? "backMarkerShow" : "goMarkerShow"}>
      {data.length === 0 ? (
        <Loading />
      ) : data[0] === 0 || error ? (
        <div>網頁出錯啦！</div>
      ) : (
        <>
          {map ? (
            <RouteTable
              data={data}
              setIndex={handleIndex}
              setCenter={handleCenter}
              setControl={handleControl}
              control={control}
            />
          ) : null}
          <Map
            data={data}
            index={index}
            center={center}
            map={map}
            setMap={handleMap}
            zoom={zoom}
            page="route"
          />
        </>
      )}
    </div>
  );
}
