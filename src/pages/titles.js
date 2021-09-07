import * as React from "react";
import { titles, heading, subheading } from "./layout.module.css";
import StepTextDecoration from "./step-text-decoration";
const Titles = ({ data }) => {
  const step_text =
    data &&
    data.allContentstackTPages.nodes[0].step_text &&
    data.allContentstackTPages.nodes[0].step_text;
  const heading_text =
    data &&
    data.allContentstackTPages.nodes[0].heading &&
    data.allContentstackTPages.nodes[0].heading;
  const subheading_text =
    data &&
    data.allContentstackTPages.nodes[0].subheading &&
    data.allContentstackTPages.nodes[0].subheading;
  return (
    <div className={titles}>
      <StepTextDecoration>{step_text}</StepTextDecoration>
      <h1 className={heading}>{heading_text}</h1>
      <h2 className={subheading}>{subheading_text}</h2>
    </div>
  );
};

export default Titles;
