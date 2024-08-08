import React from 'react';
import './styles.css'; // Assuming the styles are in this file

const HorizonSection = () => {
  return (
    <div className="horizon-section bg-cover bg-center flex flex-col justify-between">
      <h1 className="text-center text-white text-2xl md:text-4xl pt-16 font-syncopate">
        DO YOU NEED A NEW HORIZON?
      </h1>
      <p className="text-center text-white text-xl md:text-2xl pb-16 font-avenir">
      Open and Scale yourself through deep connections to the past, present, and future.
      </p>
    </div>
  );
};

export default HorizonSection;