import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../../pages/Layout";
import RouteList from "./RouteList";
import StationList from "./StationList";
import "./datalist.scss";

export default function DataList({ setShow, title, data = [], map, zoom }) {
  const { setRouteArr, favorites, setFavorites, setShowMap } = useContext(Context);

  /* 收藏功能 */
  const onClickRoute = (e) => {
    const { start, end, favorite } = e.target.parentNode.dataset;
    if (!favorite) {
      setRouteArr([start, end]);
    }
    if (favorite) {
      const active = e.target.classList[0];
      const favoriteObj = {
        RouteName: {},
      };
      const favoriteArr = favorite.split("&");
      favoriteObj.RouteUID = favoriteArr[0];
      favoriteObj.RouteName.Zh_tw = favoriteArr[1];
      favoriteObj.DepartureStopNameZh = favoriteArr[2];
      favoriteObj.DestinationStopNameZh = favoriteArr[3];
      switch (active) {
        case "active":
          const newData = favorites.filter(
            (favorite) => favorite.RouteUID !== favoriteObj.RouteUID
          );
          setFavorites(newData);
          break;
        default:
          setFavorites((prevData) => [...prevData, favoriteObj]);
      }
    }
  };

  /* 顯示鍵盤功能 */
  const handleShow = (e) => {
    const { start } = e.target.parentNode.dataset;
    if (setShow && start) {
      setShow(); /* Keyboard */
    }
  };

  /* 站點鎖定地圖 */
  const onClickStation = useCallback(
    (e) => {
      const center =
        e.target.parentNode.dataset.center || e.target.dataset.center;
      if (center) {
        const newCenter = center.split("-");
        setShowMap(true);
        map.setView(newCenter, zoom + 3);
      }
    },
    [setShowMap, map, zoom]
  );

  return (
    <div className="datalist h-100 py-7">
      <h2 className="fs-2 mb-1">{title || "請選擇縣市"}</h2>
      <ul
        className="h-100 pb-7"
        onClick={title === "我的附近" ? onClickStation : onClickRoute}
        onMouseOver={handleShow}
        onTouchStart={handleShow}
      >
        {title === "我的附近" ? (
          <StationList data={data} map={map} zoom={zoom} />
        ) : title === "我的收藏" && data[0] === undefined ? (
          <Link to="/citybus" className="fs-3">
            趕快去添加路線吧～
          </Link>
        ) : (
          <RouteList data={data} favorites={favorites} />
        )}
      </ul>
    </div>
  );
}

DataList.propTypes = {
  setShow: PropTypes.func,
  title: PropTypes.string,
  data: PropTypes.array,
  zoom: PropTypes.number,
  map: PropTypes.object
};
