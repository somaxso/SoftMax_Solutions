import React from "react";
import planPhase from "../assets/StagesImage/strategy-plan-phase.webp";
import designPhase from "../assets/StagesImage/design-phase.webp";
import developPhase from "../assets/StagesImage/development-phase.webp";
import testPhase from "../assets/StagesImage/testing-phase.webp";
import deployPhase from "../assets/StagesImage/deployment-phase.webp";
import maintainPhase from "../assets/StagesImage/maintenance-phase.webp";

const Stages = () => {
  const stages = [
    {
      title: "Plan",
      description: ["Requirement Gathering", "Project Scoping"],
      icon: planPhase,
    },
    {
      title: "Design",
      description: ["UI/UX design", "System Architecture"],
      icon: designPhase,
    },
    {
      title: "Develop",
      description: ["Agile Development", "Code Review"],
      icon: developPhase,
    },
    {
      title: "Test",
      description: ["Rigorous Testing", "Quality Assurance (QA)"],
      icon: testPhase,
    },
    {
      title: "Deploy",
      description: ["Release", "Server Configuration"],
      icon: deployPhase,
    },
    {
      title: "Maintain",
      description: ["Support", "Performance Monitoring"],
      icon: maintainPhase,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={stage.icon}
              alt={`${stage.title} Icon`}
              className="w-24 h-24 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{stage.title}</h2>
            <ul className="text-center space-y-1">
              {stage.description.map((item, idx) => (
                <li key={idx} className="text-gray-600">
                  + {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stages;
