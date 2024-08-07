import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className=" skeleton p-6 m-6 bg-gray-100 rounded-lg" id='services'>
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="service-card bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
        <a href="#property">
          <img skeleton 
            src="https://m.economictimes.com/thumb/msid-54865485,width-1200,height-900,resizemode-4,imgsize-59263/rely-on-experts-if-buying-real-estate-in-another-city.jpg"
            alt="Buy Property"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Buy Property</h2>
          <p className="text-gray-700">Find your dream home with our extensive listings. We provide personalized assistance to ensure you get the best deals on premium properties.</p>
        </a>
        </div>
        
        <div className="service-card bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="100">
         <a href="#property">
          <img 
            src="https://assets.entrepreneur.com/content/3x2/2000/1681755662-GettyImages-1362129126.jpg"
            alt="Rent Property"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Rent Property</h2>
          <p className="text-gray-700">Explore a wide range of rental properties that suit your lifestyle and budget. We make renting easy and hassle-free.</p>
          </a>
        </div>
        
        <div className="service-card bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
          <Link to="/sellProperty" >
          <img 
            src="https://d32b5joreyushd.cloudfront.net/media/uploads/2019/04/15/sell-property-online.jpg"
            alt="Sell Property"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Sell Property</h2>
          <p className="text-gray-700">Get the best value for your property with our expert selling services. We provide comprehensive support from listing to closing the deal.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;