import React from 'react';
import { Container } from "react-bootstrap";

import Keyboard from '../Keyboard';
import DataList from '../DataList';

export default function SearchResult() {
  return (
    <>
    <input type="radio" className="d-none" name="keyboard" id="noKeyboard" />
    <Container className="position-relative">
      <DataList />
      <Keyboard />
    </Container>
    </>
  )
}