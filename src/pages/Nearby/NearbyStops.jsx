import useGeolocation from "react-hook-geolocation";

import DataList from "../../components/DataList";
import { NEARBY } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";

export default function NearbyStops() {

  const { latitude, longitude } = useGeolocation();
  const location = latitude + ', ' + longitude
  const { data } = useHttp(NEARBY, location);
  
  return (<DataList title="我的附近" data={data} />)
}