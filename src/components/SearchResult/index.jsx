import React, { useRef, useContext } from "react";
import { Container } from "react-bootstrap";

import Keyboard from "../Keyboard";
import DataList from "../DataList";
import Loading from "../Loading";
import { Context } from "../../pages/Layout";
import { CITYBUS } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";

export default function SearchResult() {
  /* 控制鍵盤 */
  const noKeyboard = useRef(null);
  const noShow = () => {
    noKeyboard.current.checked = true;
  };

  const { city, city_En, keyword } = useContext(Context);

  const { data, loading } = useHttp(CITYBUS, city_En);

  /* 關鍵字即時過濾清單 */
  const filterData =
    data[0] === 0
      ? []
      : data.filter((item) => item?.RouteName.Zh_tw.indexOf(keyword) !== -1);
  let showData = filterData;
  /* 渲染前 50 筆資料，無限下拉功能尚未實作 */
  showData.length = 50;

  return (
    <>
      <Container className="content">
        {keyword.trim() === "" ? null : loading ? (
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
