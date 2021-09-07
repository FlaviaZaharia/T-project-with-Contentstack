import * as React from "react";
import { returnTo, step4Link } from "./layout.module.css";
import group from "../images/Group.svg";
import arrow from "../images/Group 647.svg";
import { Link } from "gatsby";
const FullArrowWithText = ({ url, children }) => {
  return (
    <div className={step4Link}>
      <img src={group} alt="" />
      <Link className={returnTo} to={url}>
        {children}
      </Link>
      <img src={arrow} alt="" />
    </div>
  );
};

export default FullArrowWithText;
