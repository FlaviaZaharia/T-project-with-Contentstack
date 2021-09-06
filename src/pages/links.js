import * as React from "react";
import { button, linkText, linkItem } from "./layout.module.css";
import { Link } from "gatsby";
import blackarrow from "../images/blackarrow.svg";
import TextArrow from "./textarrow";
const Links = ({ data }) => {
  const button_text =
    data &&
    data.allContentstackTPages.nodes[0].button_text &&
    data.allContentstackTPages.nodes[0].button_text;
  const url =
    data &&
    data.allContentstackTPages.nodes[0].url &&
    data.allContentstackTPages.nodes[0].url;
  return (
    <div className={linkText}>
      <div className={linkItem}>
        <Link className={button} to={url}>
          {button_text} <img src={blackarrow} alt="smallarrow" />
        </Link>
      </div>
      <div className={linkItem}>
        <TextArrow url={url}>Skip this step</TextArrow>
      </div>
    </div>
  );
};

export default Links;
