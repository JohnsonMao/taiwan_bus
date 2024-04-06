import { useContext, useRef } from "react";
import PubSub from "pubsub-js";

import BusMp3 from "../../asset/Bus.mp3";
import KeyboardSvg from "../../asset/icon/keyboard.svg";
import { Context } from "../../pages/Layout";
import KeyboardBase from "./KeyboardBase";
import KeyboardCity from "./KeyboardCity";
import KeyboardMore from "./KeyboardMore";
import "./keyboard.scss";

/* input radio 共同設定 */
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
          src={KeyboardSvg}
          className="px-4 py-2"
          alt="鍵盤 Keyboard"
        />
      </label>
      <audio ref={audio}>
        <source type="audio/mpeg" src={BusMp3} />
      </audio>
    </div>
  );
}
