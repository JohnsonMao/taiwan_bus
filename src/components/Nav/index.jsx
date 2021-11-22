import React, { useState } from "react";

import "./nav.scss";

export default function Nav() {
  const [isBack, setIsBack] = useState(false);
  const handleIsBack = (e) => {
    const { node } = e.target.dataset;
    setIsBack(node === 'back');
  };

  return (
    <div className="fixed-top nav">
      <ul className={isBack ? "back" : null} onClick={handleIsBack}>
        <li className="w-50">
          <button type="button" className="nav-link w-100 p-4" data-node="go">
            <h2 data-node="go">
              <span className="text-primary me-1" data-node="go">
                往
              </span>
              台北橋
            </h2>
          </button>
        </li>
        <li className="w-50">
          <button type="button" className="nav-link w-100 p-4" data-node="back">
            <h2 data-node="back">
              <span className="text-primary me-1" data-node="back">
                往
              </span>
              南港
            </h2>
          </button>
        </li>
      </ul>
    </div>
  );
}
