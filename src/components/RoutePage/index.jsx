import React, { useState, useContext } from "react";

import { Context } from "../../pages/Layout";
import { ROUTENAME } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";
import RouteTable from "../RouteTable";
import Map from "../Map";

export default function RoutePage() {

  const { city_En, isBack, routeName } = useContext(Context);
  
  const { data, error, loading } = useHttp(ROUTENAME, city_En, routeName);
  const mapData = isBack ? data[1] : data[0];
  
  const [map, setMap] = useState(null)
  const zoom = 14;
  const handleMap = (e) => {
    setMap(e)
  }
  console.log(map)
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : data[0] === 0 ? null : (
        <>
          {map ? <RouteTable data={data} map={map} zoom={zoom} /> : null}
          <Map data={mapData} setMap={handleMap} zoom={zoom} />
        </>
      )}
    </div>
  );
}
