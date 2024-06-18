import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function AboutUs() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="mb-8">
      <p className="text-lg text-gray-700 mb-4" data-aos="fade-in">
        Welcome to A2Z Premium Deals, your one-stop destination for buying, selling, and renting premium properties. 
        Our mission is to connect property seekers with their dream homes and investment opportunities. 
        With a focus on customer satisfaction, we offer personalized services and a seamless experience.
      </p>
      <p className="text-lg text-gray-700 mb-4" data-aos="fade-in" data-aos-delay="100">
        Whether you are looking to invest in real estate, find your next home, or rent a property, A2Z Premium Deals is here to help. 
        Our extensive network and expertise in the real estate market ensure that we provide the best deals and comprehensive support throughout the process.
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <img src="https://via.placeholder.com/300" alt="Store Image 1" className="w-full h-auto rounded-lg shadow-lg" data-aos="fade-left" />
        <img src="https://via.placeholder.com/300" alt="Store Image 2" className="w-full h-auto rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="100" />
        <img src="https://via.placeholder.com/300" alt="Store Image 3" className="w-full h-auto rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="200" />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">Contact Us</h2>
        <p className="text-lg mb-2" data-aos="fade-up" data-aos-delay="100">Phone: +919902331774</p>
        <p className="text-lg mb-2" data-aos="fade-up" data-aos-delay="200">Phone: +918494972860</p>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="300">
          MR. BRAYAN ALPHONSO<br />
          LEO BROTHER'S SHOPPING COMPLEX<br />
          MUKAMAR, UDUPI DIST. 574 111.<br />
          KARNATAKA, INDIA
        </p>
      </div>
    </div>
  );
}

export default AboutUs;