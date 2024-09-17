import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import FooterSection from "./FooterSection";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />

      {/* <Footer /> */}
      <FooterSection />
    </div>
  );
};

export default Layout;
