import React from "react";
import ContactForm from "./ContactForm";

const ContactDetails = () => {
  return (
    <div>
      {/* <ContactForm /> */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 p-4">
        {/* Email Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center mb-2">
            <span className="text-xl font-semibold">Email Us:</span>
          </div>
          <p className="text-gray-600 text-center mb-2">
            Email us for general queries, including marketing and partnership
            opportunities.
          </p>
          <a
            href="mailto:demo@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            demo@gmail.com
          </a>
        </div>

        {/* Call Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center mb-2">
            <span className="text-xl font-semibold">Call Us:</span>
          </div>
          <p className="text-gray-600 text-center mb-2">
            Call us to speak to a member of our team. We are always happy to
            help.
          </p>
          <a
            href="tel:+911234567890"
            className="text-indigo-600 hover:underline"
          >
            +91-1234567890
          </a>
        </div>

        {/* Address Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center mb-2">
            <span className="text-xl font-semibold">Reach Out:</span>
          </div>
          <p className="text-gray-600 text-center mb-2">
            SCO-06, Sector 14, Hisar, India-125001
          </p>
          <a
            href="mailto:demo@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            demo@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
