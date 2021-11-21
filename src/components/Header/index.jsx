import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as Logo } from "../../asset/icon/logo.svg";
import "./header.scss";

export default function Header() {
  return (
    <header className="fixed-top">
      <Container className="d-flex align-items-end py-3">
        <Row className="gx-3 ms-auto flex-nowrap">
          <Col xs="auto">
            <Link
              to="/"
              className="d-block logo flex-shrink-0"
              aria-label="回首頁 Homepage"
            >
              <h1>
                <Logo />
                Taiwan Bus
              </h1>
            </Link>
          </Col>
          <Col className="searchInput">
            <div>
              <input
                type="search"
                id="search"
                placeholder="選擇路線或手動輸入關鍵字"
                aria-label="選擇路線或手動輸入關鍵字"
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
