import * as React from "react";
import {
  article,
  articleImage,
  articleChild,
  articleContent,
  titleSection,
  linkToArticle,
  normal,
  hovered,
} from "./layout.module.css";
import { Link } from "gatsby";
import { useState } from "react";
const ArticleLongReads = ({ title, text, img_url }) => {
  const [hover, setHover] = useState(false);
  return (
    <article className={article}>
      <div className={articleChild}>
        <div className={articleImage}>
          <img src={img_url} alt="article" />
        </div>
        <div className={articleContent}>
          <Link
            to="/"
            className={linkToArticle}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <div>
              <div className={titleSection}>
                <p id={hover ? hovered : normal}>{title}</p>
              </div>
              <p>{text}</p>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleLongReads;
