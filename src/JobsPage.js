import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import './styles.css';
import ApplySection from './ApplySection';
import Footer from './Footer';

const JobsPage = () => {
  return (
    <div>
    {/* <div className="flex flex-col min-h-screen text-white"> */}
      <Header />
      <ApplySection />
      <Footer />
    {/* </div> */}
    </div>
  );
};

export default JobsPage;
