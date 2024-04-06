import React, { useCallback, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import Timer from './Timer';
import { Context } from "../../pages/Layout";
import "./routeTable.scss";

const StopsTable = ({ stops, direction }) => {
  return (
    <>
      {stops.map((stop, index) => {
        const { PositionLat, PositionLon } = stop.StopPosition;
        return (
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
            data-centerstr={PositionLat + "-" + PositionLon}
            data-index={direction + "-" + index}
          >
            <Col
              xs={3}
              data-centerstr={PositionLat + "-" + PositionLon}
              data-index={direction + "-" + index}
            >
              <div className="event text-center fs-3">
                {stop?.A2EventType === 0
                  ? "離站中"
                  : stop?.A2EventType === 1
                  ? "進站中"
                  : stop.StopStatus === 0
                  ? stop.EstimateTime !== undefined &&
                    Math.floor(stop.EstimateTime / 60) !== 0
                    ? Math.floor(stop.EstimateTime / 60) + " 分"
                    : "1 分內"
                  : "未發車"}
              </div>
            </Col>
            <Col
              xs={5}
              data-centerstr={PositionLat + "-" + PositionLon}
              data-index={direction + "-" + index}
            >
              <h3 className="stop fs-3">{stop.StopName.Zh_tw}</h3>
            </Col>
            <Col
              xs={3}
              data-centerstr={PositionLat + "-" + PositionLon}
              data-index={direction + "-" + index}
            >
              <div className="text-end fs-3 text-primary">
                {stop?.PlateNumb || null}
              </div>
            </Col>
            <Col
              xs={1}
              data-centerstr={PositionLat + "-" + PositionLon}
              data-index={direction + "-" + index}
            >
              <div className="circle fs-4 text-center lh-sm">
                {stop.StopSequence}
              </div>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default function RouteTable({ data, setIndex, setCenter, refetch }) {
  const { isBack, search_keyword, showMap, setShowMap } = useContext(Context);

  /* 控制點擊指引地圖站牌 */
  const onClick = useCallback(
    (e) => {
      const centerstr =
        e.target.parentNode.dataset.centerstr || e.target.dataset.centerstr;
      const index = e.target.parentNode.dataset.index || e.target.dataset.index;
      if (centerstr) {
        const center = centerstr.split("-");
        setShowMap(true);
        setCenter(center);
        setIndex(index);
      }
    },
    [setShowMap, setCenter, setIndex]
  );
  return (
    <Container
      fluid
      className={`position-fixed bottom-0 tableAndMap bg-gray ${
        showMap ? "showMap" : ""
      }`}
    >
      <div className="d-flex justify-content-between pt-5 pb-2">
        <h2 className="fs-1 text-primary">{search_keyword}</h2>
        <Timer refetch={refetch} />
      </div>
      <div
        className={`routeList d-flex overflow-hidden${isBack ? " isBack" : ""}`}
        onClick={onClick}
      >
        <ul className="flex-shrink-0 pt-1 pb-3">
          <StopsTable stops={data[0]} direction={0} />
        </ul>
        <ul className="flex-shrink-0 pt-1 pb-3">
          <StopsTable stops={data[1]} direction={1} />
        </ul>
      </div>
    </Container>
  );
}

StopsTable.propTypes = {
  stops: PropTypes.array,
  direction: PropTypes.number,
};

RouteTable.propType = {
  data: PropTypes.array.isRequired,
  setIndex: PropTypes.func.isRequired,
  setCenter: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};
