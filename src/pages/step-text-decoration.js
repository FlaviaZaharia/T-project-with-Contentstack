import * as React from "react";
import { step, lines, middleLine } from "./layout.module.css";
const StepTextDecoration = ({ children }) => {
  return (
    <div className={step}>
      <div className={lines}>
        <div></div>
        <div className={middleLine}></div>
        <div></div>
      </div>
      <span>{children}</span>
      <div className={lines}>
        <div></div>
        <div className={middleLine}></div>
        <div></div>
      </div>
    </div>
  );
};

export default StepTextDecoration;
