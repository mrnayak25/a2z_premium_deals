import React, { useState, useEffect } from "react";
import { HiLocationMarker } from "react-icons/hi";
import image from '../images/5.jpg';

const Hero = ({ setLocation, location }) => {
  const [inputValue, setInputValue] = useState("");
  const [premiumProductsCount, setPremiumProductsCount] = useState(8800);
  const [happyCustomersCount, setHappyCustomersCount] = useState(1950);
  const [projectBuildsCount, setProjectBuildsCount] = useState(0);

  useEffect(() => {
    setInputValue(location);
  }, [location]);

  useEffect(() => {
    const incrementCount = (endValue, setCount) => {
      let startValue = 0;
      const duration = 2000;
      const increment = endValue / (duration / 10);
      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(interval);
        }
        setCount(Math.floor(startValue));
      }, 10);
    };

    incrementCount(900, setPremiumProductsCount);
    incrementCount(2000, setHappyCustomersCount);
    incrementCount(30, setProjectBuildsCount);
  }, []);

  const handleSearch = () => {
    setLocation(inputValue);
  };

  return (
    <section className="text-white relative pb-8 z-10">
      <div className="flex justify-around items-end p-8 w-full mx-auto max-w-[1440px]">

        {/* Left Side */}
        <div className="flex flex-col gap-12">
          <div className="relative z-10">
            <div className="absolute h-16 w-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full right-[28%] top-[-10%] z-[-1]" />
            <h1
              className="font-semibold text-[3.8rem] leading-[4rem] lg:text-[3rem] lg:leading-[3.5rem] sm:text-[2.5rem] sm:leading-[3rem] animate-fade-in-down"
            >
              Discover
              <br /><span className="bg-gradient-to-r from-yellow-200 via-white to-blue-200 bg-clip-text text-transparent">Most Suitable</span>
              <br /> Property
            </h1>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-300">
              Find a variety of properties that suit you very easily<br />
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className="flex items-center bg-white rounded-lg border-[3px] border-gray-400/60 p-2.5 w-full">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input 
              type="text" 
              className="border-none outline-none w-full px-2 text-black"
              placeholder="Enter location"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <a href="#properties">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            </a>
          </div>

          <div className="flex justify-between space-x-8 w-full">
            <div className="flex flex-col items-center text-center">
              <span className="text-[2rem]">
                {premiumProductsCount}<span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-300">Premium Property</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-[2rem]">
                {happyCustomersCount}<span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-300">Happy Customers</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-[2rem]">
                {projectBuildsCount}<span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-300">Project Builds</span>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div
            className="w-[30rem] h-[45rem] overflow-hidden rounded-t-[15rem] border-8 border-white/10 sm:w-full sm:h-[35rem] transition-transform transform hover:scale-105"
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
