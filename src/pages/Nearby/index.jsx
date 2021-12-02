import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import useGeolocation from "react-hook-geolocation";
import { Container } from "react-bootstrap";

import NearbyStops from "./NearbyStops";
import StopRoute from "./StopRoute";
import Loading from "../../components/Loading";
import Map from "../../components/Map";
import { NEARBY } from "../../utils/type_config";
import { Context } from "../Layout";
import useHttp from "../../utils/useHttp";

export default function Nearby() {
  const { showMap } = useContext(Context);
  const { latitude, longitude } = useGeolocation();
  const location = latitude + ", " + longitude;
  const { data, loading } = useHttp(NEARBY, location);

  const [map, setMap] = useState(null);
  const zoom = 17;
  const handleMap = (e) => {
    setMap(e);
  };

  const center = [latitude, longitude];
  return (
    <main className="main">
      <Container className={`position-fixed bottom-0 tableAndMap bg-dark ${showMap ? 'showMap' : ''}`}>
        <Routes>
          <Route
            index
            element={
              <NearbyStops
                data={data}
                map={map}
                zoom={zoom}
                loading={loading}
              />
            }
          />
          <Route path=":id" element={<StopRoute />} />
        </Routes>
      </Container>
      {loading ? (
        <Loading />
      ) : latitude !== null ? (
        <Map
          data={data}
          center={center}
          setMap={handleMap}
          zoom={zoom}
          page="nearby"
        />
      ) : null}
    </main>
  );
}
