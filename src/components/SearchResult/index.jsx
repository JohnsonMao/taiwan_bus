import { useCallback, useRef, useEffect, useContext } from "react";
import PubSub from "pubsub-js";
import { Container } from "react-bootstrap";

import Keyboard from "../Keyboard";
import DataList from "../DataList";
import Loading from "../Loading";
import { apiGetBusRoutesByCity } from "../../api/basic/v2";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../pages/Layout";

export default function SearchResult() {
  /* 控制鍵盤 */
  const noKeyboard = useRef(null);
  const noShow = () => {
    noKeyboard.current.checked = true;
  };

  useEffect(() => {
    const token = PubSub.subscribe("focus", () => {
      noShow();
    });
    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  const { city, city_En, keyword } = useContext(Context);

  const getBusRoutesByCity = useCallback(
    () => apiGetBusRoutesByCity(city_En),
    [city_En]
  );
  const { data, loading } = useFetch(getBusRoutesByCity);

  /* 關鍵字即時過濾清單 */
  const filterData = Array.isArray(data)
    ? data.filter?.((item) => item?.RouteName.Zh_tw.indexOf(keyword) !== -1)
    : [];
  /* 渲染前 50 筆資料，無限下拉功能尚未實作 */
  const showData = filterData.slice(50);

  return (
    <>
      <Container className="content">
        {keyword.trim() === "" ? (
          <>
            <h2 className="fs-2 pt-7 mb-1">{city || "請選擇縣市"}</h2>
            <div className="fs-3">選擇路線或手動輸入關鍵字～</div>
          </>
        ) : loading ? (
          <Loading />
        ) : (
          <DataList setShow={noShow} title={city} data={showData} />
        )}
      </Container>
      <input
        type="radio"
        className="d-none"
        name="keyboard"
        id="noKeyboard"
        ref={noKeyboard}
      />
      <Keyboard />
    </>
  );
}
