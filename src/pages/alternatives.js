import * as React from "react";
import { alternatives,alternativesSection,notOnWhatsApp } from "./layout.module.css";
import AdditionalButtons from "./additional-buttons";
import {useState} from 'react'
const Alternatives = () => {
    const [show,setShow]=useState(false);
  return (
    <section className={alternativesSection}>
      <div ><button id={notOnWhatsApp} onClick={()=>setShow(!show)}>Not on WhatsApp?</button></div>
      {show?
      <div className={alternatives}>
        <AdditionalButtons text="Spotify" />
        <AdditionalButtons text="Apple Podcasts" />
        <AdditionalButtons text="Amazon Alexa" />
        <AdditionalButtons text="Google Home" />
      </div>:<></>}
    </section>
  );
};
export default Alternatives;
