import * as React from "react";
import { Link } from "gatsby";
import { returnTo, link } from "./layout.module.css";
import smallarrow from "../images/Group 614.svg";
const TextArrow = ({ url, children }) => {
  return (
    <div className={link}>
      <Link className={returnTo} to={url}>
        {children}
      </Link>
      <img src={smallarrow} alt="" />
    </div>
  );
};

export default TextArrow;
