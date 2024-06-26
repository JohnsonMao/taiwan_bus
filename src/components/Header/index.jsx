import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PubSub from "pubsub-js";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import GoBackSvg from "../../asset/icon/goBack.svg?react";
import Logo from "../../asset/icon/logo.svg?react";
import MapSvg from "../../asset/icon/map.svg?react";
import LikeBtnSvg from "../../asset/icon/like_btn.svg?react";
import "./header.scss";

export default function Header({ setKeyword, setShowMap, showMap }) {
  /* 搜索框 focus，虛擬鍵盤隱藏 */
  const handleFocus = () => {
    PubSub.publish("focus", true);
  };

  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = PubSub.subscribe("search", (_, state) => {
      switch (state) {
        case "倒退":
          setSearch((prevState) => prevState.slice(0, -1));
          break;
        case "C":
          setSearch("");
          break;
        default:
          setSearch((prevState) => prevState + state);
      }
    });
    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    setKeyword(search);
  }, [setKeyword, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <header className="fixed-top">
      <Container className="d-flex align-items-end py-3">
        <div className="d-flex justify-content-end align-items-center header">
          <div className="result_show">
            <button type="button" onClick={goBack} aria-label="上一頁 Go back">
              <GoBackSvg />
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
                onFocus={handleFocus}
              />
            </div>
          </div>
          <div className="result_show d-flex justify-content-end">
            <button
              onClick={toggleMap}
              className="flex-shrink-0 position-relative map"
              aria-label="地圖 Map"
            >
              <MapSvg />
              <span
                className={`crossIcon ${showMap ? "showCross" : ""}`}
              ></span>
            </button>
          </div>
          <div className="page_show like">
            <Link
              to="/favorites"
              className="flex-shrink-0 ms-2 d-block"
              aria-label="我的收藏 Favorites"
            >
              <LikeBtnSvg />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

Header.propTypes = {
  setKeyword: PropTypes.func.isRequired,
  setShowMap: PropTypes.func.isRequired,
  showMap: PropTypes.bool.isRequired,
};
