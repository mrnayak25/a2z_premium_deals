import React from "react";


import headerImage from '../images/header_image.jpg';

function Hero() {
  return (
    <div>

      <div className=" mt-6  justify-center items-center">
        <div className="h-50">
          {/* search bar */}
          <div class="bg-card p-8 rounded-lg shadow-xl transition-transform transform ">
            <h1 class="text-5xl font-extrabold text-foreground mb-8 text-center">Real Estate Made Real Easy</h1>
            <div class="flex flex-wrap space-x-4 mb-8 justify-center">
              <button class="bg-accent text-accent-foreground p-4 rounded-lg hover:bg-accent/80 transition transform hover:scale-105">New Projects</button>
              <button class="bg-accent text-accent-foreground p-4 rounded-lg hover:bg-accent/80 transition transform hover:scale-105">Buy Properties</button>
              <button class="bg-accent text-accent-foreground p-4 rounded-lg hover:bg-accent/80 transition transform hover:scale-105">Rent Properties</button>
              <button class="bg-accent text-accent-foreground p-4 rounded-lg hover:bg-accent/80 transition transform hover:scale-105">Ply Hotels</button>
              <button class="bg-accent text-accent-foreground p-4 rounded-lg hover:bg-accent/80 transition transform hover:scale-105">Plot & Land</button>
              <button class="bg-accent text-accent-foreground p-4 rounded-lg hover:bg-accent/80 transition transform hover:scale-105">Commercial Properties</button>
              <button class="bg-accent text-accent-foreground p-4 rounded-lg hover:bg-accent/80 transition transform hover:scale-105">Find Agents</button>
            </div>
            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
              <input
                type="text"
                placeholder='Search by Project "Prestige Kingfisher Towers"'
                class="border border-border rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-primary transition-transform transform hover:scale-105"
              />
              <select class="border border-border rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-primary transition-transform transform hover:scale-105">
                <option>Near me</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <input type="text" placeholder="Budget" class="border border-border rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-primary transition-transform transform hover:scale-105" />
              <select class="border border-border rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-primary transition-transform transform hover:scale-105">
                <option>Property Type</option>
                <option>Type 1</option>
                <option>Type 2</option>
              </select>
              <button class="bg-primary text-primary-foreground p-4 rounded-lg hover:bg-primary/80 transition transform hover:scale-105">Search</button>
            </div>
            <div class="text-muted-foreground text-sm text-center">
              <span>Search by </span>
              <span class="font-bold">Travel time for your perfect home</span>
            </div>
          </div>
        </div>
        <div
          className="relative isolate px-2 pt-0 lg:px-8">
          <div
            className="mx-auto max-w-7xl py-5  sm:py-40 lg:py-40">
            <h1 className="text-2xl font-bold tracking-tight mt-20 text-gray-900 sm:text-4xl">A2Z PREMIUM DEALS</h1>
            <div className="mt-10 text-center">
              <img src={headerImage} alt="Real Estate" className="mx-auto h-100 w-auto rounded-lg shadow-lg object-cover transition-transform duration-300 transform hover:scale-110" />
            </div>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-10">
                Buy, Sell, & Rent Properties
              </h1>{" "}
              <br />
            </div>
          </div>
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
