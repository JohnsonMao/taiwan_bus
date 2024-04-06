import { useCallback, useState, useEffect, useContext } from "react";

import { apiGetBusRoute } from "../../api/basic/v2";
import { Context } from "../../pages/Layout";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import RouteTable from "../RouteTable";
import Map from "../Map";

export default function RoutePage() {
  const { city_En, isBack, search_keyword, latitude, longitude } =
    useContext(Context);
  const getBusRoute = useCallback(
    () => apiGetBusRoute(city_En, search_keyword),
    [city_En, search_keyword]
  );
  const { refetch, data = [], error } = useFetch(getBusRoute);

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
  let lat = 0;
  let lon = 0;
  const stopsArr = data?.[0] || [];
  stopsArr.forEach((stop) => {
    lat += stop.StopPosition.PositionLat;
    lon += stop.StopPosition.PositionLon;
  });
  const stopsArrLen = stopsArr.length === 0 ? 1 : stopsArr.length;
  lat = lat / stopsArrLen;
  lon = lon / stopsArrLen;

  const [center, setCenter] = useState([lat, lon]);
  const handleCenter = (e) => {
    setCenter(e);
  };

  const [person, setPerson] = useState([latitude, longitude]);

  useEffect(() => {
    setCenter([lat, lon]);
    setPerson([latitude, longitude]);
  }, [lat, lon, setCenter, latitude, longitude, setPerson]);

  return (
    <div className={isBack ? "backMarkerShow" : "goMarkerShow"}>
      {data?.[0] == null ? (
        <Loading />
      ) : error ? (
        <div>網頁出錯啦！</div>
      ) : (
        <>
          {map ? (
            <RouteTable
              data={data}
              setIndex={handleIndex}
              setCenter={handleCenter}
              refetch={refetch}
            />
          ) : null}
          <Map
            data={data}
            index={index}
            center={center}
            person={person}
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
