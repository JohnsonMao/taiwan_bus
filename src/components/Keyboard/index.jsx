import { useContext, useRef } from "react";
import PubSub from "pubsub-js";

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
          src={require("../../asset/icon/keyboard.svg").default}
          className="px-4 py-2"
          alt="鍵盤 Keyboard"
        />
      </label>
      <audio ref={audio}>
        <source
          src={require("../../asset/Bus.mp3").default}
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
