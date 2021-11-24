import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PubSub from "pubsub-js";
import { Container } from "react-bootstrap";

import { ReactComponent as Logo } from "../../asset/icon/logo.svg";
import { ReactComponent as GoBack } from "../../asset/icon/goBack.svg";
import { ReactComponent as MapSVG } from "../../asset/icon/map.svg";
import "./header.scss";

export default function Header() {

  const [search, setSearch] = useState('');
  
  useEffect(() => {
    const token = PubSub.subscribe("search", (_, state) => {
      switch (state.routeName) {
        case "倒退":
          setSearch(prevState => prevState.slice(0, -1))
          break;
        case "C":
          setSearch('')
          break;
        default:
          setSearch(prevState => prevState + state.routeName)
      }
    })
    return () => {
      PubSub.unsubscribe(token);
    }
  }, [])

  const handleSearch = (e) => setSearch(e.target.value);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathnameArr = pathname.split("/");

  const goBack = () => navigate(-1);

  return (
    <header className="fixed-top">
      <Container className="d-flex align-items-end py-3">
        <div className="d-flex justify-content-end align-items-center w-100">
          <div className="result_show">
            <button type="button" onClick={goBack} aria-label="上一頁 Go back">
              <GoBack />
            </button>
          </div>
          <div className="logo d-flex justify-content-center">
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
          </div>
          <div className="page_show">
            <div>
              <input
                type="search"
                id="search"
                placeholder="選擇路線或手動輸入關鍵字"
                aria-label="選擇路線或手動輸入關鍵字"
                className="w-100"
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="result_show">
            <Link
              to={pathname + "/map"}
              className={`flex-shrink-0 text-end ${
                pathnameArr[3] ? "d-none" : "d-block"
              }`}
              aria-label="地圖 Map"
            >
              <MapSVG />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
