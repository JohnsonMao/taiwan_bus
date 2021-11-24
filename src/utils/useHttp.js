import { useEffect, useState, useCallback } from "react";

import { apiCityBus } from "../api";

export default function useHttp(city = "", type = "cityBus") {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const updateData = useCallback(async () => {
    try {
      switch (type) {
        case "cityBus":
          const result = await apiCityBus();
          setData(result);
          break;
        default:
      }
      setLoading(false)
    } catch (error) {
      setError(true);
      setData(error);
    }
  }, [type]);

  useEffect(() => {
    setData([]);
  }, [type]);

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
