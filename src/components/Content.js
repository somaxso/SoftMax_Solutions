import React from "react";
import PlaningLogo from "../assets/planning.webp";
import DesignLogo from "../assets/designing.webp";
import CodingLogo from "../assets/coding.webp";
import TestingLogo from "../assets/testing.webp";
import DefineLogo from "../assets/defining.webp";
import ImplimantLogo from "../assets/implementation.webp";
import MaintainLogo from "../assets/maintenance.webp";

const Content = () => {
  return (
    <div className="px-4 py-8 bg-gray-100">
      <div className="text-3xl md:text-5xl font-bold my-8 text-center text-gray-800">
        The SoftMax Framework: Crafting Solutions with Impact
      </div>

      {/* First row of 4 cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-8 text-center">
        {/* Planning */}
        <div className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
          <img
            className="w-24 h-24 mx-auto mb-4 hover:animate-rotateIn"
            src={PlaningLogo}
            alt="Planning"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Planning</h3>
          <p className="text-gray-600">
            We collaborate with you to deeply understand your vision and craft a
            tailored strategy that delivers the most exceptional app, perfectly
            aligned with your goals.
          </p>
        </div>

        {/* Designing */}
        <div className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
          <img
            className="w-24 h-24 mx-auto mb-4 hover:animate-rotateIn"
            src={DesignLogo}
            alt="Designing"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Designing
          </h3>
          <p className="text-gray-600">
            The design phase brings your vision to life, blending meticulous
            attention to detail with your brand identity and business goals for
            a seamless experience.
          </p>
        </div>

        {/* Specifying */}
        <div className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
          <img
            className="w-24 h-24 mx-auto mb-4 hover:animate-rotateIn"
            src={DefineLogo}
            alt="Specifying"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Specifying
          </h3>
          <p className="text-gray-600">
            During this phase, we perfect the core features and functionalities,
            ensuring a robust foundation for a seamless and successful
            development process.
          </p>
        </div>

        {/* Coding */}
        <div className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
          <img
            className="w-24 h-24 mx-auto mb-4 hover:animate-rotateIn"
            src={CodingLogo}
            alt="Coding"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Coding</h3>
          <p className="text-gray-600">
            Our development team crafts high-quality, scalable code using
            cutting-edge techniques to bring your vision to life efficiently.
          </p>
        </div>

        {/* Second row of 3 cards with flex styling */}
        {/* <div className="flex flex-wrap justify-center gap-8 mt-8 text-center"> */}
        {/* Testing */}
        <div className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
          <img
            className="w-24 h-24 mx-auto mb-4 hover:animate-rotateIn"
            src={TestingLogo}
            alt="Testing"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Testing</h3>
          <p className="text-gray-600">
            We ensure your app meets the highest quality standards through
            rigorous testing, guaranteeing an error-free user experience.
          </p>
        </div>

        {/* Deploying */}
        <div className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
          <img
            className="w-24 h-24 mx-auto mb-4 hover:animate-rotateIn"
            src={ImplimantLogo}
            alt="Deploying"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Deploying
          </h3>
          <p className="text-gray-600">
            We conduct a comprehensive review and deploy your app, ensuring
            flawless functionality with continuous integration methodologies.
          </p>
        </div>

        {/* Maintenance */}
        <div className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
          <img
            className="w-24 h-24 mx-auto mb-4 hover:animate-rotateIn"
            src={MaintainLogo}
            alt="Maintenance"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Maintenance
          </h3>
          <p className="text-gray-600">
            Our team continuously monitors and maintains your app’s performance,
            keeping it optimized and up-to-date with the latest technologies.
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Content;
