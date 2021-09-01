import * as React from "react";
import {
  articleSection,
  grid,
  frame,
} from "./layout.module.css";
import Article from "./article";
const ArticleSection = ({ data }) => {
  return (
    <div className={frame}>
      <div className={articleSection}>
        <div className={grid}>
        {data.allContentstackTPages.nodes[0].articlesection.map((node)=>{
          return(<Article
            key={node.id}
            category={node.category}
            title={node.title}
            text={node.text}
            img_url={node.article_image.url}
          />);
        })}
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;