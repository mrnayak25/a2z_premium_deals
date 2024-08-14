import React from 'react';
import { MdHomeRepairService} from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-8 px-4">
      {/* left side */}
      <div className="w-full md:w-1/2 flex flex-col justify-end items-end text-end md:text-left space-y-5">
        <h1 className="text-4xl md:text-6xl font-bold text-end">
          Know <span className="text-orange-600">Our Services</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base pe-4">
          We are a leading Real Estate company, specializing in property sales,
          rentals, and investments. With years of industry experience, we offer
          a wide range of residential and commercial properties to meet diverse
          needs. Our dedicated team provides exceptional service, expert
          guidance, and a seamless experience, making us the preferred choice
          for all your real estate requirements.
        </p>
        <button className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
          Get Started!
        </button>
      </div>

      {/* right side */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="space-y-4">
          <div className="w-full md:w-48 flex flex-col items-center bg-white text-center p-3 py-5 drop-shadow-2xl rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-lg md:text-xl font-bold">Buy Property</h1>
            <p className="text-xs">
              Find your dream home with our extensive listings. We provide personalized assistance to ensure you get the best deals on premium properties.
            </p>
          </div>
          <div className="w-full md:w-48 flex flex-col items-center bg-white text-center p-3 py-5  drop-shadow-2xl rounded-md">
            <FaHandshake size={"1.8rem"} />
            <h1 className="text-lg md:text-xl font-bold">Rent Property</h1>
            <p className="text-xs">
              Explore a wide range of rental properties that suit your lifestyle and budget. We make renting easy and hassle-free.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full md:w-48 flex flex-col items-center bg-white text-center p-3 py-5 drop-shadow-2xl rounded-md">
          <i class="fa-solid fa-indian-rupee-sign text-2xl"></i>
            <h1 className="text-lg md:text-xl font-bold">Sell Property</h1>
            <p className="text-xs">
              Get the best value for your property with our expert selling services. We provide comprehensive support from listing to closing the deal.
            </p>
          </div>
          <div className="w-full md:w-48 flex flex-col items-center bg-white text-center p-3 py-5 drop-shadow-2xl rounded-md">
            <GiHouseKeys size={"1.8rem"} />
            <h1 className="text-lg md:text-xl font-bold">Lease Property</h1>
            <p className="text-xs">
              Our company prides itself on timely delivery, ensuring prompt and efficient service to our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
