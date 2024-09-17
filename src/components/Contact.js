// import React from "react";
// import Banner from "../assets/Contact.jpg";
// import ContactDetails from "./ContactDetails";

// const Contact = () => {
//   return (
//     <div>
//       <div className="relative">
//         <img
//           className="w-full object-cover"
//           src={Banner}
//           alt="Contact Banner"
//         />
//         <div className="absolute inset-0 flex flex-col items-center  bg-black bg-opacity-50">
//           <h1 className="text-5xl font-bold text-white mt-16 mb-4">
//             Contact Us
//           </h1>
//           <p className="text-lg text-gray-300  text-center">
//             We use an agile approach to test assumptions and connect with the
//             needs of your audience early and often.
//           </p>
//         </div>
//       </div>

//       <ContactDetails />
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import Banner from "../assets/Contact.jpg";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="relative">
        <img
          className="w-full h-[500px] object-cover"
          src={Banner}
          alt="Contact Banner"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white -mt-[12rem] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-2xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
      </div>

      {/* Contact Form Overlapping Section */}
      <div className="relative -mt-[12rem] z-10 flex justify-center">
        <ContactForm />
      </div>

      {/* Contact Details Section */}
      <div className="mt-16">
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;
