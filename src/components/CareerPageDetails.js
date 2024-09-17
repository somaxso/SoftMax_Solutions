import React from "react";
import officeImage from "../assets/office.jpg";

const CareerPageDetails = () => {
  return (
    <div className="p-6 lg:p-12 bg-gray-50">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl text-blue-600 font-bold">
          Join Our Innovative Team at SoftMax Solutions
        </h1>
        <p className="text-xl md:text-2xl font-semibold mt-4">
          Be part of an amazing team—here's why you should join us!
        </p>
      </div>

      {/* Image and Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start lg:pl-8 lg:ml-8">
          <img
            src={officeImage}
            alt="Careers Office"
            className="w-full md:w-auto lg:w-full h-auto max-w-md lg:max-w-lg rounded-lg shadow-xl"
          />
        </div>

        {/* Text and Button Section */}
        <div className="text-left lg:pr-10 lg:mr-10 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Grow <span className="text-blue-600">Your Career</span> by Joining
            SoftMax Solutions
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At SoftMax, we're passionate about leveraging technology to enhance
            everyday lives. We're seeking motivated individuals dedicated to
            making life easier and more convenient for everyone.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Looking to join a dynamic team where inspiration flows from both
            your projects and co-workers? SoftMax Solutions could be the perfect
            place for you! We value and reward creativity and collaboration.
            Explore our career opportunities to find your fit in our vibrant
            company—we’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerPageDetails;
