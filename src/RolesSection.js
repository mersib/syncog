import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const RolesSection = () => {
  return (
    <div className="roles-section min-h-screen flex">
      <div className="left-section-roles w-1/2 flex flex-col justify-left items-left p-10 pt-24">
        <h1 className="font-syncopate md:text-4xl text-2xl  text-title mb-8">
          Learn about AI.<br />
          Learn from AI.<br />
          Be better than AI.
        </h1>
        <p className="font-avenir text-text-normal text-xl mb-6">
          Get more than the educational edge you need to compete in an AI world. An edge will not be enough. As AI scales, so too must you. What do you think you need? <br />
          Join our Team?
        </p>
        <Link to="/open-positions">
          <button className="contact-button text-title border-title border-2 px-4 py-2 rounded-md">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="right-section-roles w-1/2 flex flex-col justify-left items-left p-10 overflow-y-auto pt-24 min-h-screen">
        <h2 className="font-syncopate text-2xl text-white mb-6">OPEN ROLES</h2>
        <hr className="divider mb-8" />
        <div className="role">
          <h3 className="font-syncopate text-white text-2xl">Instructional Designer</h3>
          <p className="font-avenir text-white text-lg mb-6 mt-8">Opening Soon</p>
          <hr className="divider mb-8" />
        </div>
        <div className="role">
          <h3 className="font-syncopate text-white text-2xl">Curriculum Designer</h3>
          <p className="font-avenir text-white text-lg mb-6 mt-8">Opening Soon</p>
          <hr className="divider mb-8"  />
        </div>
        <div className="role">
          <h3 className="font-syncopate text-white text-2xl">Curriculum Specialist</h3>
          <p className="font-avenir text-white text-lg mb-6 mt-8">Opening Soon</p>
          <hr className="divider mb-8"  />
        </div>
        <div className="role">
          <h3 className="font-syncopate text-white text-2xl">AI Education Specialist</h3>
          <p className="font-avenir text-white text-lg mb-6 mt-8">Opening Soon</p>
          <hr className="divider mb-8"  />
        </div>
        <div className="role">
          <h3 className="font-syncopate text-white text-2xl">VP of Monetization</h3>
          <p className="font-avenir text-white text-lg mb-6 mt-8">Opening Soon</p>
          <hr className="divider mb-8"  />
        </div>
        <div className="role">
          <h3 className="font-syncopate text-white text-2xl">Research Assistant</h3>
          <p className="font-avenir text-white text-lg mb-6 mt-8">Opening Soon</p>
          <hr className="divider mb-8"  />
        </div>
        {/* Add more roles as needed */}
      </div>
    </div>
  );
};

export default RolesSection;
