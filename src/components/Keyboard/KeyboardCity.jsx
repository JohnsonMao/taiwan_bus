import { useState } from "react";
import PropTypes from "prop-types";

import { keyboard_city } from "../../asset/keyboard";

export default function KeyboardCity({ city, setCity }) {
  const [enterCity, setEnterCity] = useState(city || "");
  const handleEnterCity = (e) => {
    const { city, savecity, node } = e.target.dataset;
    switch (node) {
      case "setCity":
        setEnterCity(city);
        break;
      case "saveCity":
        setCity(savecity);
        break;
      default:
    }
  };
  return (
    <div className="keyboard bg-gray p-6" onClick={handleEnterCity}>
      {keyboard_city.map((item) => (
        <button
          key={item.City}
          type="button"
          className={`btn btn-primary fs-3 p-0 ${
            enterCity === item.CityName ? "active" : ""
          }`}
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
}

KeyboardCity.propTypes = {
  setCity: PropTypes.func.isRequired,
  city: PropTypes.string,
};
