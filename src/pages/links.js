import * as React from "react";
import { button, linkText, skip,linkItem } from "./layout.module.css";
import { Link } from "gatsby";
const Links = () => {
  return (
    <div className={linkText}>
      <div className={linkItem}>
        <Link className={button} to="/nowhere">
          Continue to next step
        </Link>
      </div>
      <div className={linkItem}>
        <Link className={skip} to="/nowhere">
          Skip this step
        </Link>
      </div>
    </div>
  );
};

export default Links;
