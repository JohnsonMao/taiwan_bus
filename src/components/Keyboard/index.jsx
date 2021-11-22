import React from "react";
import { Container } from 'react-bootstrap';

import { ReactComponent as Del } from "../../asset/icon/del.svg";
import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import { keyboard_base } from "../../utils/keyboard_config";
import "./keyboard.scss";

export default function Keyboard() {
  return (
    <div className="fixed-bottom bg-gray">
      <Container className="keyboard p-6">
        {keyboard_base.map((item) =>
          item === "手動輸入" ? (
            <label
              key={item}
              htmlFor="search"
              className="btn btn-primary manual-btn"
              aria-label={item}
            >
              {item}
            </label>
          ) : (
            <button
              key={item}
              type="button"
              className={`btn ${
                item === "選擇縣市"
                  ? "btn-light city-btn"
                  : Number.isInteger(item)
                  ? "btn-light"
                  : "btn-primary"
              }`}
              aria-label={item}
            >
              {item === "選擇縣市" ? (
                <>
                  <GPS className="me-1"/>
                  {item}
                </>
              ) : item === "倒退" ? (
                <Del />
              ) : (
                item
              )}
            </button>
          )
        )}
      </Container>
    </div>
  );
}
