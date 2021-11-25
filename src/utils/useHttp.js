import { useEffect, useState, useCallback } from "react";

import { apiCityBus, apiStopOfRoute } from "../api";
import { CITYBUS, ROUTENAME } from './type_config';
import useInterval from './useInterval';

export default function useHttp(type = "", city = "", routeName = "") {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  console.log("useHttp", city, routeName)

  const updateData = useCallback(async () => {
    try {
      switch (type) {
        case CITYBUS:
          const cityBusData = await apiCityBus(city);
          console.log("call city bus api")
          setData(cityBusData);
          break;

        case ROUTENAME:
          const stopOfRouteData = await apiStopOfRoute(city, routeName);
          console.log("call route name api")
          setData(stopOfRouteData);
          break;

        default:
      }
      setLoading(false)
    } catch (error) {
      setError(true);
      setData(error);
    }
  }, [type, city, routeName]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const delay = setTimeout(() => {
      updateData();
    }, 0);
    return () => {
      clearTimeout(delay);
    };
  }, [updateData]);

  return { data, error, loading };
}
