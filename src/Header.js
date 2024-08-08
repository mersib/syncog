import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="transparent-header flex justify-between items-center p-4">
      <div className="pl-8">
        <Link to="/" className="text-lg font-bold font-syncopate">
          SYNCOG.AI
        </Link>
      </div>
      <div className="hidden md:block text-right font-avenir relative pr-8">
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
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
            <a href="/open-positions" className="block px-4 py-2 text-sm font-avenir">Contact Us</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
