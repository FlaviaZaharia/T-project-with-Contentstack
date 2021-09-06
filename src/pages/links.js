import * as React from "react";
import {linkText, skip, linkItem } from "./layout.module.css";
import { Link} from "gatsby";
import blackarrow from"../images/blackarrow.svg"

import NextStepButton from "./nextstep-button";
const Links = ({ data }) => {
  const button_text = data&&data.allContentstackTPages.nodes[0].button_text&&data.allContentstackTPages.nodes[0].button_text;
  const url = data&&data.allContentstackTPages.nodes[0].url&&data.allContentstackTPages.nodes[0].url;
  return (
    <div className={linkText}>
      <NextStepButton button_text={button_text} img_src={blackarrow} url={url}/>
      <div className={linkItem}>
        <Link className={skip} to={url}>
          Skip this step
        </Link>
      </div>
    </div>
  );
};

export default Links;
