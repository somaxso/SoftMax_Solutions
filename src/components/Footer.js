import React from "react";
import Logo from "../assets/Logo.png";
import Twitter from "../assets/icons8-twitter.svg";
import Fb from "../assets/icons8-facebook.svg";
import Linkedin from "../assets/icons8-linkedin.svg";
import Insta from "../assets/icons8-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mx-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-700 mb-4"></div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img className="w-16" src={Logo} alt="SoftMax Solution Logo" />
          </div>

          {/* Copyright */}
          <p className="text-center text-sm md:text-base mb-4 md:mb-0">
            © 2024 SoftMax Solution Pvt. Ltd. All Rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img
                className="w-6 bg-white rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"
                src={Twitter}
                alt="Twitter"
              />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img
                className="w-6 bg-white rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"
                src={Linkedin}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img
                className="w-6 bg-white rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"
                src={Fb}
                alt="Facebook"
              />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-grays-400"
            >
              <img
                className="w-6 bg-white rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"
                src={Insta}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
