import * as React from "react";
import Layout from "./layout";
import Titles from "./titles";
import LongReads from "./longreads";
import { graphql, Link } from "gatsby";
import {
  step4,
  returnTo,
  link,
  arrowVector,
  step4Link,
} from "./layout.module.css";
import vector from "../images/Vector.svg";
import group from "../images/Group.svg";
import arrow from "../images/Group 647.svg";
import smallarrow from "../images/Group 614.svg";
import blue from '../images/blue.svg'
import { Helmet } from "react-helmet";
const ReturnToWhereYouStarted = ({ data }) => {
  const url = data.allContentstackTPages.nodes[0].url;
  return (
    <Layout>
      <Helmet>
        <title>Step4</title>
      </Helmet>
      <div className={step4}>
      <div>
        <img src={blue} alt="blue"/>
      </div>
        <Titles data={data} />
        <div className={link}>
          <Link className={returnTo} to={url}>
            Return to where you started
          </Link>
          <img src={smallarrow} alt="smallarrow" />
        </div>
        <LongReads data={data} />
        <div className={arrowVector}>
          <img src={vector} alt="pic" />
        </div>
        <div className={step4Link}>
          <img src={group} alt="arrow" />
          <Link className={returnTo} to={url}>
            Second to spare? Share your thoughts
          </Link>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query {
    allContentstackTPages(
      filter: { title: { eq: "Return to where you started" } }
    ) {
      nodes {
        button_text
        heading
        subheading
        step_text
        url
        longreads {
          image {
            url
          }
          id
          title
          text
        }
      }
    }
  }
`;

export default ReturnToWhereYouStarted;
