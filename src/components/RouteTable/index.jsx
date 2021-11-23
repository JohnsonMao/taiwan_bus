import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import './routeTable.scss';

export default function RouteTable() {

  return (
    <Container className="overflow-hidden">
      <div className="fs-4 text-primary text-end mt-6 mb-2">*於 3 秒前更新</div>
      <div className="list d-flex">
        <ul className="flex-shrink-0">
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
