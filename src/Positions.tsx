import React from "react";
import logo from "./logo_white.png";
import logoBlue from "./logo.png";
import Grid from "@mui/material/Unstable_Grid2";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./App.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Positions() {
  return (
    <div className="position-container h-screen">
      <div className="flex justify-between bg-white p-6 ">
      <Link to="/" relative="path" className="z-50"><div className="customTextColor lg:text-xl font-poppins">SYNCOG.AI</div></Link>
        <div className="customTextColor lg:text-xl font-poppins">
          Apply to be a part of our team
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className=""></div>

        <div className="flex justify-end pr-6 pt-24">
          <form>
            <div className="flex justify-end text-slate-200 font-poppins">
              <label>
                <span className="pr-4">Postion:</span>
                <select className="customInput font-poppins">
                  <option value="someOption">VP Of Monetization</option>
                  <option value="otherOption">Curriculum Designer</option>
                  <option value="otherOption">AI Education Specialist</option>
                  <option value="otherOption">UI/UX Designer</option>
                </select>
              </label>
            </div>
            <div className="flex justify-end text-slate-200 font-poppins">
              <label>
                <span className="pr-4">Name:</span>
                <input
                  type="text"
                  name="name"
                  className="customInput font-poppins"
                />
              </label>
            </div>
            <div className="flex justify-end text-slate-200 font-poppins">
              <label>
                <span className="pr-4">Telephone:</span>
                <input
                  type="text"
                  name="name"
                  className="customInput font-poppins"
                />
              </label>
            </div>
            <div className="flex justify-end text-slate-200 font-poppins">
              <label>
                <span className="pr-4">Email:</span>
                <input
                  type="text"
                  name="name"
                  className="customInput font-poppins"
                />
              </label>
            </div>
            <div className="flex justify-end text-slate-200 font-poppins">
              <label>
                <span className="pr-4">Message:</span>
                <input
                  type="text"
                  name="name"
                  className="customInput font-poppins"
                />
              </label>
            </div>
            <div className="flex justify-end text-slate-200 font-poppins mt-12">
              <a
                href="#"
                className=" px-12 py-3 mt-4 text-base text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 customButtonBlueOut text-center"
              >
                Upload Resume
              </a>
            </div>
            <div className="flex justify-end text-slate-200 font-poppins">
              <a
                href="#"
                className=" custombg px-12 py-3 mt-4 text-base text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 customButtonWhiteOut text-center"
              >
                Contact us
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="text-base md:text-2xl font-poppins pt-6 pb-24 md:pb-12 md:pt-60 text-slate-100 text-center">
        If you have an interest in being a part of our team, kindly let us know.
      </div>
      <div className="flex md:flex-row flex-col justify-between bg-white p-6">
        <div className="customTextColor lg:text-base font-poppins">
          SynCog.Ai 
          <br />
          250 Park Avenue 
         <br />
          7th Floor 
         <br className="hidden md:block"/>
          New York, NY 10177
        </div>
        <div className="customTextColor lg:text-xl font-poppins md:pt-0 pt-8">
          General Inquires:{" "}
          <a href="mailto:contact@syncog.ai">
            <span className="customLink">Contact (at) syncog.ai</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Positions;
