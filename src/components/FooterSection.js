import React from "react";
import FooterContent from "./FooterContent";
import Footer from "./Footer";

const FooterSection = () => {
  return (
    <div className="bg-gray-900 text-white  bottom-0 w-full">
      <div>
        <FooterContent />
        <Footer />
      </div>
    </div>
  );
};

export default FooterSection;
