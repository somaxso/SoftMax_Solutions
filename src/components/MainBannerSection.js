import React from "react";
import AnimatedHeading from "./AnimatedHeading";

const MainBannerSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Banner or Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20230419/original/pngtree-website-science-and-technology-light-effect-ring-background-picture-image_2448025.jpg')",
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen bg-black bg-opacity-50 text-white text-center p-6 md:p-12">
        <AnimatedHeading />
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Delivering premium technological software solutions for businesses.
          From development to deployment, we handle it all.
        </p>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg transition duration-300">
            Ignite Your Digital Revolution
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBannerSection;
