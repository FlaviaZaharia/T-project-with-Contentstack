import * as React from "react";
import { step1 } from "./layout.module.css";
import Titles from "./titles";
import Links from "./links";
import ArticleSection from './article-section'
const Step1 = ({ data }) => {
  return (
    <div className={step1}>
      <Titles data={data} />
      <ArticleSection data={data}/>
      <Links data={data} />
    </div>
  );
};

export default Step1;
