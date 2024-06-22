import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contact from "../images/contact.png";
import whatsapp from "../images/whatsapp.png";


AOS.init();

function AboutUs() {
  return (
    <div className="p-6" id='about'>
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="mb-8">
      <p className="text-lg text-gray-700 mb-4" data-aos="fade-in">
  Welcome to A2Z Premium Deals, your ultimate destination for premium property transactions. 
  We connect you with dream homes and prime investment opportunities with a focus on customer satisfaction and personalized service.
</p>
<p className="text-lg text-gray-700 mb-4" data-aos="fade-in" data-aos-delay="100">
  Whether buying, selling, or renting, A2Z Premium Deals provides top-notch support and the best deals in the real estate market.
</p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPofOc_pK-Fh1jYVUnfPWUq3GPuceQxWBQXA&s" alt="Store 1" className="w-full h-auto rounded-lg shadow-lg" data-aos="fade-left" />
        <img src="https://coralpi.com/wp-content/uploads/2022/06/land-for-sale.jpg" alt="Store 2" className="w-full h-auto rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="100" />
        <img src="https://housing.com/news/wp-content/uploads/2024/01/Flats-vs-compressed-1.jpg" alt="Store  3" className="w-full h-auto rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="200" />
      </div>
      
      <div className="p-6 m-6 bg-gray-100 rounded-lg" id='contact'>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2><br></br>
        <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <strong>Phone:</strong> <br></br>
            <a href="tel:+919902331774" className="text-black-600 "> +919902331774</a>, 
            <a href="tel:+918494972860" className="text-black-600 "> +918494972860</a><br />
            <strong>Contact Person:<br></br></strong> Mr. Brayan Alphonso<br />
            <strong>Address:<br></br></strong> Leo Brother's Shopping Complex, Mukamar, Udupi Dist. 574 111, Karnataka, India
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            "A2Z Premium Deals - Your trusted partner in real estate, serving Karnataka and all over India."
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="tel:+919902331774" >
            <img className="h-24 w-auto" src={contact} alt="Contact Now" />
            </a>
            <a href="https://wa.me/919902331774?text=Hello%2C%20I%20am%20interested%20in%20your%20real%20estate%20services." target="_blank" rel="noopener noreferrer" >
            <img className="h-24 w-auto" src={whatsapp} alt="whatsapp" />
</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
