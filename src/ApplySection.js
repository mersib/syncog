import React from 'react';
import './styles.css';

const ApplySection = () => {
  return (
    <div className="apply-section flex flex-col">
      <div className="flex flex-1">
        <div className="apply-left w-1/2 bg-cover bg-center"></div>
        <div className="apply-right w-1/2 flex flex-col justify-end items-end p-10">
          <form className="md:w-full lg:w-6/12">
            <label className="block font-bold text-white mb-2" htmlFor="position">Position</label>
            <select id="position" className="form-input mb-4 w-full">
              <option>Instructional Designer</option>
              <option>Curriculum Designer</option>
              <option>Curriculum Specialist</option>
              <option>AI Education Specialist</option>
              <option>VP of Monetization</option>
              <option>Research Assistant</option>
            </select>

            <label className="block font-bold text-white mb-2" htmlFor="name">Name</label>
            <input id="name" type="text" className="form-input mb-4 w-full" />

            <label className="block font-bold text-white mb-2" htmlFor="telephone">Telephone</label>
            <input id="telephone" type="text" className="form-input mb-4 w-full" />

            <label className="block font-bold text-white mb-2" htmlFor="email">Email</label>
            <input id="email" type="email" className="form-input mb-4 w-full" />

            <label className="block font-bold text-white mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="form-input mb-4 w-full" rows="1"></textarea>
            <div className='flex flex-col justify-end items-end'>
            <button type="button" className="upload-button mb-4">Upload Resume</button>
            <button type="submit" className="send-button">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full text-center pb-4">
        <p className="interest-text text-2xl text-white md:px-5 px-10">
          If you have an interest in being a part of our team, kindly let us know.
        </p>
      </div>
    </div>
  );
};

export default ApplySection;
