import React from "react";
import logo from "./logo.svg";
import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="videoSection">
        <video autoPlay muted loop className="fullscreen-video">
          <source src="landingBg.mp4" type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </video>
      </div>
      <div className="fullscreen-video">
        <div className="flex flex-col h-screen gap-y-96">
          <div className="flex  md:flex-row flex-col  md:justify-between lg:pt-20 sm:pt-6 pt-24">
            <div className="md:pl-20 sm:pl-2 pl-0 lg:text-xl text-slate-200 font-poppins text-center sm:text-left pt-6 sm:pt-0">
              SYNCOG
            </div>
            <div className="lg:text-xl text-slate-200 font-poppins text-center sm:text-left pt-6 sm:pt-0">
              FULL SITE COMING SOON
            </div>
            <div className="md:pr-20 sm:pr-2 pr-0 lg:text-xl text-slate-200 font-poppins text-center sm:text-end pt-6 sm:pt-0">
              We're Hiring
              <br />
              4 ROLES
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="pl-0 sm:pl-20 sm:pl-2 md:pl-16 text-5xl lg:text-9xl text-slate-200 font-poppins text-center sm:text-left w-screen">
              SYNCOG AI
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bgPic bg-cover bg-bottom md:bg-center ">
        <div></div>
        <div className="pl-6 sm:pl-0">
          <div className="text-3xl md:text-5xl font-poppins pt-80 md:pt-64 pr-20 pr-6 md:pr-20 text-slate-50 ">
            Step into History, Learn from Legends.
          </div>
          <div className="text-2xl md:text-4xl font-poppins pt-6 pb-36 pr-6 md:pr-20 text-slate-50">
            Engage with historical figures like never before, enhancing your
            learning journey through interactive, lifelike encounters.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-screen">
        <div>
          <div className="text-2xl lg:text-5xl font-poppins pt-32 md:px-28 uppercase text-sky-500 pl-6 sm:pl-0">
            Become Part of Our Vision and Transform Learning
          </div>
          <div className="text-xl lg:text-2xl font-poppins pt-12 md:px-28 pl-6 sm:pl-0 sm:pr-0 pr-6">
            Can’t find the right role for you? We’d love to hear how your unique
            skills and passion can help shape the future of education.
          </div>
          <div className="mx-28 my-12">
            <a
              href="#"
              className=" bg-sky-400 px-12 py-3 text-lg text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="bg-cyan-600">
          <div className="px-6 md:px-20 pt-24">
            <div className="lg:text-2xl font-poppins py-6 text-slate-200">
              Open Roles
            </div>
            <hr />
          </div>
          <div className="px-6 md:px-20 pt-2">
            <div className="lg:text-2xl font-poppins py-6 text-slate-200">
            AI Education Specialist
            </div>
            <div className="lg:text-xl font-poppins py-6 text-slate-200">
              Opening Soon
            </div>
            <hr />
          </div>
          <div className="px-6 md:px-20 pt-2">
            <div className="lg:text-2xl font-poppins py-6 text-slate-200">
            AR/VR Content Developer
            </div>
            <div className="lg:text-xl font-poppins py-6 text-slate-200">
              Opening Soon
            </div>
            <hr />
          </div>
          <div className="px-6 md:px-20 pt-2">
            <div className="lg:text-2xl font-poppins py-6 text-slate-200">
            Interactive Experience Designer
            </div>
            <div className="lg:text-xl font-poppins py-6 text-slate-200">
              Opening Soon
            </div>
            <hr />
          </div>
          <div className="px-6 md:px-20 pt-2">
            <div className="lg:text-2xl font-poppins py-6 text-slate-200">
            Historical Research Analyst
            </div>
            <div className="lg:text-xl font-poppins py-6 text-slate-200">
              Opening Soon
            </div>
            <hr className="mb-12 md:mb-0"/>
          </div>
          
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bgPic2 bg-cover bg-center">
        <div>
          <div className="text-3xl md:text-6xl font-poppins pt-64 pl-12 md:pr-0 pr-12 md:pl-20 pb-32 text-slate-100">
            Unlock the Past with Interactive Learning Experiences
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-96 md:w-screen">
          <div className="flex  md:flex-row flex-col md:w-screen md:justify-between lg:pt-20 sm:pt-6 pt-24 pb-12">
            <div className="md:pl-20 sm:pl-2 pl-0 lg:text-xl text-slate-950 font-poppins text-center sm:text-left pt-6 sm:pt-0">
              Based in, USA
            </div>
            <div className="lg:text-xl text-slate-950 font-poppins text-center sm:text-end pt-6 sm:pt-0 sm:pr-20">
            Copyright © 2024 , Syncog
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
