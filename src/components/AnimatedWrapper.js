import React from "react";
import Card from "./Card";

const AnimatedWrapper = ({ cards }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto space-y-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          img={card.image}
          info={card.info}
          className="w-full"
        />
      ))}
    </div>
  );
};

export default AnimatedWrapper;
