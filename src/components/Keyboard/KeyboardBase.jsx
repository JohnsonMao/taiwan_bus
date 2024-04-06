import PropTypes from "prop-types";

import GpsSvg from "../../asset/icon/GPS.svg?react";
import { keyboard_base } from "../../asset/keyboard";

export default function KeyboardBase({ city }) {
  return (
    <div className="keyboard bg-gray p-6">
      <label
        htmlFor="cityKeyboard"
        className="btn btn-light city-btn"
        aria-label="選擇縣市"
      >
        <GpsSvg /> {city || "選擇縣市"}
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
}

KeyboardBase.propTypes = {
  city: PropTypes.string,
};
