import React from 'react';
import './styles.css';
import logoBlue from "./logo.png";

const FutureSection = () => {
  return (
    <div className="future-section min-h-screen flex bg-black text-white">
      <div className="left-section w-1/2 flex items-center justify-center">
        <img src={logoBlue} alt="Centered Image" className="max-w-full max-h-full" />
      </div>
      <div className="right-section w-1/2 p-8 flex items-center justify-center">
        <div className="text-container ">
        <h2 className="title mb-4 md:text-4xl text-3xl">Future-proof your educational strategy</h2>
          <p className='text-xl'>AI is coming and it will change learning. You are right to be concerned. We are. Yet, the dangers are not quite what they seem.</p>
          <br />
          <p className='text-xl'>The solution is surprising. At its most basic, imagine yourself as a painter making a painting of yourself. Within your frame for yourself, consider your horizon. This is essential. You need a Horizon. What is it? The New World of AI calls for a New Horizon.</p>
          <br />
          <p className='text-xl'>We want you to more than survive. You need to flourish. That won’t be easy. We have discovered a special journey. Our platform will help you along the way to a Greater Horizon. It may not be easy. It isn’t risk-free. It requires dedication. As you approach the end, you will have the New Horizon you need.</p>
          <br />
          <p className='text-xl'>Be better than AI.</p>
          <br />
          <p className='text-xl'>Scale YOURSELF. Your SKILLS. Your KNOWLEDGE. Your SPIRIT. Scale OTHERS.</p>
          <br />
          <p className='text-xl'>We provide the platform. You provide the initiative.</p>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
