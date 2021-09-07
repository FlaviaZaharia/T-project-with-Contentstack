import * as React from "react";
import Step1 from "./step1";
import Layout from "./layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
const IndexPage = ({ data }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta description="T project" />
        <title>Newsletter sign-up</title>
        </Helmet>
      <Layout>
        <Step1 data={data} />
      </Layout>
    </div>
  );
};

export default IndexPage;
export const query = graphql`
  query {
    allContentstackTPages(filter: {title: {eq: "Newsletter sign-up"}}) {
      nodes {
        articlesection {
          article_image {
            url
          }
          id
          category
          text
          title
        }
        button_text
        heading
        subheading
        step_text
        url
      }
    }
  }
`;
