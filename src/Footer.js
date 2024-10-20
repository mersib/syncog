import React from 'react';
import './styles.css';

const Footer = ({ isWhite }) => {
    console.log(isWhite)
  return (
    <footer
      className={`footer p-4 flex justify-between items-center ${
        isWhite ? 'bg-white text-black' : 'bg-[#09164c] text-white'
      }`}
    >
      <div className="footer-left">
        <p>SynCog.Ai</p>
        <p>250 Park Avenue, 7th Floor</p>
        <p>New York, NY 10177</p>
      </div>
      <div className="footer-center"></div>
      <div className="footer-right">
        <p>General Inquiries: contact (at) syncog.ai</p>
      </div>
    </footer>
  );
};

export default Footer;
