import * as React from "react";
import { header } from "./layout.module.css";
import headerTitle from "../images/header.svg";
const Header = () => {
  return (
    <header className={header}>
      <img src={headerTitle} alt="title" />
    </header>
  );
};

export default Header;
