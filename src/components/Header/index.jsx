import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as Logo } from "../../asset/icon/logo.svg";
import { ReactComponent as GoBack } from "../../asset/icon/goBack.svg";
import { ReactComponent as MapSVG } from "../../asset/icon/map.svg";
import "./header.scss";

export default function Header() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  return (
    <header className="fixed-top">
      <Container className="d-flex align-items-end py-3">
        <Row className="gx-3 flex-nowrap w-100 align-items-center">
          <Col className="goBack">
            <button
              onClick={goBack}
              aria-label="上一頁 Go back"
            >
              <GoBack />
            </button>
          </Col>
          <Col className="logo">
            <Link
              to="/"
              className="d-block flex-shrink-0"
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
          <Col className="icon">
            <Link to=""
              className="d-block flex-shrink-0 text-end"
              aria-label="地圖 Map">
              <MapSVG />
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
