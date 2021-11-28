import { useEffect, useState, useCallback } from "react";

import { apiCityBus, apiRouteName } from "../api";
import { CITYBUS, ROUTENAME } from './type_config';

export default function useHttp(type = "", city = "", routeName = "", control = true) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const updateData = useCallback(async () => {
    try {
      switch (type) {
        case CITYBUS:
          const cityBusData = await apiCityBus(city);
          setData(cityBusData);
          break;

        case ROUTENAME:
          const routeNameData = await apiRouteName(city, routeName);
          setData(routeNameData);
          break;

        default:
      }
      setLoading(false)
    } catch (error) {
      setError(true);
      setData(error);
    }
  }, [type, city, routeName, control]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    console.log('-------api-------')
    const delay = setTimeout(() => {
      updateData();
    }, 0);
    return () => {
      clearTimeout(delay);
    };
  }, [updateData]);

  return { data, error, loading };
}
