import * as React from "react";
import {
  article,
  articleImage,
  articleChild,
  articleContent,
  titleSection,
  linkToArticle
} from "./layout.module.css";
import { Link } from "gatsby";
const ArticleLongReads = ({ title, text, img_url }) => {
  return (
    <div className={article}>
      <div className={articleChild}>
        <div className={articleImage}>
          <img src={img_url} alt="article" />
        </div>
        <div className={articleContent}>
          <Link to="/" className={linkToArticle}>
            <div className={titleSection}>
              <div>
                <p>{title}</p>
              </div>
            </div>

            <p>{text}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleLongReads;
