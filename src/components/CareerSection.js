import React from "react";

const CareersSection = () => {
  const cards = [
    {
      icon: "🔷", // Replace this with your icon image
      title: "Individual approach",
      description: `We want bright individuals who can individually contribute special abilities 
      and attitudes that will enable us to build the "SoftMax Solutions, creating Better Technologies, 
      Better Results".`,
    },
    {
      icon: "🔵", // Replace this with your icon image
      title: "Commitment",
      description: `Our members contribute unwavering commitment, rapid learning, and 
      innovative culture to all aspects of their work, regardless of whether they work 
      in custom enterprise mobile, web development services, SaaS-based turn-key 
      solutions for mobile app development, customer support software, and transport logistics.`,
    },
    {
      icon: "🟦", // Replace this with your icon image
      title: "Step by step work",
      description: `Every employee on our close-knit team is open to different viewpoints, 
      ready to face uncertainty, and always brings radical sincerity and compassion to the table.`,
    },
  ];

  return (
    <div className=" py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore Careers with a Leading Tech Company
      </h2>
      <div className="flex flex-col  md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-blue-50 shadow-md rounded-lg p-8 flex-1 text-center"
          >
            <div className="text-4xl mb-4">{card.icon}</div> {/* Icon */}
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-black text-lg">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersSection;
