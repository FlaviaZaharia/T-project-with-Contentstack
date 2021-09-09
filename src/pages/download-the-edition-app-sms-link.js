import * as React from "react";
import Layout from "./layout";
import Titles from "./titles";
import InputField from './input-field'
import DigitalSection from "./digitalsection";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { step3, linkItem, skip, linkText,arrowVector } from "./layout.module.css";
import vector from '../images/Vector.svg'
const DownloadTheEdition = ({ data }) => {
  const url = data&&data.allContentstackTPages.nodes[0].url&&data.allContentstackTPages.nodes[0].url;
  const digitalData=data&&data.allContentstackDigitalResourcesSection.nodes[0];
  return (
    <Layout>
      <Helmet>
        <title>Step2</title>
      </Helmet>
      <div className={step3}>
        <Titles data={data} />
        <DigitalSection digitalData={digitalData}>
          <InputField/>
        </DigitalSection>
        <div className={arrowVector}>
          <img src={vector} alt="" />
        </div>
        <div className={linkText}>
          <div className={linkItem}>
            <Link className={skip} to={url}>
              Skip this step
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadTheEdition;
export const query = graphql`
  query {
    allContentstackTPages(
      filter: { title: { eq: "Download the Edition App SMS link" } }
    ) {
      nodes {
        button_text
        heading
        subheading
        step_text
        url
      }
    }
    allContentstackDigitalResourcesSection(
        filter: {title: {eq: "Download the Edition App SMS link"}}
      ) {
        nodes {
          call_to_action
          data_privacy
          description
          image {
            url
          }
        }
      }
  }
`;
