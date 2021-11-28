import React, { useRef } from 'react';
import { Container } from "react-bootstrap";

import Keyboard from '../Keyboard';
import DataList from '../DataList';

export default function SearchResult() {
  const noKeyboard = useRef(null);

  const isShow = () => {
    noKeyboard.current.checked = true
  }

  return (
    <>
    <Container>
      <DataList setShow={isShow} />
    </Container>
    <input type="radio" className="d-none" name="keyboard" id="noKeyboard" ref={noKeyboard} />
    <Keyboard />
    </>
  )
}