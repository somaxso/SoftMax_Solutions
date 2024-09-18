import React from "react";
import imageSrc from "../assets/support.jpg";
// Replace the image source with the appropriate path of the image you uploaded

const CareersTimeline = () => {
  return (
    <div className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
          <img
            src={imageSrc}
            alt="Join Our Journey"
            className="rounded-full object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl lg:text-4xl font-bold">
              Join Our Journey
            </h2>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-8 lg:mt-0 lg:ml-12">
        <div className="space-y-6 text-gray-800">
          <div>
            <h3 className="text-2xl font-semibold">
              Passionate and Innovative Professionals
            </h3>
            <p className="mt-2">
              Ready to join our team of passionate and innovative professionals
              at the forefront of technology? We're excited to hear from you!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Key to our Success</h3>
            <p className="mt-2">
              At our company, we believe that diversity and inclusion are key to
              our success, and we welcome candidates from all backgrounds and
              experiences to apply. If you have a strong passion for technology
              and a desire to make a difference, we encourage you to apply for
              one of our open positions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">
              Talented and Supportive Team
            </h3>
            <p className="mt-2">
              As a member of our team, you'll have the opportunity to work on
              exciting and challenging projects, using the latest technologies
              and tools. You'll be able to collaborate with a talented and
              supportive team of professionals and have access to ongoing
              training and development opportunities to help you grow and
              advance in your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersTimeline;
