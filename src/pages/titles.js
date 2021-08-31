import * as React from "react";
import { titles, heading, step, subheading } from "./layout.module.css";

const Titles = ({ data }) => {
  const step_text = data.allContentstackTPages.nodes[0].step_text;
  const heading_text = data.allContentstackTPages.nodes[0].heading;
  const subheading_text = data.allContentstackTPages.nodes[0].subheading;
  return (
    <div className={titles}>
      <div className={step}>
        <span>{step_text}</span>
      </div>
      <p className={heading}>{heading_text}</p>
      <p className={subheading}>{subheading_text}</p>
    </div>
  );
};

export default Titles;
