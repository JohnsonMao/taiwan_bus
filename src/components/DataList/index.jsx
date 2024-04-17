import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../../pages/Layout";
import RouteList from "./RouteList";
import StationList from "./StationList";
import "./datalist.scss";

export default function DataList({
  setShow,
  setIndex,
  setCenter,
  title,
  data = [],
  page,
}) {
  const { setRouteArr, favorites, setFavorites } = useContext(Context);

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
        case "active": {
          const newData = favorites.filter(
            (favorite) => favorite.RouteUID !== favoriteObj.RouteUID
          );
          setFavorites(newData);
          break;
        }
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
  const onClickStation = (e) => {
    const centerstr =
      e.target.parentNode.dataset.centerstr || e.target.dataset.centerstr;
    const index = e.target.parentNode.dataset.index || e.target.dataset.index;
    if (centerstr) {
      const center = centerstr.split("-");
      setCenter(center);
      setIndex(index);
    }
  };

  return (
    <div className={`datalist ${page === "nearby" ? "pt-7" : "py-7"}`}>
      <h2 className="fs-2 mb-1">{title || "請選擇縣市"}</h2>
      <ul
        className={title === "我的附近" ? "" : "pb-7"}
        onClick={title === "我的附近" ? onClickStation : onClickRoute}
        onMouseOver={handleShow}
        onTouchStart={handleShow}
      >
        {title === "我的附近" ? (
          <StationList data={data} />
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
  page: PropTypes.string,
  zoom: PropTypes.number,
  map: PropTypes.object,
  setIndex: PropTypes.func,
  setCenter: PropTypes.func,
};
