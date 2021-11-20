import React from "react";

import { ReactComponent as Logo } from "../../asset/icon/logo.svg";
import { ReactComponent as GoHomeLogo } from "../../asset/icon/gohome_logo.svg";
import './navbar.scss';

export default function Header() {
  return (
    <header className="header fixed-top d-flex align-items-end">
      <h1 className="logo">
        <Logo />
        Taiwan Bus
      </h1>
    </header>
  );
}
