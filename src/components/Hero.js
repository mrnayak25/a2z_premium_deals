import React from 'react';
import headerImage from '../images/header_image.jpg';

function Hero() {
  return (
    <div>
      <div className="relative isolate px-6 pt-0 lg:px-8">
        <div className="mx-auto max-w-7xl py-20 sm:py-40 lg:py-40">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            A2Z PREMIUM DEALS
          </h1>
          <div className="mt-10 text-center">
            <img src={headerImage} alt="Real Estate" className="mx-auto h-100 w-auto rounded-lg shadow-lg object-cover transition-transform duration-300 transform hover:scale-110" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl py-10">
            Buy, Sell, & Rent Properties</h1> <br/> <h2>The Best Real-Estate Agency In Karnataka</h2>
           
            <p className="mt-6 text-lg leading-8 text-gray-600">
              "Your dream property is just a deal away. Discover the best real estate opportunities with us!"
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </a>
              <a href="#about" className="text-sm font-semibold leading-6 text-gray-900">
                Know More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
