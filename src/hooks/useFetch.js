import { useReducer } from "react";
import { useEffect, useState } from "react";

/**
 * @template T
 * @template E
 * @typedef UseFetchResult
 * @prop {T} [data]
 * @prop {E} [error]
 * @prop {boolean} isError
 * @prop {boolean} isLoading
 * @prop {() => void} refetch
 */

/**
 * @template T success data
 * @template E error data
 * @param {() => Promise<T>} api fetch api function
 * @returns {UseFetchResult<T, E}
 */
export default function useFetch(api) {
  const [rerenderCount, refetch] = useReducer((pre) => pre + 1, 1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    let pass = true;

    if (typeof api !== "function") return;

    setIsLoading(true);
    setError(null);

    api()
      .then((json) => pass && setData(json))
      .catch(setError)
      .finally(() => setIsLoading(false));

    return () => {
      pass = false;
    };
  }, [api, rerenderCount]);

  return { refetch, data, error, isLoading, isError: !!error };
}
