import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import {layout} from './layout.module.css'
const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
