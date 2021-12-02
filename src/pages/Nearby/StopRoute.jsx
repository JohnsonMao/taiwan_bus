import { useContext } from "react";

import { Context } from "../../pages/Layout";
import Loading from "../../components/Loading";
import DataList from "../../components/DataList";
import { STATION } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";

export default function StopRoute() {
  const { city_En, search_keyword } = useContext(Context);
  const searchArr = search_keyword.split("-");
  const { data, loading } = useHttp(STATION, city_En, searchArr[0]);

  return (
    <>
      {loading ? <Loading /> : <DataList title={searchArr[1]} data={data[1]} />}
    </>
  );
}
