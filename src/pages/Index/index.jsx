import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./index.scss";

const linkStyle = {
  className: "btn btn-primary fs-3 p-2",
};

export default function Index() {
  return (
    <Container className="position-relative" as="nav">
      <ul className="router">
        <li>
          <Link to="nearby" {...linkStyle}>
            <img src="/icon/GPS.svg" alt="搜索附近圖標" />
            <span>附近公車站</span>
          </Link>
        </li>
        <li>
          <Link to="citybus" {...linkStyle}>
            <img src="/icon/search.svg" alt="查詢公車圖標" />
            <span>查詢公車</span>
          </Link>
        </li>
        <li>
          <Link to="favorites" {...linkStyle}>
            <img src="/icon/like_light.svg" alt="我的收藏圖標" />
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
