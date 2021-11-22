import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

import "./datalist.scss";

export default function DataList() {
  return (
    <Container>
      <h2 className="fs-2 mt-7 mb-1">台北市</h2>
      <ul className="datalist keyboard-show">
        <li>
          <Link to="a" className="d-block px-4 py-3">
            <h3 className="fs-1 lh-base">紅 10</h3>
            <h4 className="fs-3 text-light lh-base">
              台北橋<span className="text-primary mx-1">往</span>南港
            </h4>
          </Link>
        </li>
        <li>
          <Link to="b" className="d-block px-4 py-3">
            <h3 className="fs-1 lh-base">紅 10</h3>
            <h4 className="fs-3 text-light lh-base">
              台北橋<span className="text-primary mx-1">往</span>南港
            </h4>
          </Link>
        </li>
        <li>
          <Link to="c" className="d-block px-4 py-3">
            <h3 className="fs-1 lh-base">紅 10</h3>
            <h4 className="fs-3 text-light lh-base">
              台北橋<span className="text-primary mx-1">往</span>南港
            </h4>
          </Link>
        </li>
        <li>
          <Link to="d" className="d-block px-4 py-3">
            <h3 className="fs-1 lh-base">紅 10</h3>
            <h4 className="fs-3 text-light lh-base">
              台北橋<span className="text-primary mx-1">往</span>南港
            </h4>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
