import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Context } from "../../pages/Layout";
import { ROUTENAME } from "../../utils/type_config";
import useHttp from "../../utils/useHttp";
import "./routeTable.scss";

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
          {data[0] === 0
            ? null
            : data[0]?.Stops.map((stop) => (
                <Row
                  as="li"
                  key={stop.StopID}
                  className="gx-3 align-items-center"
                >
                  <Col xs={3}>
                    <div className="event text-center fs-3">未發車</div>
                  </Col>
                  <Col xs={5}>
                    <h3 className="stop fs-3">{stop.StopName.Zh_tw}</h3>
                  </Col>
                  <Col xs={3}>
                    <div className="text-end fs-3 text-primary"></div>
                  </Col>
                  <Col xs={1}>
                    <div className="circle"></div>
                  </Col>
                </Row>
              ))}
          <Row as="li" className="gx-3 align-items-center">
            <Col xs={3}>
              <div className="event text-center fs-3">未發車</div>
            </Col>
            <Col xs={5}>
              <h3 className="stop fs-3">小北街</h3>
            </Col>
            <Col xs={3}>
              <div className="text-end fs-3 text-primary"></div>
            </Col>
            <Col xs={1}>
              <div className="circle"></div>
            </Col>
          </Row>
          <Row as="li" className="gx-3 align-items-center enter">
            <Col xs={3}>
              <div className="event text-center fs-3">進站中</div>
            </Col>
            <Col xs={5}>
              <h3 className="stop fs-3">士林區農會</h3>
            </Col>
            <Col xs={3}>
              <div className="text-end fs-3 text-primary">ic 619-U3</div>
            </Col>
            <Col xs={1}>
              <div className="circle"></div>
            </Col>
          </Row>
          <Row as="li" className="gx-3 align-items-center waiting">
            <Col xs={3}>
              <div className="event text-center fs-3">4 分</div>
            </Col>
            <Col xs={5}>
              <h3 className="stop fs-3">士林國中</h3>
            </Col>
            <Col xs={3}>
              <div className="text-end fs-3 text-primary"></div>
            </Col>
            <Col xs={1}>
              <div className="circle"></div>
            </Col>
          </Row>
          <Row as="li" className="gx-3 align-items-center leaving">
            <Col xs={3}>
              <div className="event text-center fs-3">離站中</div>
            </Col>
            <Col xs={5}>
              <h3 className="stop fs-3">陽明山立體停車場(草行館)</h3>
            </Col>
            <Col xs={3}>
              <div className="text-end fs-3 text-primary">ic 256-FR</div>
            </Col>
            <Col xs={1}>
              <div className="circle"></div>
            </Col>
          </Row>
        </ul>
        <ul className="flex-shrink-0">
          {data[0] === 0
            ? null
            : data[1]?.Stops.map((stop) => (
                <Row
                  as="li"
                  key={stop.StopID}
                  className="gx-3 align-items-center"
                >
                  <Col xs={3}>
                    <div className="event text-center fs-3">未發車</div>
                  </Col>
                  <Col xs={5}>
                    <h3 className="stop fs-3">{stop.StopName.Zh_tw}</h3>
                  </Col>
                  <Col xs={3}>
                    <div className="text-end fs-3 text-primary"></div>
                  </Col>
                  <Col xs={1}>
                    <div className="circle"></div>
                  </Col>
                </Row>
              ))}
          <Row as="li" className="gx-3 align-items-center">
            <Col xs={3}>
              <div className="event text-center fs-3">未發車</div>
            </Col>
            <Col xs={5}>
              <h3 className="stop fs-3">小北街</h3>
            </Col>
            <Col xs={3}>
              <div className="text-end fs-3 text-primary"></div>
            </Col>
            <Col xs={1}>
              <div className="circle"></div>
            </Col>
          </Row>
          <Row as="li" className="gx-3 align-items-center enter">
            <Col xs={3}>
              <div className="event text-center fs-3">進站中</div>
            </Col>
            <Col xs={5}>
              <h3 className="stop fs-3">士林區農會</h3>
            </Col>
            <Col xs={3}>
              <div className="text-end fs-3 text-primary">ic 619-U3</div>
            </Col>
            <Col xs={1}>
              <div className="circle"></div>
            </Col>
          </Row>
          <Row as="li" className="gx-3 align-items-center waiting">
            <Col xs={3}>
              <div className="event text-center fs-3">4 分</div>
            </Col>
            <Col xs={5}>
              <h3 className="stop fs-3">士林國中</h3>
            </Col>
            <Col xs={3}>
              <div className="text-end fs-3 text-primary"></div>
            </Col>
            <Col xs={1}>
              <div className="circle"></div>
            </Col>
          </Row>
          <Row as="li" className="gx-3 align-items-center leaving">
            <Col xs={3}>
              <div className="event text-center fs-3">離站中</div>
            </Col>
            <Col xs={5}>
              <h3 className="stop fs-3">陽明山立體停車場(草行館)</h3>
            </Col>
            <Col xs={3}>
              <div className="text-end fs-3 text-primary">ic 256-FR</div>
            </Col>
            <Col xs={1}>
              <div className="circle"></div>
            </Col>
          </Row>
        </ul>
      </div>
    </Container>
  );
}
