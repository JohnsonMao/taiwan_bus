import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../../pages/Layout";
import { CITYBUS } from "../../utils/type_config";
import ListLi from "./List_li";
import Loading from "../Loading";
import useHttp from "../../utils/useHttp";
import "./datalist.scss";

export default function DataList({ setShow }) {
  const { city, city_En, keyword, setRouteArr, favorites, setFavorites } =
    useContext(Context);

  const { data, loading } = useHttp(CITYBUS, city_En);

  /* 關鍵字即時過濾清單 */
  const filterData =
    data[0] === 0
      ? []
      : data.filter((item) => item?.RouteName.Zh_tw.indexOf(keyword) !== -1);
  let showData = filterData;
  /* 渲染前 50 筆資料，無限下拉功能尚未實作 */
  showData.length = 50;

  const onClickRoute = (e) => {
    const { start, end, favorite } = e.target.parentNode.dataset;
    if (!favorite) {
      setRouteArr([start, end]);
    }
    if (favorite) {
      const active = e.target.classList[0];
      const favoriteObj = {
        RouteName: {}
      }
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
    if (start) {
      setShow();
    }
  };

  return (
    <>
      <h2 className="fs-2 mt-7 mb-1">{city || "請選擇縣市"}</h2>
      <ul
        className="datalist pb-7"
        onClick={onClickRoute}
        onMouseOver={handleShow}
        onTouchStart={handleShow}
      >
        {keyword.trim() === "" ? null : loading ? (
          <Loading />
        ) : (
          <ListLi data={showData} favorites={favorites} />
        )}
      </ul>
    </>
  );
}

DataList.propTypes = {
  setShow: PropTypes.func.isRequired,
};
