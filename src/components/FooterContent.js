import React from "react";

const FooterContent = () => {
  return (
    <div className="bg-gray-900 mx-12 text-white py-6">
      <div className="container  grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <p className="font-bold py-2 text-lg">Services</p>
          <div className="flex flex-col text-gray-400 space-y-2">
            <a href="/services#web-development" className="hover:text-white">
              Web Development
            </a>
            <a href="/services#app-development" className="hover:text-white">
              App Development
            </a>
            <a href="/services#ui-ux-design" className="hover:text-white">
              UI/UX Design
            </a>
            <a href="/services#testing" className="hover:text-white">
              Testing
            </a>
            <a href="#" className="hover:text-white">
              Quality Assurance
            </a>
            <a href="#" className="hover:text-white">
              Custom Solution
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold py-2 text-lg">Company</p>
          <div className="flex flex-col text-gray-400 space-y-2">
            <a href="#" className="hover:text-white">
              Careers
            </a>
            <a href="/contact" className="hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold py-2 text-lg">Information</p>
          <div className="flex flex-col text-gray-400 space-y-2">
            <a href="/about" className="hover:text-white">
              About Us
            </a>
            <a href="#" className="hover:text-white">
              FAQ
            </a>
            <a href="/#technologies" className="hover:text-white">
              Technologies
            </a>
          </div>
        </div>
        <div className="bg-gray-900 h-44 p-4 rounded-lg border border-gray-800">
          <form className="" action="#">
            <p className="font-bold text-lg mb-4">
              Subscribe to our Newsletter
            </p>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 text-gray-900 rounded-md"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className=" bg-blue-600 font-bold p-2 rounded-md text-white hover:bg-blue-400 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
