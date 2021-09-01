import * as React from "react";
import CheckIcon from "@material-ui/icons/Check";
import {
  article,
  articleImage,
  articleChild,
  articleContent,
  titleSection,
  add,
  unclicked,
  clicked,
} from "./layout.module.css";
import { useState } from "react";
const Article = ({ category, title, text,img_url }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className={article}>
      <div className={articleChild}>
        <div className={articleImage}>
          <img src={img_url} alt="article"/>
        </div>
        <div className={articleContent}>
          <div className={titleSection}>
            <div>
              <p>{category}</p>
              <p>{title}</p>
            </div>

            <button
              className={add}
              id={click ? clicked : unclicked}
              onClick={handleClick}
            >
              {click ? <CheckIcon /> : "+"}
            </button>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
