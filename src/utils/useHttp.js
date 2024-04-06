import { useEffect, useState, useCallback } from "react";

import { apiGetBusRoutesByCity, apiGetBusRoute } from "../api/basic/v2";
import { apiGetNearbyStation, apiGetStationRoute } from "../api/advanced/v2";
import { CITYBUS, ROUTENAME, NEARBY, STATION } from "./type_config";

export default function useHttp(
  type = "",
  location = "",
  search_keyword = "",
  control = true
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const updateData = useCallback(async () => {
    try {
      switch (type) {
        case CITYBUS:
          const cityBusData = await apiGetBusRoutesByCity(location);
          setData(cityBusData);
          break;

        case ROUTENAME:
          const routeNameData = await apiGetBusRoute(location, search_keyword);
          setData(routeNameData);
          break;

        case NEARBY:
          if (location === 'null, null') return
          const newLocation = { $spatialFilter: [`nearby(${location}, 500)`] };
          const nearbyData = await apiGetNearbyStation(newLocation);
          setData(nearbyData);
          break;

        case STATION:
          const stationData = await apiGetStationRoute(location, search_keyword)
          setData(prevData => [prevData[0], stationData]);
          break;

        default:
      }
      setLoading(false);
    } catch (error) {
      setError(true);
      setData(error);
    }
  }, [type, location, search_keyword]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const delay = setTimeout(() => {
      updateData();
    }, 0);
    return () => {
      clearTimeout(delay);
    };
  }, [updateData, control]);

  return { data, error, loading };
}
