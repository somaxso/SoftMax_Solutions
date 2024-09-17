import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import data from "../utils/constData";

const Features = () => {
  const cardsData = data;
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AnimatedWrapper cards={cardsData} />
    </div>
  );
};

export default Features;
