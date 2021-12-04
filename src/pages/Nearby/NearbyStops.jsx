import DataList from "../../components/DataList";
import Loading from "../../components/Loading";

export default function NearbyStops({ data, setIndex, setCenter, loading }) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DataList
          title="我的附近"
          data={data}
          setIndex={setIndex}
          setCenter={setCenter}
          page="nearby"
        />
      )}
    </>
  );
}
