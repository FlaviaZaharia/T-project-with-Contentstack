import * as React from "react";
import { header } from "./layout.module.css";
import headerTitle from "../images/header.svg"
const Header = () => {
  return (
    <div className={header}>
      <img src={headerTitle} alt="title"/>
    </div>
  );
};

export default Header;
