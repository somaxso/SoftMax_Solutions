import React from "react";

const ContactForm = () => {
  return (
    <form className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Get in Touch
      </h2>

      {/* Form fields */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      {/* More fields */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="location"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter your location"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-gray-700 font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          placeholder="Enter your message"
          required
        ></textarea>
      </div>

      {/* Submit button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
