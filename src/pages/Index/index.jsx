import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import { ReactComponent as Search } from "../../asset/icon/search.svg";
import { ReactComponent as Dashed } from "../../asset/icon/dashed_mobile.svg";
import "./index.scss";

const linkStyle = {
  className:
    "btn border border-primary rounded d-flex align-items-center justify-content-center fs-3 p-2",
};

export default function Index() {
  return (
    <>
      {/* <Dashed className="position-absolute end-0 dashed" /> */}
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
    </>
  );
}
