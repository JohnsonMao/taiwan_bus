import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import { Context } from "../../pages/Layout";
import { ROUTENAME } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";
import "./routeTable.scss";

const StopsTable = ({ stops }) => (
  stops.map((stop) => (
    <Row
      as="li"
      key={stop.StopID}
      className={`gx-3 align-items-center ${
        stop?.A2EventType === 0
          ? "leaving"
          : stop?.A2EventType === 1
          ? "enter"
          : stop.StopStatus === 0
          ? "waiting"
          : ""
      }`}
    >
      <Col xs={3}>
        <div className="event text-center fs-3">
          {stop.StopStatus === 1
            ? "未發車"
            : stop?.A2EventType === 0
            ? "離站中"
            : stop?.A2EventType === 1
            ? "進站中"
            : stop.StopStatus === 0
            ? (Math.floor(stop.EstimateTime / 60) !== 0 ? Math.floor(stop.EstimateTime / 60) + " 分" : "1 分內")
            : stop.StopStatus === 3
            ? "末班已過"
            : "今日不停"}
        </div>
      </Col>
      <Col xs={5}>
        <h3 className="stop fs-3">{stop.StopName.Zh_tw}</h3>
      </Col>
      <Col xs={3}>
        <div className="text-end fs-3 text-primary">
          {stop?.PlateNumb || null}
        </div>
      </Col>
      <Col xs={1}>
        <div className="circle"></div>
      </Col>
    </Row>
  ))
)

export default function RouteTable() {
  const { city_En, isBack, routeName } = useContext(Context);

  const { data, error, loading } = useHttp(ROUTENAME, city_En, routeName);
  console.log(data, error, loading);
  return (
    <Container className="position-relative">
      <div className="d-flex justify-content-between mt-5 mb-2">
        <h2 className="fs-1 text-primary">{routeName}</h2>
        <span className="fs-4 text-primary">*於 3 秒前更新</span>
      </div>
      <div className={`list d-flex overflow-hidden${isBack ? " isBack" : ""}`}>
        <ul className="flex-shrink-0">
          {loading ? (
            <div>Loading</div>
          ) : data[0] === 0 ? null : (
            <StopsTable stops={data[0]} />
          )}
        </ul>
        <ul className="flex-shrink-0">
          {loading ? (
            <div>Loading</div>
          ) : data[0] === 0 ? null : (
            <StopsTable stops={data[1]} />
          )}
        </ul>
      </div>
    </Container>
  );
}

StopsTable.propTypes = {
  stops: PropTypes.array
}