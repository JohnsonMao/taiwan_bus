import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import PubSub from 'pubsub-js';

import Context from "../../utils/useContext";
import useHttp from "../../utils/useHttp";
import "./datalist.scss";

export default function DataList() {
  const { city } = useContext(Context);
  const { data, error, loading } = useHttp();
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    const token = PubSub.subscribe("filter", (_, state) => {
      setFilterType(state)
    })
    return () => {
      PubSub.unsubscribe(token);
    }
  }, [])

  const filterData = data.filter(item => item?.RouteName.Zh_tw.indexOf(filterType) !== -1);
  let showData = filterData
  showData.length = 50;

  return (
    <>
    <h2 className="fs-2 mt-7 mb-1">{city || '請選擇縣市'}</h2>
    <ul className="datalist keyboard-show">
      {
        filterType.trim() === ''? null :
        loading ? <div>Loading</div> : (
        showData.map(item => (
          <li key={item.RouteUID}>
            <Link to={item.RouteUID} className="d-block px-4 py-3">
              <h3 className="fs-1 lh-base">{item.RouteName.Zh_tw}</h3>
              <h4 className="fs-3 text-light lh-base">
                {item.DepartureStopNameZh}<span className="text-primary mx-1">往</span>{item.DestinationStopNameZh}
              </h4>
            </Link>
          </li>
        )))
      }
    </ul>
    </>
  );
}
