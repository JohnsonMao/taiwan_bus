import { useEffect, useState, useCallback } from "react";

import { apiCityBus, apiRouteName, apiNearby } from "../api";
import { CITYBUS, ROUTENAME, NEARBY } from "./type_config";

export default function useHttp(
  type = "",
  location = "",
  routeName = "",
  control = true
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const updateData = useCallback(async () => {
    try {
      switch (type) {
        case CITYBUS:
          const cityBusData = await apiCityBus(location);
          setData(cityBusData);
          break;

        case ROUTENAME:
          const routeNameData = await apiRouteName(location, routeName);
          setData(routeNameData);
          break;

        case NEARBY:
          if (location === 'null, null') return
          const newLocation = { $spatialFilter: [`nearby(${location}, 500)`] };
          const nearbyData = await apiNearby(newLocation);
          setData(nearbyData);
          break;

        default:
      }
      setLoading(false);
    } catch (error) {
      setError(true);
      setData(error);
    }
  }, [type, location, routeName]);

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
