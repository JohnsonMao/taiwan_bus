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
      <footer className="fixed-bottom d-flex justify-content-center align-items-center fs-4 p-4 fw-light gap-1">
        Taiwan Bus ©
        <div className="d-flex align-items-center gap-1">
          Code:
          <a
            href="https://github.com/JohnsonMao/taiwan_bus"
            target="_blank"
            rel="noreferrer"
          >
            Mao
          </a>
        </div>
        /
        <div className="d-flex align-items-center gap-1">
          Design:
          <a
            href="https://www.behance.net/gallery/131646273/Taiwan-Bus-Project"
            target="_blank"
            rel="noreferrer"
          >
            KT
          </a>
        </div>
        /
        <div className="d-flex align-items-center gap-1">
          資料介接
          <a
            href="https://tdx.transportdata.tw/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/tdxlogo.png"
              alt="交通部TDX平臺 Logo"
              width={120}
              className="bg-white rounded"
            />
          </a>
        </div>
      </footer>
    </Container>
  );
}
