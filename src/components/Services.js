import React from 'react';
import { MdHomeRepairService } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-8 px-4">
      {/* left side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center  space-y-5 m-3">
        <h1 className="text-3xl md:text-5xl font-bold text-end ">
          Know <span className="text-orange-600">Our Services</span>
        </h1>
        <p className="text-gray-500 text-xl md:text-xl pe-">
          We are a top Real Estate company with extensive experience in <br></br><b>buying, selling, renting, and leasing residential and commercial properties.</b> <br></br>Our expert team ensures a seamless process, handling all government paperwork for you.
        </p>
        <button className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
          Get Started!
        </button>
      </div>

      {/* right side */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="space-y-4">
          <div className="w-full md:w-48 flex flex-col items-center bg-white text-center p-3 py-5 drop-shadow-2xl rounded-md transition-transform duration-200 hover:scale-105">
            <MdHomeRepairService size={"1.8rem"} />
            <a href='#properties'>

              <h1 className="text-lg md:text-xl font-bold m-1">Buy Property</h1>
              <p className="text-sm">
                Find your dream home with our extensive listings. We provide personalized assistance to ensure you get the best deals on premium properties.
              </p></a>
          </div>
          <div className="w-full md:w-48 flex flex-col items-center bg-white text-center p-3 py-5  drop-shadow-2xl rounded-md transition-transform duration-200 hover:scale-105">
            <FaHandshake size={"1.8rem"} />
            <a href='#properties'>
              <h1 className="text-lg md:text-xl font-bold m-1">Rent Property</h1>
              <p className="text-sm">
                Explore a wide range of rental properties that suit your lifestyle and budget. We make renting easy and hassle-free.
              </p></a>
          </div>
        </div>
        <div className="space-y-4">

          <div className="w-full md:w-48 flex flex-col items-center bg-white text-center p-3 py-5 drop-shadow-2xl rounded-md transition-transform duration-200 hover:scale-105">
            <a href='/sellProperty'>
              <i class="fa-solid fa-indian-rupee-sign text-2xl"></i>
              <h1 className="text-lg md:text-xl font-bold m-1">Sell Property</h1>
              <p className="text-sm">
                Get the best value for your property with our expert selling services. We provide comprehensive support from listing to closing the deal.
              </p></a>
          </div>
          <div className="w-full md:w-48 flex flex-col items-center bg-white text-center p-3 py-5 drop-shadow-2xl rounded-md transition-transform duration-200 hover:scale-105">
            <GiHouseKeys size={"1.8rem"} />
            <a href="#properties">

              <h1 className="text-lg md:text-xl font-bold m-1">Lease Property</h1>
              <p className="text-sm">
              Lease property effortlessly with A2Z Premium Deals—your trusted partner in finding or listing the perfect rental.
              </p></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
