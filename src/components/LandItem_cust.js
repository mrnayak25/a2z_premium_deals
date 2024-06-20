import {React,useState} from 'react';
import contact from "../images/contact.png";
import whatsapp from "../images/whatsapp.png";

const LandItem = ({ land }) => {

  const[more,setMore]=useState(false);

  // Create the WhatsApp message
  const whatsappMessage = `
Hi Sir, I am interested in this property which is listed on your jobhunt4u.in website.
Details:
- Title: ${land.title}
- Description: ${land.description}
- Price: Rs.${land.price}
  `;

  return (
    <div className="col-md-4 object-cover transition-transform duration-300 transform hover:scale-105" id='property'>
      <div className="relative max-w-sm bg-white border transition-transform duration-300 transform hover:scale-105 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden" data-aos="fade-left">
        <div className="absolute top-0.1 left-2 z-10" data-aos="fade-down" data-aos-delay="200">
          <button className="text-white bg-green-500 rounded-b-lg p-2 px-3 font-medium">For {land.type}</button>
        </div>
        <div className="relative overflow-hidden h-64 transition-transform duration-300 transform hover:scale-110" data-aos="fade-up" data-aos-delay="100">
          <img src={land.imageUrl} alt={land.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4" data-aos="fade-up" data-aos-delay="100">
          <div className="flex justify-around items-center mt-1">
            <p className="font-bold text-left text-green-700 text-2xl">₹{land.price}</p>
            <div className='w-1 h-9 bg-green-400 rounded-lg'></div>
            <p className="text-left text-gray-700">{land.size}</p>
          </div>
          <h5 className="mt-2 text-2xl font-bold text-left tracking-tight text-gray-900">{land.title}</h5>
          <p className="text-left whitespace-pre-line text-gray-600">{more? land.description : land.description.slice(0, 55) }<p onClick={()=>{more?setMore(false):setMore(true)}} className='text-green-400'>...Read {more?'Less':'More'}</p></p>


          <div className="flex justify-between items-center mt-4">
            <a href="#contact" className="p-1 rounded ms-3 object-cover transition-transform duration-300 transform hover:scale-110">
              <img className="h-auto w-auto" src={contact} alt="Contact Now" />
            </a>
            <a
              href={`https://wa.me/919902331774?text=${encodeURIComponent(whatsappMessage)}`}
              className="p-1 rounded ms-3 object-cover transition-transform duration-300 transform hover:scale-110"
            >
              <img className="h-auto w-auto" src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandItem;
