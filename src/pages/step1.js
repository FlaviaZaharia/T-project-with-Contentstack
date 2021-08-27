import * as React from "react";
import { step1} from "./layout.module.css";
import Titles from "./titles";
import Links from './links'

const Step1 = () => {
  return (
    <div className={step1}>
      <Titles />
      <Links/>
    </div>
  );
};

export default Step1;
