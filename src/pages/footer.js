import * as React from "react";
import { footer } from "./layout.module.css";
import { useStaticQuery, graphql } from "gatsby";
const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      allContentstackFooterT {
        nodes {
          email
          terms_conditions
          action1
          action2
        }
      }
    }
  `);
  return (
    <footer className={footer}>
      <p>
        {data.allContentstackFooterT.nodes[0].action1 &&
          data.allContentstackFooterT.nodes[0].action1}
        <span style={{ color: "#1798E8" }}>
          &nbsp;
          {data.allContentstackFooterT.nodes[0].email &&
            data.allContentstackFooterT.nodes[0].email}
          &nbsp;
        </span>
        {data.allContentstackFooterT.nodes[0].action2 &&
          data.allContentstackFooterT.nodes[0].action2}
        <span style={{ color: "#1798E8" }}>
          &nbsp;
          {data.allContentstackFooterT.nodes[0].action2 &&
            data.allContentstackFooterT.nodes[0].terms_conditions}
          &nbsp;
        </span>
      </p>
    </footer>
  );
};

export default Footer;
