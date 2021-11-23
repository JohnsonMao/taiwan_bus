import React from "react";
import { Container } from "react-bootstrap";

import { ReactComponent as Del } from "../../asset/icon/del.svg";
import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import {
  keyboard_base,
  keyboard_city,
  keyboard_more,
} from "../../utils/keyboard_config";
import "./keyboard.scss";

const KeyboardBase = () => (
  <div className="keyboard bg-gray p-6">
    <label htmlFor="cityKeyboard" className="btn btn-light city-btn" aria-label="選擇縣市">
      <GPS className="me-1" /> 選擇縣市
    </label>

    <label
      htmlFor="search"
      className="btn btn-primary manual-btn"
      aria-label="手動輸入"
    >
      手動輸入
    </label>

    {keyboard_base.map((item) => (
      item !== "更多" ? (
      <button
        key={item}
        type="button"
        className={`btn ${
          Number.isInteger(item) ? "btn-light" : "btn-primary"
        }`}
        aria-label={item}
      >
        {item === "倒退" ? <Del /> : item}
      </button>
      ) : (
        <label
        key={item}
        htmlFor="moreKeyboard"
        className="btn btn-primary"
        aria-label={item}
      >
        {item}
      </label>
      )
    ))}
  </div>
);

const KeyboardCity = () => (
  <div className="keyboard bg-gray p-6">
    {keyboard_city.map((item) => (
      <button
        key={item.City}
        type="button"
        className="btn btn-primary fs-3 p-0"
        aria-label={item.CityName + " " + item.City}
      >
        {item.CityName}
      </button>
    ))}
    <label
      htmlFor="baseKeyboard"
      className="btn btn-primary fs-3 enter-btn"
      aria-label="設定"
    >
      設定
    </label>
  </div>
);

const KeyboardMore = () => (
  <div className="keyboard bg-gray p-6">
    {keyboard_more.map((item) => (
      <button
        key={item}
        type="button"
        className="btn btn-primary fs-3 p-0"
        aria-label={item}
      >
        {item}
      </button>
    ))}
    <label
      htmlFor="baseKeyboard"
      className="btn btn-primary fs-3 goBack-btn"
      aria-label="回上一頁"
    >
      回上一頁
    </label>
  </div>
)

export default function Keyboard() {
  return (
    <>
    <input type="radio" className="d-none" name="keyboard" id="noKeyboard" />
    <Container className="position-relative">
      <input type="radio" className="d-none" name="keyboard" id="cityKeyboard" />
      <KeyboardCity />
      <input type="radio" className="d-none" name="keyboard" id="baseKeyboard" defaultChecked />
      <KeyboardBase />
      <input type="radio" className="d-none" name="keyboard" id="moreKeyboard" />
      <KeyboardMore />
    </Container>
    </>
  );
}
