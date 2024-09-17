// import React from "react";
// import DesignImage from "../assets/ServicePageImages/Design.webp";

// const Design = () => {
//   return (
//     <div className="px-4 py-8 bg-gray-50">
//       <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full">
//         {/* Image Section */}
//         <div className="w-full md:w-5/12 lg:w-1/2 flex-shrink-0 mb-8 md:mb-0">
//           <img
//             src={DesignImage}
//             alt="Design Illustration"
//             className="w-full h-auto object-cover max-w-md lg:max-w-lg mx-auto" // Ensures proper size and alignment
//           />
//         </div>

//         {/* Content Section */}
//         <div className="w-full text-left md:w-6/12 lg:w-1/2 md:pl-8 px-4">
//           <h1 className="text-4xl font-bold mb-4">
//             <span className="text-blue-600">Design</span>
//             <span> Thinking</span>
//           </h1>
//           <p className="text-black font-semi-bold mt-8 mb-4">
//             At SoftMax Solution, we believe in the transformative power of
//             design thinking – a human-centered approach that uncovers your
//             users' needs, sparks innovation, and refines ideas to craft
//             extraordinary software experiences.
//           </p>
//           <p className="text-black font-semi-bold">
//             Transform your ideas with our Design Thinking Services. We delve
//             into user needs, turn insights into actionable strategies, and
//             design user-centric UX/UI. Are you set to create software that wows
//             your users?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Design;

import React from "react";
import DesignImage from "../assets/ServicePageImages/Design.webp";

const Design = () => {
  return (
    <div className="px-4 py-8 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src={DesignImage}
            alt="Design Illustration"
            className="w-full h-auto object-cover max-w-md lg:max-w-2xl hover:scale-105 transition-transform duration-300" // Consistent max width on mid and large screens
          />
        </div>

        {/* Content Section */}
        <div className="w-full text-left md:w-1/2 md:pl-8 py-12 pr-32">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-blue-600">Design</span>
            <span> Thinking</span>
          </h1>
          <p className="text-black font-semi-bold mt-8 mb-4">
            At SoftMax Solution, we believe in the transformative power of
            design thinking – a human-centered approach that uncovers your
            users' needs, sparks innovation, and refines ideas to craft
            extraordinary software experiences.
          </p>
          <p className="text-black font-semi-bold">
            Transform your ideas with our Design Thinking Services. We delve
            into user needs, turn insights into actionable strategies, and
            design user-centric UX/UI. Are you set to create software that wows
            your users?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;
