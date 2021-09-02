import * as React from "react";
import { step1 ,arrowVector} from "./layout.module.css";
import Titles from "./titles";
import Links from "./links";
import ArticleSection from "./article-section";
import vector from '../images/Vector.svg';
const Step1 = ({ data }) => {
  return (
    <div className={step1}>
      <Titles data={data} />
      <ArticleSection data={data} />
      <div className={arrowVector}>
        <img src={vector} alt="pic" />
      </div>
      <Links data={data} />
    </div>
  );
};

export default Step1;
