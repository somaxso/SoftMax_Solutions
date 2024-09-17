import React from "react";
// import Logo from "../assets/Logo.png";
import ServicesDetail from "./ServicesDetail";
import Design from "./Design";
import WebDev from "./WebDev";
import AIDev from "./AIDev";
import MobileDev from "./MobileDev";
import Testing from "./Testing";
import DevOps from "./DevOps";
import ServicesChain from "./ServicesChain";
import BottomSection from "./BottomSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div>
      {/* <h1>Services</h1>
      <div className="flex justify-center">
        <img src={Logo} alt="" />
      </div> */}

      <ServicesDetail />
      <section id="ui-ux-design">
        {" "}
        <Design />
      </section>

      <section id="web-development">
        <WebDev />
      </section>

      <AIDev />
      <section id="app-development">
        <MobileDev />
      </section>
      <section id="testing">
        <Testing />
      </section>

      <DevOps />
      <ServicesChain />
      <BottomSection />
    </div>
  );
};

export default Services;
