import * as React from "react";
import {
  article,
  articleImage,
  articleChild,
  articleContent,
  titleSection,
} from "./layout.module.css";
const ArticleLongReads = ({ title, text, img_url }) => {
  return (
    <div className={article}>
      <div className={articleChild}>
        <div className={articleImage}>
          <img src={img_url} alt="article" />
        </div>
        <div className={articleContent}>
          <div className={titleSection}>
            <div>
              <p>{title}</p>
            </div>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleLongReads;
