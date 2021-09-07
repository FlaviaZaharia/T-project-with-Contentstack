import * as React from "react";
import Layout from "./layout";
import Titles from "./titles";
import Links from "./links";
import DigitalSection from "./digitalsection";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { step3,arrowVector} from "./layout.module.css";
import vector from '../images/Vector.svg'
import CallToAction from "./call-to-action";
const JoinWhatsAppGroup = ({ data }) => {
  const digitalData = data.allContentstackDigitalResourcesSection.nodes[0];
  return (
    <Layout>
      <Helmet>
        <title>Step3</title>
      </Helmet>
      <div className={step3} >
        <Titles data={data} />
        <DigitalSection digitalData={digitalData}>
          <CallToAction call={digitalData.call_to_action}/>
        </DigitalSection>
        <div className={arrowVector}>
          <img src={vector} alt="" />
        </div>
        <Links data={data} />
      </div>
    </Layout>
  );
};

export default JoinWhatsAppGroup;
export const query = graphql`
  query {
    allContentstackTPages(filter: { title: { eq: "Join WhatsApp group" } }) {
      nodes {
        button_text
        heading
        subheading
        step_text
        url
      }
    }
    allContentstackDigitalResourcesSection(
      filter: { title: { eq: "Join WhatsApp group" } }
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
