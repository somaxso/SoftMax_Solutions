// import React from "react";
// import DevOpsImage from "../assets/ServicePageImages/DevOps.webp";

// const DevOps = () => {
//   return (
//     <div className="px-4 py-8 bg-gray-50">
//       <div className="flex flex-col md:flex-row items-center md:items-start w-full">
//         {/* Content Section */}
//         <div className="w-full text-left md:w-1/2 md:pl-8 py-12 pr-32">
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

//         {/* Image Section with beautification */}
//         <div className="w-full md:w-1/2 flex-shrink-0 bg-white">
//           <img
//             src={DevOpsImage}
//             alt="Design Illustration"
//             className="w-full h-auto object-cover max-w-md lg:max-w-2xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevOps;

import React from "react";
import DevOpsImage from "../assets/ServicePageImages/DevOps.webp";

const DevOps = () => {
  return (
    <div className="px-4 py-8 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full">
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

        {/* Image Section with fully rounded corners */}
        <div className="w-full md:w-1/2 flex-shrink-0 bg-white">
          <img
            src={DevOpsImage}
            alt="Design Illustration"
            className="w-full h-auto object-cover max-w-md lg:max-w-2xl rounded-3xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default DevOps;
