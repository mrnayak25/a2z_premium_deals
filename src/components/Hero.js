import React from "react";
import background from "../images/buildings.png";
import bg1 from "../images/bg_1.png";
import family from "../images/family_img.png";
//import headerImage from '../images/header_image.jpg';

function Hero() {
  return (
    <div>
      <div
        className="relative isolate px-2 pt-0 lg:px-8"
        style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "bottom" }}>
        <div
          className="mx-auto max-w-7xl py-5  sm:py-40 lg:py-40"
          style={{ backgroundImage: `url(${bg1})`, backgroundSize: "contain", backgroundPosition: "center" }}>
          <h1 className="text-2xl font-bold tracking-tight mt-20 text-gray-900 sm:text-4xl">A2Z PREMIUM DEALS</h1>
          {/* <div className="mt-10 text-center">
            <img src={headerImage} alt="Real Estate" className="mx-auto h-100 w-auto rounded-lg shadow-lg object-cover transition-transform duration-300 transform hover:scale-110" />
          </div> */}
          <div className="text-center mb-80">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-10">
              Buy, Sell, & Rent Properties
            </h1>{" "}
            <br />
          </div>
        </div>
      </div>
      <div className=" mt-6 flex justify-center items-center"> 
        <div className="h-50">
          <img className="" src={family} alt="family"/>
        </div>
        <div className="text-center py-7 ">
          <h2 className=" text-gray-900">The Best Real-Estate Agency In Karnataka</h2>
          <p className=" text-lg leading-8  text-gray-900">
            "Your dream property is just a deal away. Discover the best real estate opportunities with us!"
          </p>
          <div className="mt-10  flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Contact Us
            </a>
            <a href="#about" className="text-sm font-semibold leading-6 text-gray-900">
              Know More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
