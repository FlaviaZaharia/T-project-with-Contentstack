import * as React from "react";
import Layout from "./layout";
import Titles from "./titles";
import LongReads from './longreads'
import { graphql, Link } from "gatsby";
import { step4,returnTo ,link} from "./layout.module.css";
const ReturnToWhereYouStarted = ({ data }) => {
  const url = data.allContentstackTPages.nodes[0].url;
  return (
    <Layout>
      <div className={step4}>
        <Titles data={data} />
        <div className={link}>
          <Link className={returnTo} to={url}>Return to where you started &#8594;</Link>
        </div>
       <LongReads data={data}/>
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
