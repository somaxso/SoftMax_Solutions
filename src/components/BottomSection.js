import React from "react";
import Img from "../assets/Footer.jpg";
import { useNavigate } from "react-router-dom";

const BottomSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className=" py-10 my-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <img
              src={Img}
              alt="Footer"
              className="w-full lg:h-auto md:max-w-md md:h-[500px] lg:max-w-xl rounded-lg shadow-lg "
            />
          </div>

          {/* Text and Button Section */}
          <div className="lg:text-left md:text-left sm:text-left">
            <div className="text-3xl mb-4 font-bold">
              <span>We Speak User, You Achieve </span>
              <span className="text-blue-600">Success</span>!
            </div>
            <div className="mt-4 font-medium leading-relaxed text-gray-700">
              Our expert team stays at the forefront of user experience trends,
              delivering apps that are not only cutting-edge but also intuitive,
              fast, and cost-efficient.
            </div>
            <div className="mt-4 font-medium leading-relaxed text-gray-700">
              We provide end-to-end solutions, guiding you from strategic
              planning to developing advanced native apps and powerful backend
              systems. Our dedication to top-notch code quality and continuous
              testing guarantees a product that performs seamlessly and is built
              for long-term, hassle-free maintenance.
            </div>
            <div className="mt-4 font-medium leading-relaxed text-gray-700">
              Don't settle for ordinary—create an exceptional app. Get in touch
              with us today!
            </div>
            <div className="mt-6">
              <button
                onClick={handleClick}
                className="group flex items-center justify-center md:justify-start text-white bg-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Contact Us
                <span className="ml-2 text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  &#8594;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
