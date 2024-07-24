import React, { useState } from "react";
import callpng from '../images/phone.png'
import whatsapp from '../images/whatsapp_img.png'
import { Link } from "react-router-dom";
import share from '../images/sharethis-64.png'

const LandItem = ({ land, setId ,index }) => {
  const [more, setMore] = useState(false);

  const whatsappMessage = `
Hi Sir, I am interested in this property which is listed on your jobhunt4u.in website.
Details:
- Title: ${land.title}
- Description: ${land.description}
- Price: Rs.${land.price}
- Url: https://a2zpremiumdeals.com/viewproperty/${land.id}
  `;

  const handleShare = async () => {
    const shareData = {
      title: land.title,
      text: `Check out this property on A2Z PREMIUM DEALS \n Title: ${land.title}\n Description: ${land.description}\n Price: Rs.${land.price}`,
      url: `https://a2zpremiumdeals.com/viewproperty/${land.id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('Shared successfully');
      } else {
        console.log('Web Share API not supported in this browser.');
        // Fallback to custom share dialog or copy to clipboard
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="object-cover transition-transform duration-300 transform hover:scale-105">
      <div
        className="relative max-w-sm bg-white border transition-transform duration-300 transform hover:scale-105 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
        data-aos="fade-left">
      
        <div className="absolute top-0.1 left-2 z-10" data-aos="fade-down" data-aos-delay="200">
            <button className="text-white bg-green-500 rounded-b-lg p-2 px-3 font-medium">{index}</button>
          </div>
          <div className="absolute top-0.1 right-2 z-10" data-aos="fade-down" data-aos-delay="200">
            <button onClick={handleShare} className="text-white bg-blue-700 rounded-b-lg p-2 py-2.5 px-3 font-medium  transition-transform duration-300 hover:scale-110"><img className='h-5' src={share} alt="share"/></button>
          </div>
          <div className="absolute top-40 right-2 z-10" data-aos="fade-down" data-aos-delay="200">
            <button className="text-white bg-green-500 rounded-lg p-2 px-3 font-medium">For {land.sellOrRent}</button>
          </div>
            <Link to={`/viewproperty/${land.id}`}>
          <div className="relative overflow-hidden h-52" data-aos="fade-up"  data-aos-delay="100"
          >
            {land.imageUrls && land.imageUrls.length > 0 && (
              <img src={land.imageUrls[0]} alt="Property1" className="h-full w-full object-cover flex-auto" />
              //    Ensure the image covers the container 
              
            )}
            
          </div>
        </Link>
        <div className="p-4" data-aos="fade-up" data-aos-delay="100">
          <Link to={`/viewproperty/${land.id}`}>
            <div className="flex justify-around items-center mt-1">
              <p className="font-bold text-left text-green-700 text-2xl">₹{land.price}</p>
              <div className="w-1 h-9 bg-green-400 rounded-lg"></div>
              <p className="text-left text-gray-700">{land.totalArea} {land.propertyAreaUnit}</p>
            </div>
            <h5 className="mt-2 text-2xl font-bold text-left tracking-tight text-gray-900">{land.title}</h5>
            <p className="text-left whitespace-pre-line text-gray-600 pr-7">
              {more ? land.description : land.description.slice(0, 33)}
              <span onClick={() => setMore(!more)} className="text-green-400 cursor-pointer">
                ...Read {more ? "Less" : "More"}
              </span>
            </p>
          </Link>
          <div className="flex justify-between items-center mt-4">
            <a href="#contact">
              <div className="flex bg-blue-600 mx-3 rounded-lg ring-1 ring-blue-600 transition-transform duration-300 transform hover:scale-110">
        <button type="button" class="btn-outline-primary rounded-lg  bg-white p-1 hover:text-blue-600 ">Contact Us
          </button><img className=" m-1 h-7" src={callpng} alt="call"/></div>
            </a>
            <a
              href={`https://wa.me/919902331774?text=${encodeURIComponent(whatsappMessage)}`} >

             <div className="flex bg-green-700 rounded-lg ring-1 ring-green-700 transition-transform duration-300 transform hover:scale-110">
        <button 
          className="btn-outline-success rounded-lg bg-white text-sm p-1 hover:text-green-700 ">
           WhatsApp
        </button><img className=" m-1 mx-2 h-7" src={whatsapp} alt="call"/>
        </div>
            </a>
           
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandItem;
