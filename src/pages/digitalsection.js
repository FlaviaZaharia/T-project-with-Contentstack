import * as React from "react";
import {
  frame,
  articleSection,
  mainImage,
  content,
  dataPrivacy,
  description,
} from "./layout.module.css";
const DigitalSection = ({ digitalData, children }) => {
  return (
    <section className={frame}>
      <div className={articleSection}>
        <img
          className={mainImage}
          src={digitalData.image.url}
          alt="main_photo"
        />
        <div className={content}>
          <p className={description}>{digitalData.description}</p>
          {children}
          <p className={dataPrivacy}>{digitalData.data_privacy}</p>
        </div>
      </div>
    </section>
  );
};

export default DigitalSection;
