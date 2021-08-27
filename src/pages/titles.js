import * as React from "react";
import { titles, heading, step, subheading,} from "./layout.module.css";

const Titles = () => {
  return (
    <div className={titles}>
      <div className={step}>
         <span> Step 1 of 4</span>
      </div>
      <p className={heading}>Sign up for a closer look</p>
      <p className={subheading}>
        Enjoy more expert insight and analysis from your favourite journalists
      </p>
    </div>
  );
};

export default Titles;
