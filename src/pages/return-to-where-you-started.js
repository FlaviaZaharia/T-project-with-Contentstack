import * as React from "react";
import Layout from "./layout";
import Titles from "./titles";
import LongReads from './longreads'
import { graphql } from "gatsby";
import { step4, arrowVector } from "./layout.module.css";
import vector from "../images/Vector.svg";
import { Helmet } from "react-helmet";
import FullArrowWithText from "./full-arrow-with-text";
import TextArrow from "./textarrow";
const ReturnToWhereYouStarted = ({ data }) => {
  const url = data&&data.allContentstackTPages.nodes[0].url;
  const button_text=data&&data.allContentstackTPages.nodes[0].button_text;
  return (
    <Layout>
      <Helmet>
        <title>Step4</title>
      </Helmet>
      <div className={step4}>
        <Titles data={data} />
        <TextArrow url={url}> Return to where you started</TextArrow>
        <LongReads data={data} />
        <div className={arrowVector}>
          <img src={vector} alt="" />
        </div>
        <FullArrowWithText url={url}>
          {button_text}
        </FullArrowWithText>
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
