import * as React from "react";
import {
  frame,
  articleSection,
  mainImage,
  content,
  dataPrivacy,
  description,
} from "./layout.module.css";
const DigitalSection = ({ digitalData,comp, children }) => {
  return (
    <section className={frame}>
      <div className={articleSection}>
        <img
          className={mainImage}
          src={digitalData&&digitalData.image.url}
          alt="main_photo"
        />
        <div className={content}>
          <p className={description}>{digitalData&&digitalData.description}</p>
          {children}
          <p className={dataPrivacy}>{digitalData&&digitalData.data_privacy}</p>
        </div>
        {comp}
      </div>
    </section>
  );
};

export default DigitalSection;
