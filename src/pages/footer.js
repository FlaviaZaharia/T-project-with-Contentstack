import * as React from "react";
import { footer } from "./layout.module.css";
const Footer = () => {
  return (
    <div className={footer}>
      <p>
        For help email our subscriptions team <span style={{color:"#1798E8"}}>digitalservices@telegraph.co.uk</span> or
        read our <span style={{color:"#1798E8"}}>full terms and conditions</span>
      </p>
    </div>
  );
};

export default Footer;
