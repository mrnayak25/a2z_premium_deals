import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from 'framer-motion';
import image from '../images/hero-image.png';

const Hero = () => {
  return (
    <section className="text-white relative pb-8 z-10">
      <div className="flex justify-around items-end p-8 w-full mx-auto max-w-[1440px]">
        
        {/* ----- Left Side ----- */}
        <div className="flex flex-col gap-12">
          <div className="relative z-10">
            <div className="absolute h-16 w-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full right-[28%] top-[-10%] z-[-1]" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}
              className="font-semibold text-[3.8rem] leading-[4rem] lg:text-[3rem] lg:leading-[3.5rem] sm:text-[2.5rem] sm:leading-[3rem]"
            >
              Discover
              <br /><span className="bg-gradient-to-r from-yellow-200 via-white to-blue-200 bg-clip-text text-transparent animate-gradient">Most Suitable</span>
              <br /> Property
            </motion.h1>
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
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button>
          </div>

          <div className="flex justify-between space-x-8 w-full">
            <div className="flex flex-col items-center text-center">
              <span className="text-[2rem]">
                <CountUp start={8800} end={9000} duration={4} />
                <span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-300">Premium Products</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-[2rem]">
                <CountUp start={1950} end={2000} duration={4} />
                <span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-300">Happy Customers</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-[2rem]">
                <CountUp end={30} />
                <span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-300">Project Builds</span>
            </div>
          </div>

        </div>

        {/* ----- Right Side ----- */}
        <div className="flex justify-center">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring"
            }}
            className="w-[30rem] h-[45rem] overflow-hidden rounded-t-[15rem] border-8 border-white/10 sm:w-full sm:h-[35rem]"
          >
            <img src={image}alt="" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
