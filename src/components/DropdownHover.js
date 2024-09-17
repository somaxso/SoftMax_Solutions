import React from "react";
import { Link } from "react-router-dom";

const DropdownHover = ({ setIsNavOpen }) => {
  return (
    <div className="relative inline-block text-left group">
      {/* Dropdown Button (Services Link) */}
      <Link
        to="/services"
        className="block pb-2 uppercase tracking-wide text-blue-700 hover:text-gray-900 transition-colors duration-200 
                   lg:border-none border-b border-gray-300" // Remove underline in desktop menu
        onClick={() => setIsNavOpen(false)}
      >
        Services
      </Link>

      {/* Dropdown Menu */}
      <div
        className="absolute w-44 border rounded-lg shadow-lg bg-white divide-y divide-gray-100 opacity-0 group-hover:opacity-100 
                    group-hover:translate-y-2 transform transition-all duration-200 ease-in-out
                    pointer-events-none group-hover:pointer-events-auto
                    left-[5.5rem] lg:left-8 lg:top-6 top-4 z-20" // Increased z-index to ensure dropdown interaction
        role="menu"
        aria-orientation="vertical"
      >
        <ul className="text-sm text-blue-700" role="none">
          {[
            { label: "Web Development", path: "/services#web-development" },
            { label: "App Development", path: "/services#app-development" },
            { label: "UI/UX Design", path: "/services#ui-ux-design" },
            { label: "Testing", path: "/services#testing" },
            { label: "Quality Assurance", path: "/services/quality-assurance" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="block px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
                role="menuitem"
                onClick={() => setIsNavOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownHover;
