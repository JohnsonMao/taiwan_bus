import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import { ReactComponent as Search } from "../../asset/icon/search.svg";
import "./index.scss";

const linkStyle = {
  className:
    "btn btn-primary fs-3 p-2",
};

export default function Index({ setRouteLevel }) {

  useEffect(() => {
    setRouteLevel(0);
  }, [setRouteLevel])

  return (
    <Container className="position-relative">
      <ul className="router">
        <li>
          <Link to="/nearby" {...linkStyle}>
            <GPS />
            <span>附近公車站</span>
          </Link>
        </li>
        <li>
          <Link to="/citybus" {...linkStyle}>
            <Search />
            <span>查詢公車</span>
          </Link>
        </li>
        <li>
          <Link to="/intercitybus" {...linkStyle}>
            <Search />
            <span>查詢客運</span>
          </Link>
        </li>
      </ul>
      <footer className="fixed-bottom d-flex justify-content-center fs-4 p-4 fw-light">
        Taiwan Bus © Code: Mao / Design: KT
      </footer>
    </Container>
  );
}
