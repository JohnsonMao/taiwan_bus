import React from "react";

import "./nav.scss";

export default function Nav() {
  /*  控制 App.js 的 radio  */
  return (
    <div className="fixed-top nav">
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
