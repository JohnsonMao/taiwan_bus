import React, { useState, useContext, useRef } from "react";
import PubSub from "pubsub-js";

import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import { Context } from "../../pages/Layout";
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
            item === "倒退"
              ? "delete-icon p-1"
              : Number.isInteger(item)
              ? "btn-light"
              : "btn-primary"
          }`}
          aria-label={item}
          data-route={item}
        >
          {item === "倒退" ? null : item}
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
const KeyboardCity = ({ city, setCity }) => {
  const [enterCity, setEnterCity] = useState(city || '');
  const handleEnterCity = (e) => {
    const { city, savecity, node } = e.target.dataset;
    switch (node) {
      case "setCity":
        console.log(city)
        setEnterCity(city);
        break;
      case "saveCity":
        console.log(savecity)
        setCity(savecity);
        break;
      default:
    } 
  }
  return (
    <div className="keyboard bg-gray p-6" onClick={handleEnterCity}>
      {keyboard_city.map((item) => (
        <button
          key={item.City}
          type="button"
          className={`btn btn-primary fs-3 p-0 ${enterCity === item.CityName ? 'active' : ''}`}
          aria-label={item.CityName + " " + item.City}
          data-city={item.CityName}
          data-node="setCity"
        >
          {item.CityName}
        </button>
      ))}
      <label
        htmlFor="baseKeyboard"
        className="btn btn-primary fs-3 enter-btn"
        aria-label="設定"
        data-savecity={enterCity}
        data-node="saveCity"
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
  const audio = useRef(null);
  const pressBtn = (e) => {
    const { route } = e.target.dataset;
    audio.current.currentTime = 0;
    audio.current.play();
    PubSub.publish("search", route || "");
  };

  return (
    <div className="keyboard-frame position-relative" onClick={pressBtn}>
      <input {...inputRadio} id="moreKeyboard" />
      <KeyboardMore />
      <input {...inputRadio} id="cityKeyboard" defaultChecked={!city} />
      <KeyboardCity city={city} setCity={setCity} />
      <input {...inputRadio} id="baseKeyboard" defaultChecked={city} />
      <KeyboardBase city={city} />
      <label
        htmlFor="baseKeyboard"
        className="position-absolute bottom-0 end-0 text-primary bg-gray me-2 rounded keyboard-show-btn"
        aria-label="鍵盤 Keyboard"
      >
        <img
          src={require("../../asset/icon/keyboard.svg").default}
          className="px-4 py-2"
          alt="鍵盤 Keyboard"
        />
      </label>
      <audio ref={audio}>
        <source src={require("../../asset/Bus.mp3").default} type="audio/mpeg" />
      </audio>
    </div>
  );
}
