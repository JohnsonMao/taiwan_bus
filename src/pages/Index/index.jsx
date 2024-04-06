import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import GpsSvg from "../../asset/icon/GPS.svg?react";
import SearchSvg from "../../asset/icon/search.svg?react";
import LikeSvg from "../../asset/icon/like_light.svg?react";
import TdxLogo from "../../asset/tdxlogo.png";

import "./index.scss";

export default function Index() {
  const links = [
    {
      Icon: GpsSvg,
      title: "附近公車站",
      to: "nearby",
    },
    {
      Icon: SearchSvg,
      title: "查詢公車",
      to: "citybus",
    },
    {
      Icon: LikeSvg,
      title: "我的收藏",
      to: "favorites",
    },
  ];

  return (
    <Container className="position-relative" as="nav">
      <ul className="router">
        {links.map(({ Icon, to, title }) => (
          <li key={to}>
            <Link to={to} className="btn btn-primary fs-3 p-2">
              <Icon />
              <span>{title}</span>
            </Link>
          </li>
        ))}
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
              src={TdxLogo}
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
