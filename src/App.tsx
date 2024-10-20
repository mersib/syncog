import React from "react";
import logo from "./logo_white.png";
import logoBlue from "./logo.png";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="videoSection">
        <video playsInline autoPlay muted loop className="fullscreen-video z-0">
          <source src="bgVideo3.mp4" type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </video>
      </div>
      <div className="fullscreen-video">
        <div className="flex flex-col h-screen gap-y-96 ">
          <div className="flex  md:flex-row flex-col  md:justify-between lg:pt-20 sm:pt-6 pt-24">
            {/* <div>
              <img
                src={logo}
                alt="Logo"
                className="logo-container md:pl-20 sm:pl-2 mx-auto"
              />
              <div className="md:pl-24 sm:pl-2 pl-0 lg:text-xl text-slate-200 font-poppins text-center sm:text-left pt-6 sm:pt-0 font-bold">
                SYNCOG.AI
              </div>
            </div> */}
            <div className="lg:text-xl text-slate-200 font-poppins text-center sm:text-left pt-6 sm:pt-5">
            SYNCOG.AI
            </div>
            <div className="md:pr-20 sm:pr-2 pr-0 lg:text-xl text-slate-200 font-poppins text-center sm:text-end pt-6 sm:pt-0 z-50">
            <Link to="/open-positions" className="z-50" relative="path">
              We're Hiring
              <br />4 ROLES
              </Link>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="pl-0 sm:pl-20 sm:pl-2 md:pl-16 text-6xl pb-24 lg:text-6xl text-slate-200 font-poppins text-center w-screen">
              Scale Every Human for the New A.I. World.
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bgPic bg-cover bg-bottom md:bg-center ">
        <div className="my-auto mx-auto">
          <img
            src={logoBlue}
            alt="Logo"
            className="logo-container-medium my-auto mx-auto"
          />
        </div>
        <div className="pl-6 sm:pl-0">
          <div className="text-xl md:text-4xl font-poppins pt-80 md:pt-64 pr-20 pr-6 md:pr-20 text-slate-50 ">
            Future-proof your educational strategy
          </div>
          <div className="text-xl md:text-xl font-poppins pt-6 pb-36 pr-6 md:pr-20 text-slate-50">
            <br />
            <br />
            AI is coming and will change learning. You are correct to be
            concerned. We were and remain so. However, the dangers are not what
            they seem.
            <br />
            <br />
            The solution is surprising. In part, you need a new Horizon.
            <br />
            <br />
            We want you to survive and flourish in the oncoming AI World.
            Accordingly, we discovered an improbable journey. Our platform helps
            you to take that path. It may not be the easiest, nor the most
            risk-free. But, you will get what you need.
            <br />
            <br />
            Be better than AI. <br />
            <br />
            Scale YOURSELF. Scale your SPIRIT. Scale OTHERS.
            <br />
            <br />
            We provide the platform. You provide the initiative.
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-screen">
        <div>
          <div className="text-2xl lg:text-5xl font-poppins pt-32 md:px-28 uppercase customTextColor pl-6 sm:pl-0">
            Learn about AI. <br /> Learn from AI. <br /> Be better than AI.
          </div>
          <div className="text-xl lg:text-2xl font-poppins pt-12 md:px-28 pl-6 sm:pl-0 sm:pr-0 pr-6">
            Get more than the educational edge you need to compete in an AI
            world. An edge will not be enough. As AI scales, so too must you.
            What do you think you need?
            <br />
            <br />
            <br />
            Join our Team?
          </div>
          <div className="md:mx-28 mx-0 ml-7 my-12">
            <a
              href="/open-positions"
              className=" custombg px-12 py-3 text-lg text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="custombg">
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
            <hr className="mb-12 md:mb-0" />
          </div>
        </div>
      </div>
      <div className="flex flex-col bgPic2 bg-cover bg-center">
        <div className="text-xl md:text-4xl font-poppins pt-32 pl-12 md:pr-0 pr-12 md:pl-20 pb-24 text-slate-100 text-center">
          DO YOU NEED A NEW HORIZON?
        </div>
        <div className="text-xl md:text-4xl font-poppins pt-32 pl-12 md:pr-0 pr-12 md:pl-20 pb-32 text-slate-100 text-center">
          Open and Scale yourself through deep connections with the past,
          present, and future.
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-y-96 md:w-screen">
        <div className="flex  md:flex-row flex-col md:w-screen md:justify-between lg:pt-20 sm:pt-6 pt-24 pb-12">
          <div className="md:pl-20 sm:pl-2 pl-0 lg:text-xl text-slate-950 font-poppins text-center sm:text-left pt-6 sm:pt-0">
            Based in New York, NY
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
