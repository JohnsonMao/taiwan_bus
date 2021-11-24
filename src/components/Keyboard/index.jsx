import React, { useState, useContext } from "react";
import PubSub from "pubsub-js";

import { ReactComponent as Del } from "../../asset/icon/del.svg";
import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import Context from "../../utils/useContext";
import {
  keyboard_base,
  keyboard_city,
  keyboard_more,
} from "../../utils/keyboard_config";
import "./keyboard.scss";

/* `基本路線鍵盤` */
const KeyboardBase = ({ city }) => (
  <div className="keyboard bg-gray p-6">
    <label
      htmlFor="cityKeyboard"
      className="btn btn-light city-btn"
      aria-label="選擇縣市"
    >
      <GPS className="me-1" /> {city || "選擇縣市"}
    </label>

    <label
      htmlFor="search"
      className="btn btn-primary manual-btn"
      aria-label="手動輸入"
    >
      手動輸入
    </label>

    {keyboard_base.map((item) =>
      item !== "更多" ? (
        <button
          key={item}
          type="button"
          className={`btn ${
            Number.isInteger(item) ? "btn-light" : "btn-primary"
          }`}
          aria-label={item}
          data-route={item}
        >
          {item === "倒退" ? <Del data-route={item} /> : item}
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
    )}
  </div>
);

/* `設定城市鍵盤` */
const KeyboardCity = ({ city, onClick }) => {
  const [enterCity, setEnterCity] = useState(city);
  const handleEnterCity = (e) => setEnterCity(e.target.dataset.city);
  return (
    <div className="keyboard bg-gray p-6" onClick={handleEnterCity}>
      {keyboard_city.map((item) => (
        <button
          key={item.City}
          type="button"
          className="btn btn-primary fs-3 p-0"
          aria-label={item.CityName + " " + item.City}
          data-city={item.CityName}
        >
          {item.CityName}
        </button>
      ))}
      <label
        htmlFor="baseKeyboard"
        className="btn btn-primary fs-3 enter-btn"
        aria-label="設定"
        data-city={enterCity}
        onClick={onClick}
      >
        設定
      </label>
    </div>
  );
};

/* `更多路線鍵盤` */
const KeyboardMore = () => (
  <div className="keyboard bg-gray p-6">
    {keyboard_more.map((item) => (
      <button
        key={item}
        type="button"
        className="btn btn-primary fs-3 p-0"
        aria-label={item}
        data-route={item}
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
);

const inputRadio = {
  type: "radio",
  className: "d-none",
  name: "keyboard",
};

export default function Keyboard() {
  
  const { city, setCity } = useContext(Context);

  const pressBtn = (e) => {
    const routeName = e.target.dataset.route || '';
    PubSub.publish("search", { routeName })
  }

  return (
    <div className="keyboard-frame" onClick={pressBtn}>
      <input {...inputRadio} id="cityKeyboard" defaultChecked={!city} />
      <KeyboardCity city={city} onClick={setCity} />
      <input {...inputRadio} id="baseKeyboard" defaultChecked={city} />
      <KeyboardBase city={city} />
      <input {...inputRadio} id="moreKeyboard" />
      <KeyboardMore />
    </div>
  );
}
