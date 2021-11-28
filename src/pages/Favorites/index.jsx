import React, { useContext } from "react";

import { Context } from "../../pages/Layout";
import ListLi from "../../components/DataList/List_li";
import "../../components/DataList/datalist.scss";

export default function Favorites() {
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

  return (
    <main className="main container">
      <h2 className="fs-2 mt-7 mb-1">我的收藏</h2>
      <ul className="datalist pb-7" onClick={onClickRoute}>
        <ListLi data={favorites} favorites={favorites} />
      </ul>
    </main>
  );
}
