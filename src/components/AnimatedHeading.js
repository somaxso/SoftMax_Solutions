// import React, { useState, useEffect } from "react";

// const AnimatedHeading = () => {
//   const words = [
//     { text: "Innovation", color: "text-red-500" },
//     { text: "Technology", color: "text-green-500" },
//     { text: "Solutions", color: "text-blue-500" },
//     { text: "Success", color: "text-yellow-500" },
//   ];

//   const [currentWord, setCurrentWord] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentWord((prevWord) => (prevWord + 1) % words.length);
//     }, 4000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-left flex flex-col items-start px-4">
//       <div className="flex items-center">
//         <div>
//           <h1 className="whitespace-nowrap">Digital</h1>
//         </div>
//         <div className="ml-2">
//           <span
//             key={currentWord}
//             className={`transition-opacity duration-1000 ${words[currentWord].color} animate-fadeInDown`}
//             style={{
//               minWidth: "130px",
//               textAlign: "center",
//               whiteSpace: "nowrap",
//               display: "inline-block",
//             }}
//           >
//             {words[currentWord].text}
//           </span>
//         </div>
//       </div>
//       <span className="whitespace-nowrap mt-2">Advisory Services</span>
//     </div>
//   );
// };

// export default AnimatedHeading;

import React, { useState, useEffect } from "react";

const AnimatedHeading = () => {
  const words = [
    { text: "Innovation", color: "text-red-500" },
    { text: "Technology", color: "text-green-500" },
    { text: "Solutions", color: "text-blue-500" },
    { text: "Success", color: "text-yellow-500" },
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-left flex flex-col items-start px-4">
      <div className="relative flex items-center">
        {/* Fixed Container for Constant Text */}
        <div className="flex-shrink-0 whitespace-nowrap">
          <h1 className="relative z-10">Digital</h1>
        </div>
        {/* Absolute Positioned Container for Changing Text */}
        <div className="relative flex-grow pl-2">
          <span
            key={currentWord}
            className={`inline-block ${words[currentWord].color} animate-fadeInDown`}
            style={{
              position: "absolute",
              left: "0",
              top: "-2rem", // Adjust this value to control the starting position
              transform: "translateY(0%)",
              whiteSpace: "nowrap",
              // Adjust padding if needed to correct alignment
              padding: "0.2rem 0.6rem", // Example: Add 0.2rem padding to adjust spacing
            }}
          >
            {words[currentWord].text}
          </span>
        </div>
      </div>
      <span className="whitespace-nowrap mt-2">Advisory Services</span>
    </div>
  );
};

export default AnimatedHeading;
