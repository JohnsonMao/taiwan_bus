import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import { ReactComponent as Search } from "../../asset/icon/search.svg";
import { ReactComponent as Like } from "../../asset/icon/like.svg";
import "./index.scss";

const linkStyle = {
  className: "btn btn-primary fs-3 p-2",
};

export default function Index() {
  return (
    <Container className="position-relative" as="nav">
      <ul className="router">
        <li>
          <Link to="/" className="btn btn-gray-light fs-3 p-2">
            <GPS />
            <span>附近公車站</span>
          </Link>
        </li>
        <li>
          <Link to="citybus" {...linkStyle}>
            <Search />
            <span>查詢公車</span>
          </Link>
        </li>
        <li>
          <Link to="favorites" {...linkStyle}>
            <Like />
            <span>我的收藏</span>
          </Link>
        </li>
      </ul>
      <footer className="fixed-bottom d-flex justify-content-center fs-4 p-4 fw-light">
        Taiwan Bus © Code:&nbsp;
        <a
          href="https://github.com/JohnsonMao/taiwan_bus"
          target="_blank"
          rel="noreferrer"
        >
          Mao
        </a>
        &nbsp;/ Design:&nbsp;
        <a
          href="https://ktdesigner.neocities.org/UIweb/TaiwanBus.html"
          target="_blank"
          rel="noreferrer"
        >
          KT
        </a>
      </footer>
    </Container>
  );
}
