import React from "react";
import useGeolocation from "react-hook-geolocation";
import { Container } from 'react-bootstrap';

import DataList from "../../components/DataList";
import Loading from "../../components/Loading";
import { NEARBY } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";

export default function Nearby() {

  const { latitude, longitude } = useGeolocation();
  const location = latitude + ', ' + longitude
  const { data, error, loading } = useHttp(NEARBY, location);
  console.log(data)
  return (
    <main className="main">
      <Container className="content">
        {
          loading ? <Loading /> :
          <DataList title="我的附近" data={data} />
        }
      </Container>
    </main>
  );
}
