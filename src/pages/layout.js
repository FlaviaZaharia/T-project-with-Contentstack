import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import { layout } from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <main className={layout}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
