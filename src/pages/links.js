import * as React from "react";
import { button, linkText, skip, linkItem } from "./layout.module.css";
import { Link} from "gatsby";
const Links = ({ data }) => {
  const button_text = data.allContentstackTPages.nodes[0].button_text;
  const url = data.allContentstackTPages.nodes[0].url;
  return (
    <div className={linkText}>
      <div className={linkItem}>
        <Link className={button} to={url}>
          {button_text}
        </Link>
      </div>
      <div className={linkItem}>
        <Link className={skip} to={url}>
          Skip this step
        </Link>
      </div>
    </div>
  );
};

export default Links;
