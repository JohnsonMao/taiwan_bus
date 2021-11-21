import React from 'react'
import { Container } from 'react-bootstrap';

export default function DataList() {
  return (
    <Container>
      <h2>台北市</h2>
      <ul>
        <li>
          <h3>紅 10</h3>
          <h4>台北橋 <span>到</span> 南港</h4>
        </li>
        <li>
          <h3>紅 9</h3>
          <h4>台北橋 <span>到</span> 南港</h4>
        </li>
      </ul>
    </Container>
  )
}
