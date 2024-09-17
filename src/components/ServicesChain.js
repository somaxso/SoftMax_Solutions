import React from "react";
import Stages from "./Stages";

const ServicesChain = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-8 mt-8">
      <div className="text-center md:text-2xl lg:text-4xl font-bold mb-8">
        How We Transform Your{" "}
        <span className="text-blue-600">Project Idea</span> into Reality?
      </div>
      <Stages />
    </div>
  );
};

export default ServicesChain;
