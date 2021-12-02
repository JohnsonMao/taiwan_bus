import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';

export default function Nearby() {

  return (
    <main className="main">
      <Container className="content">
        <Outlet />
      </Container>
    </main>
  );
}
