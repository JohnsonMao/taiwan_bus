import { useCallback, useContext } from "react";

import { apiGetStationRoute } from "../../api/advanced/v2";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import DataList from "../../components/DataList";
import { Context } from "../../pages/Layout";

export default function StopRoute() {
  const { city_En, search_keyword } = useContext(Context);
  const [stationId, stationName] = search_keyword.split("-");
  const getStationRoute = useCallback(
    () => apiGetStationRoute(city_En, stationId),
    [city_En, stationId]
  );
  const { data, loading } = useFetch(getStationRoute);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DataList title={stationName} data={data} page="nearby" />
      )}
    </>
  );
}
