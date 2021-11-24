import React from "react";
import PubSub from "pubsub-js";

import "./nav.scss";


export default function Nav() {
  const isBack = (e) => {
    const isBackValue = e.target.id === "back";
    PubSub.publish("direction", isBackValue)
  }

  return (
    <div className="fixed-top nav">
      <input type="radio" className="d-none" name="direction" id="go" onChange={isBack} defaultChecked />
      <input type="radio" className="d-none" name="direction" id="back" onChange={isBack} />
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
