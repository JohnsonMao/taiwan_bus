import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../../pages/Layout";
import ListLi from "./List_li";
import "./datalist.scss";

export default function DataList({ setShow, title, data = [] }) {
  const { setRouteArr, favorites, setFavorites } = useContext(Context);

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

  const handleShow = (e) => {
    const { start } = e.target.parentNode.dataset;
    if (setShow && start) {
      setShow(); /* Keyboard */
    }
  };

  return (
    <div className="datalist h-100 py-7">
      <h2 className="fs-2 mb-1">{title || "請選擇縣市"}</h2>
      <ul
        className="h-100 pb-7"
        onClick={onClickRoute}
        onMouseOver={handleShow}
        onTouchStart={handleShow}
      >
        {setShow === undefined && data[0] === undefined ? (
          <Link to="/citybus" className="fs-3">趕快去添加路線吧～</Link>
        ) : (
          <ListLi data={data} favorites={favorites} />
        )}
      </ul>
    </div>
  );
}

DataList.propTypes = {
  setShow: PropTypes.func,
  title: PropTypes.string,
  data: PropTypes.array,
};
