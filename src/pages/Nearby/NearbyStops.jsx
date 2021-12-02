import DataList from "../../components/DataList";
import Loading from "../../components/Loading";

export default function NearbyStops({ data, map, zoom, loading }) {

  return (
    <>
      {loading ? (
        <Loading />
      ) : map ? (
        <DataList title="我的附近" data={data} map={map} zoom={zoom} />
      ) : null}
    </>
  );
}
