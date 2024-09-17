import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/Logo.png";
import DropdownHover from "./DropdownHover";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // return (
  //   <header className="sticky top-0 z-50 bg-white shadow-lg">
  //     <div className="flex items-center justify-between p-4">
  //       <img
  //         src={LOGO}
  //         alt="Logo"
  //         className="h-14 w-auto" // Adjust the logo size here
  //       />
  //       <button
  //         onClick={toggleMenu}
  //         className="lg:hidden text-blue-500 focus:outline-none"
  //         aria-label="Toggle menu"
  //         aria-expanded={isOpen}
  //       >
  //         <svg
  //           className="w-6 h-6"
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M4 6h16M4 12h16M4 18h16"
  //           />
  //         </svg>
  //       </button>
  //       <nav
  //         className={`${
  //           isOpen ? "flex" : "hidden"
  //         } lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row transition-all duration-300 ease-in-out`}
  //       >
  //         <Link
  //           to="/"
  //           className="text-blue-500 text-lg hover:text-blue-700 transition duration-300"
  //           onClick={() => setIsOpen(false)}
  //         >
  //           Home
  //         </Link>
  //         <Link
  //           to="/about"
  //           className="text-blue-500 text-lg hover:text-blue-700 transition duration-300"
  //           onClick={() => setIsOpen(false)}
  //         >
  //           About
  //         </Link>
  //         <Link
  //           to="/services"
  //           className="text-blue-500 text-lg hover:text-blue-700 transition duration-300"
  //           onClick={() => setIsOpen(false)}
  //         >
  //           Services
  //         </Link>
  //         <Link
  //           to="/contact"
  //           className="text-blue-500 text-lg hover:text-blue-700 transition duration-300"
  //           onClick={() => setIsOpen(false)}
  //         >
  //           Contact
  //         </Link>
  //       </nav>
  //     </div>
  //   </header>
  // );

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-4 px-4 lg:px-8">
      <a href="/">
        <img className="h-14 w-auto" src={LOGO} alt="logo" />
      </a>
      <nav>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <span className="block h-0.5 w-8 bg-blue-700"></span>
            <span className="block h-0.5 w-8 bg-blue-700"></span>
            <span className="block h-0.5 w-8 bg-blue-700"></span>
          </button>

          <div
            className={`absolute top-0 left-0 w-full h-[16rem] bg-white z-20 flex flex-col items-center justify-center transform transition-transform duration-300 ${
              isNavOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              className="absolute top-8 right-8"
              onClick={() => setIsNavOpen(false)}
              aria-label="Close Menu"
            >
              <svg
                className="h-8 w-8 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="space-y-8 text-center text-xl">
              <li>
                <Link
                  to="/about"
                  className="block border-b border-gray-300 pb-2 uppercase tracking-wide text-blue-700 hover:text-gray-900"
                  onClick={() => setIsNavOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <DropdownHover setIsNavOpen={setIsNavOpen} />
              </li>
              <li>
                <Link
                  to="/#technologies"
                  className="block border-b border-gray-300 pb-2 uppercase tracking-wide text-blue-700 hover:text-gray-900"
                  onClick={() => setIsNavOpen(false)}
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="block border-b border-gray-300 pb-2 uppercase tracking-wide text-blue-700 hover:text-gray-900"
                  onClick={() => setIsNavOpen(false)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block border-b border-gray-300 pb-2 uppercase tracking-wide text-blue-700 hover:text-gray-900"
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li>
            <Link
              to="/about"
              className="text-blue-700 hover:text-gray-900 uppercase tracking-wide"
            >
              About
            </Link>
          </li>
          <li>
            <DropdownHover setIsNavOpen={setIsNavOpen} />
          </li>
          <li>
            <Link
              to="/#technologies"
              className="text-blue-700 hover:text-gray-900 uppercase tracking-wide"
            >
              Technologies
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className="text-blue-700 hover:text-gray-900 uppercase tracking-wide"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-blue-700 hover:text-gray-900 uppercase tracking-wide"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
