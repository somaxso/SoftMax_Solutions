import React from "react";
import officeImage from "../assets/office.jpg";
import CareerPageDetails from "./CareerPageDetails";
import CoreValues from "./CoreValues";
import CareersSection from "./CareerSection";
import CareersTimeline from "./CareerTimeline";

const Careers = () => {
  return (
    <div>
      <CareerPageDetails />
      <CoreValues />
      <CareersSection />
      <CareersTimeline />
    </div>
  );
};

export default Careers;
