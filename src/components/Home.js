import React from "react";
import MainBannerSection from "./MainBannerSection";
import Features from "./Features";
import Content from "./Content";
import Techs from "./Techs";
import BottomSection from "./BottomSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
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
      <MainBannerSection />
      <Content />
      <Features />
      <section id="technologies">
        <Techs />
      </section>
      <BottomSection />
    </div>
  );
};

export default Home;
