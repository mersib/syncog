import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png"
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="transparent-header flex justify-between items-center p-4">
      <div className="pl-8">
        <Link to="/" className="text-2xl font-bold font-syncopate">
          SYNCOG.AI
        </Link>
      </div>
     {location.pathname === '/open-positions' && <div><img src={logo} alt="Logo" className="w-24 hidden md:block" /></div>}
      <div className="hidden md:block text-right font-avenir relative pr-8">
        {location.pathname === "/open-positions" ? (
          <div className="hidden md:block text-right font-avenir relative pr-8">
            <Link to="/" className="group relative inline-block text-2xl">
              <div className="flex items-center">
                Back to Home
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2 opacity-0 group-hover:opacity-100 text-xl"
                />
              </div>
            </Link>
          </div>
        ) : (
          <div className="group relative inline-block text-2xl ">
            <Link to="/open-positions" className="group relative inline-block">
              <div>We're Hiring</div>
              <div className="flex items-center">
                5+ roles
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2 opacity-0 group-hover:opacity-100 text-xl"
                />
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className={`focus:outline-none ${
        location.pathname === '/open-positions' ? 'text-black' : 'text-white'
      }`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
            {location.pathname === "/open-positions" ? (
              <a href="/" className="block px-4 py-2 text-sm font-avenir">
                Home
              </a>
            ) : (
              <a
                href="/open-positions"
                className="block px-4 py-2 text-sm font-avenir"
              >
                Contact Us
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
