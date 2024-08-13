import React from 'react';
import { Link } from 'react-router-dom';
import { MdHomeRepairService, MdHandyman } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10">
    {/* right side */}
    <div className=" flex space-x-4 md:space-x-10">
      <div className="mt-10 space-y-4">
        <div className=" w-48 flex flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
          <MdHomeRepairService size={"1.8rem"} />
          <h1 className=" text-xl font-bold">Buy Property</h1>
          <p className="text-xs">
          Find your dream home with our extensive listings. We provide personalized assistance to ensure you get the best deals on premium properties.
          </p>
        </div>
        <div className=" w-48 flex flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
          <FaHandshake size={"1.8rem"} />
          <h1 className=" text-xl font-bold">Rent Property</h1>
          <p className="text-xs">
          Explore a wide range of rental properties that suit your lifestyle and budget. We make renting easy and hassle-free.
          </p>
        </div>
      </div>
      <div className=" space-y-4">
        <div className=" w-48 flex flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
          <MdHandyman size={"1.8rem"} />
          <h1 className=" text-xl font-bold">Sell Property</h1>
          <p className="text-xs">
          Get the best value for your property with our expert selling services. We provide comprehensive support from listing to closing the deal.
          </p>
        </div>
        <div className=" w-48 flex flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
          <GiHouseKeys size={"1.8rem"} />
          <h1 className=" text-xl font-bold">Lease Property</h1>
          <p className="text-xs">
            Our company prides itself on timely delivery, ensuring prompt and
            efficient service to our customers.
          </p>
        </div>
      </div>
    </div>

    {/* left side */}
    <div className=" w-1/2 md:1/2 space-y-5">
      <h1 className="text-6xl font-bold">
        Know <span className=" text-orange-600">ur Services</span>
      </h1>
      <p className="  text-gray-500">
        We are a leading Real Estate company, specializing in property sales,
        rentals, and investments. With years of industry experience, we offer
        a wide range of residential and commercial properties to meet diverse
        needs. Our dedicated team provides exceptional service, expert
        guidance, and a seamless experience, making us the preferred choice
        for all your real estate requirements
      </p>
      <button className=" px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
        Read More
      </button>
    </div>
  </div>
  );
};

export default Services;