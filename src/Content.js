import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import './styles.css';
import FutureSection from './FutureSection';
import RolesSection from './RolesSection';
import HorizonSection from './HorizonSection';
import Footer from './Footer';

const App = () => {
  return (
    <div>
    <div className="flex flex-col min-h-screen text-white">
      <video playsInline autoPlay muted loop className="video-background">
        <source src="bgVideo3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <MainContent />
    </div>
    <FutureSection />
    <RolesSection />
    <HorizonSection />
    <Footer isWhite={true} />
    </div>
  );
};

export default App;
