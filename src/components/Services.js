import React from 'react';

const Services = () => {
  return (
    <div className="p-6 m-6 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="service-card bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
          <img 
            src="https://via.placeholder.com/300"
            alt="Buy Property"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Buy Property</h2>
          <p className="text-gray-700">Find your dream home with our extensive listings. We provide personalized assistance to ensure you get the best deals on premium properties.</p>
        </div>
        
        <div className="service-card bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="100">
          <img 
            src="https://via.placeholder.com/300"
            alt="Rent Property"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Rent Property</h2>
          <p className="text-gray-700">Explore a wide range of rental properties that suit your lifestyle and budget. We make renting easy and hassle-free.</p>
        </div>
        
        <div className="service-card bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
          <img 
            src="https://via.placeholder.com/300"
            alt="Sell Property"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Sell Property</h2>
          <p className="text-gray-700">Get the best value for your property with our expert selling services. We provide comprehensive support from listing to closing the deal.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;