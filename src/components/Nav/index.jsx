import React from "react";
import PropTypes from 'prop-types';

import "./nav.scss";

export default function Nav({ setIsBack }) {

  const isBack = (e) => {
    const { id } = e.target;
    if (id === '') return
    const isBackValue = id === "back";
    setIsBack(isBackValue)
  }

  return (
    <div className="fixed-top nav" onClick={isBack}>
      <input type="radio" className="d-none" name="direction" id="go" defaultChecked />
      <input type="radio" className="d-none" name="direction" id="back" />
      <ul className="nav-list">
        <li className="w-50">
          <label htmlFor="go" className="nav-link d-block p-4">
            <h2 className="text-center">
              <span className="text-primary me-1">
                往
              </span>
              台北橋
            </h2>
          </label>
        </li>
        <li className="w-50">
          <label htmlFor="back" className="nav-link d-block p-4">
            <h2 className="text-center">
              <span className="text-primary me-1">
                往
              </span>
              南港
            </h2>
          </label>
        </li>
      </ul>
    </div>
  );
}

Nav.propTypes = {
  setIsBack: PropTypes.func.isRequired
}