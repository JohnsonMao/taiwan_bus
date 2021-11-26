import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../pages/Layout";
import { CITYBUS } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";
import "./datalist.scss";

export default function DataList() {
  const { city, city_En, keyword, setRouteArr } = useContext(Context);

  const { data, error, loading } = useHttp(CITYBUS, city_En);

  const filterData =
    data[0] === 0
      ? []
      : data.filter((item) => item?.RouteName.Zh_tw.indexOf(keyword) !== -1);
  let showData = filterData;
  /* 渲染前 50 筆資料 */
  showData.length = 50;

  const handleRouteArr = (e) => {
    const { start, end } = e.target.parentNode.dataset;
    console.log(e.target.parentNode);
    setRouteArr([start, end]);
  };

  return (
    <>
      <h2 className="fs-2 mt-7 mb-1">{city || "請選擇縣市"}</h2>
      <ul className="datalist keyboard-show" onClick={handleRouteArr}>
        {keyword.trim() === "" ? null : loading ? (
          <div>Loading</div>
        ) : (
          showData.map((item) => (
            <li
              key={item.RouteUID}
              data-start={item.DepartureStopNameZh}
              data-end={item.DestinationStopNameZh}
            >
              <Link
                to={item.RouteName.Zh_tw}
                className="d-block px-4 py-3"
                data-start={item.DepartureStopNameZh}
                data-end={item.DestinationStopNameZh}
              >
                <h3 className="fs-1 lh-base">{item.RouteName.Zh_tw}</h3>
                <h4
                  className="fs-3 text-light lh-base"
                  data-start={item.DepartureStopNameZh}
                  data-end={item.DestinationStopNameZh}
                >
                  {item.DepartureStopNameZh}
                  <span className="text-primary mx-1">往</span>
                  {item.DestinationStopNameZh}
                </h4>
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
