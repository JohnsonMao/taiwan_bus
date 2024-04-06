import { useCallback, useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Loading from "../../components/Loading";
import Map from "../../components/Map";
import { Context } from "../Layout";
import { apiGetNearbyStation } from "../../api/advanced/v2";
import useFetch from "../../hooks/useFetch";
import NearbyStops from "./NearbyStops";
import StopRoute from "./StopRoute";

export default function Nearby() {
  const { showMap, latitude, longitude, geoError } = useContext(Context);
  const location = latitude + ", " + longitude;
  const getNearbyStation = useCallback(
    () => apiGetNearbyStation({ $spatialFilter: [`nearby(${location}, 500)`] }),
    [location]
  );
  const { data = [], loading } = useFetch(getNearbyStation);

  const [map, setMap] = useState(null);
  const zoom = 17;
  const handleMap = (e) => {
    setMap(e);
  };
  const [index, setIndex] = useState("noIndex");
  const handleIndex = (e) => {
    setIndex(e);
  };

  const [center, setCenter] = useState([latitude, longitude]);
  const [person, setPerson] = useState([latitude, longitude]);
  useEffect(() => {
    setCenter([latitude, longitude]);
    setPerson([latitude, longitude]);
  }, [latitude, longitude, setCenter]);

  return (
    <main className="main">
      <Container
        fluid="lg"
        className={`pb-7 position-fixed bottom-0 tableAndMap bg-dark ${
          showMap ? "showMap" : ""
        }`}
      >
        <Routes>
          <Route
            index
            element={
              <NearbyStops
                data={data}
                setIndex={handleIndex}
                setCenter={setCenter}
                loading={loading}
              />
            }
          />
          <Route path=":id" element={<StopRoute />} />
        </Routes>
      </Container>
      {geoError ? (
        <p className="text-center mt-8">不好意思！您的裝置並未開啟定位功能～</p>
      ) : center[0] === null ? (
        <p className="text-center mt-8">正在獲取定位中...</p>
      ) : loading ? (
        <Loading />
      ) : (
        <Map
          data={data}
          index={index}
          center={center}
          person={person}
          map={map}
          setMap={handleMap}
          zoom={zoom}
          page="nearby"
        />
      )}
    </main>
  );
}
