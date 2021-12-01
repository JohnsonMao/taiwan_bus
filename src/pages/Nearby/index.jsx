import React from "react";
import useGeolocation from "react-hook-geolocation";
import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

import DataList from "../../components/DataList";
import { NEARBY } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";

export default function Nearby() {

  const { latitude, longitude } = useGeolocation();
  const location = latitude + ', ' + longitude
  const { data, error, loading } = useHttp(NEARBY, location);
  return (
    <main className="main">
      <Container className="content">
        <Routes>
          <Route index element={<DataList title="我的附近" data={data} />} />
        </Routes>
      </Container>
    </main>
  );
}
