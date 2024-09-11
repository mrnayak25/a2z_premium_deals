import React from "react";
import { Link } from "react-router-dom";
import share from "../images/sharethis-64.png";
import { RWebShare } from "react-web-share";

const LandItem = ({ land, setId, index }) => {
  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Check if land and its properties are defined
  if (!land || !land.imageUrls || land.imageUrls.length === 0) {
    return <div>Property data is missing.</div>;
  }

  return (
    <div className="object-cover transition-transform duration-300 transform hover:scale-105 ">
      <div className="flex flex-col items-start gap-2.5 p-3 rounded-lg mx-auto transition-transform duration-300 ease-in hover:scale-105 hover:bg-gradient-to-b hover:from-transparent hover:to-blue-100/75 hover:shadow-xl">
        <div className="max-h-xl text-sm">
          <div className="absolute top-0.2 left-4 z-10" data-aos="fade-down" data-aos-delay="400">
            <button className="text-white bg-orange-500 p-2 font-medium rounded-br-lg rounded-tl-lg">{index}</button>
          </div>
          <div className="absolute top-0.1 right-4 z-10" data-aos="fade-down" data-aos-delay="400">
            <RWebShare
              data={{
                text: `Check out this property on A2Z PREMIUM DEALS \n Title: ${land.title}\n Description: ${land.description}\n Price: Rs.${formatPrice(land.price)}`,
                url: `https://a2zpremiumdeals.com/viewproperty/${land.id}`,
                title: land.title,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button className="text-white bg-orange-500 p-2 font-medium rounded-bl-lg rounded-tr-lg">
                <img className="h-4 transition-transform duration-300 hover:scale-110" src={share} alt="share" />
              </button>
            </RWebShare>
          </div>
          <Link to={`/viewproperty/${land.id}`}>
            <img src={land.imageUrls[0]} alt="home" className="rounded w-full h-1/2" data-aos="fade-down" data-aos-delay="200" />
          </Link>
        </div>

        <Link to={`/viewproperty/${land.id}`} className="block w-full">
          <div className="flex-none text-start font-serif space-y-2 w-full" data-aos="fade-down" data-aos-delay="300">
            <span className="text-lg font-semibold text-gray-700">
              <span className="text-yellow-600">&#8377;</span>
              <span>{formatPrice(land.price)}</span>
            </span><br />

            <span className="text-2xl text-sky-900 font-bold font-roboto">{land.title}</span><br />
            <span>For <span className="text-orange-500">{land.sellOrRent}</span></span> <br />
            <span className="text-sky-800 space-x-2">
              <i className="fa-solid fa-location-dot text-slate-900"></i>
              <span>{land.location ? land.location : "Not defined"}</span>
            </span><br />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandItem;
