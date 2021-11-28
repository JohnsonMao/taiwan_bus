import React, { useCallback, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import { Context } from "../../pages/Layout";
import "./routeTable.scss";

const StopsTable = ({ stops }) =>
  stops.map((stop) => (
    <Row
      as="li"
      key={stop.StopUID}
      className={`gx-3 align-items-center py-1 ${
        stop?.A2EventType === 0
          ? "leaving"
          : stop?.A2EventType === 1
          ? "enter"
          : stop.StopStatus === 0
          ? "waiting"
          : ""
      }`}
      data-center={
        stop.StopPosition.PositionLat + "-" + stop.StopPosition.PositionLon
      }
    >
      <Col
        xs={3}
        data-center={
          stop.StopPosition.PositionLat + "-" + stop.StopPosition.PositionLon
        }
      >
        <div className="event text-center fs-3">
          {stop?.A2EventType === 0
            ? "離站中"
            : stop?.A2EventType === 1
            ? "進站中"
            : stop.StopStatus === 1
            ? "未發車"
            : stop.StopStatus === 0
            ? Math.floor(stop.EstimateTime / 60) !== 0
              ? Math.floor(stop.EstimateTime / 60) + " 分"
              : "1 分內"
            : stop.EstimateTime === undefined
            ? "未提供"
            : stop.StopStatus === 3
            ? "末班已過"
            : "今日不停"}
        </div>
      </Col>
      <Col
        xs={5}
        data-center={
          stop.StopPosition.PositionLat + "-" + stop.StopPosition.PositionLon
        }
      >
        <h3 className="stop fs-3">{stop.StopName.Zh_tw}</h3>
      </Col>
      <Col
        xs={3}
        data-center={
          stop.StopPosition.PositionLat + "-" + stop.StopPosition.PositionLon
        }
      >
        <div className="text-end fs-3 text-primary">
          {stop?.PlateNumb || null}
        </div>
      </Col>
      <Col
        xs={1}
        data-center={
          stop.StopPosition.PositionLat + "-" + stop.StopPosition.PositionLon
        }
      >
        <div className="circle fs-4 text-center lh-sm">{stop.StopSequence}</div>
      </Col>
    </Row>
  ));

export default function RouteTable({ data, map, zoom, count }) {
  const { isBack, routeName, showMap, setShowMap } = useContext(Context);
  const onClick = useCallback((e) => {
    const center = e.target.parentNode.dataset.center || e.target.dataset.center;
    if (center) {
      const newCenter = center.split('-')
      console.log(center)
      setShowMap(true);
      map.setView(newCenter, zoom)
    }
  }, [setShowMap, map, zoom])
  return (
    <Container
      fluid
      className={`position-fixed bottom-0 routeTable bg-gray ${
        showMap ? "showMap" : ""
      }`}
    >
      <div className="d-flex justify-content-between pt-5 pb-2">
        <h2 className="fs-1 text-primary">{routeName}</h2>
        <span className="fs-4 text-primary"> {count + 1} 秒後更新</span>
      </div>
      <div
        className={`list d-flex overflow-hidden${isBack ? " isBack" : ""}`}
        onClick={onClick}
      >
        <ul className="flex-shrink-0 pt-1 pb-3">
          <StopsTable stops={data[0]} />
        </ul>
        <ul className="flex-shrink-0 pt-1 pb-3">
          <StopsTable stops={data[1]} />
        </ul>
      </div>
    </Container>
  );
}

StopsTable.propTypes = {
  stops: PropTypes.array,
};

RouteTable.propType = {
  data: PropTypes.array.isRequired,
  map: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};
