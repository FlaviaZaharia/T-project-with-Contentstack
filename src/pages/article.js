import * as React from "react";
import {
  article,
  articleImage,
  articleChild,
  articleContent,
  titleSection,
  add,
} from "./layout.module.css";
const Article = ({category,title,text}) => {
  return (
    <div className={article}>
      <div className={articleChild}>
        <div className={articleImage}>
          <img src="https://images.theconversation.com/files/168121/original/file-20170505-1693-ymh4bc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" />
        </div>
        <div className={articleContent}>
          <div className={titleSection}>
            <div>
              <p>{category}</p>
              <p>{title}</p>
            </div>
            <div>
              <button className={add}>+</button>
            </div>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
