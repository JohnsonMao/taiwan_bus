import React, { useContext } from "react";
import { Container } from 'react-bootstrap';

import { Context } from "../../pages/Layout";
import DataList from "../../components/DataList";

export default function Favorites() {
  const { setRouteArr, favorites, setFavorites } = useContext(Context);

  return (
    <main className="main">
      <Container className="content">
        <DataList title="我的收藏" data={favorites} />
      </Container>
    </main>
  );
}
