import React, { useState, useEffect} from 'react';
import { Container } from "react-bootstrap";

import Keyboard from '../Keyboard';
import DataList from '../DataList';

export default function SearchResult() {
  const [showKeyboard, setShowKeyboard] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', function(e) {
      console.log(e)
    })
    return () => {

    }
  }, [])
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