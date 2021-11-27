import React, { useState, useRef } from 'react';
import { Container } from "react-bootstrap";

import Keyboard from '../Keyboard';
import DataList from '../DataList';

export default function SearchResult() {
  const [show, setShow] = useState(false);  // show open keyboard button
  const noKeyboard = useRef(null);
  const isShow = () => {
    setShow(true);
    noKeyboard.current.checked = true
  }
  const noShow = () => {
    setShow(false);
  }
  return (
    <>
    <Container>
      <DataList setShow={isShow} show={show} />
    </Container>
    <input type="radio" className="d-none" name="keyboard" id="noKeyboard" ref={noKeyboard} />
    <Keyboard setShow={noShow} show={show}/>
    </>
  )
}