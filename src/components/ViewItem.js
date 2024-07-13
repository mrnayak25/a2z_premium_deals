import React from "react";
import Carousel from "./Carousel";
import NavBar2 from './NavBar2.js'
import callpng from '../images/phone.png'
import whatsapp from '../images/whatsapp_img.png'
import background from '../images/leaves.webp'
import { useNavigate } from "react-router-dom";

function ViewItem({ id, land }) {
  const selectedLand = land.find((item) => item.id === id);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This navigates to the previous page
  };

  if (!selectedLand) {
    return <div>Property not found</div>;
  }

  const whatsappMessage = `
    Hi Sir, I am interested in this property which is listed on your A2zpremiumdeals.com website.
    Details:
    - Title: ${selectedLand.title}
    - Description: ${selectedLand.description}
    - Price: Rs.${selectedLand.price}
    - Owner Name: ${selectedLand.ownerName}
    - Owner Type: ${selectedLand.ownerType}
    - Location: ${selectedLand.location}
    - Sub-location: ${selectedLand.sublocation}
    - Address: ${selectedLand.propertyAddress}, ${selectedLand.sublocation}, ${selectedLand.propertyCity}, ${selectedLand.propertyState}, ${selectedLand.zipCode}
    - Property Type: ${selectedLand.propertyType}
    - Total Area: ${selectedLand.totalArea} ${selectedLand.propertyAreaUnit}
    - Sell or Rent: ${selectedLand.sellOrRent}
    - State: ${selectedLand.state}
    - Zip Code: ${selectedLand.zipCode}
  `;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919902331774/?text=${message}`);
  };

  return (
    <div styles={{ backgroundImage:`url(${background})`}}>
      <button className="btn btn-outline-danger absolute top-4 left-6"onClick={handleBack}><i class="fa-solid fa-arrow-left"></i></button>
      <h1 className="font-bold p-4">Property Details</h1>
      <h1 className="text-2xl font-bold text-gray-800 ">{selectedLand.title}</h1>
        <p className="text-gray-600 text-lg">{selectedLand.description}</p>
    <div className="flex my-4 bg-transparent flex-col lg:flex-row items-center justify-around animate__animated animate__fadeIn">
      <div className="w-100 lg:w-1/2 ">
        <Carousel images={selectedLand.imageUrls || []} />
      </div>
      <div className="w-100 lg:w-1/2 px-4 space-y-6 ">
        
        <div className="space-y-3">
          <div className="flex justify-start ">
            <h5 className="text-lg font-bold text-gray-700 mx-3">Location:</h5>
            <p className="text-gray-600">{selectedLand.location}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 mx-3">Sub-location:</h5>
            <p className="text-gray-600">{selectedLand.sublocation}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 mx-3">Address:</h5>
            <p className="text-gray-600">{selectedLand.propertyCity}, {selectedLand.propertyState}, {selectedLand.zipCode}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 mx-3">Price:</h5>
            <p className="text-gray-600">₹{selectedLand.price}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 mx-3">Property Type:</h5>
            <p className="text-gray-600">{selectedLand.propertyType}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-32">Total Area:</h5>
            <p className="text-gray-600">{selectedLand.totalArea} {selectedLand.propertyAreaUnit}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 mx-3">For Sell or Rent:</h5>
            <p className="text-gray-600">{selectedLand.sellOrRent}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 mx-3">State:</h5>
            <p className="text-gray-600">{selectedLand.state}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 mx-3">Zip Code:</h5>
            <p className="text-gray-600">{selectedLand.zipCode}</p>
          </div>
        </div> <div className="d-flex justify-around ">
          <div className="flex bg-blue-600 mx-3 rounded-lg p-1 transition-transform duration-300 transform hover:scale-110">
        <button type="button" class="btn btn-outline-primary bg-white font-bold text-xs md:text-lg hover:text-blue-600 ">Contact Us
          </button><img className="mx-2 w-7" src={callpng} alt="call"/></div>
       <div className="flex bg-green-700 rounded-lg p-1 transition-transform duration-300 transform hover:scale-110">
        <button 
          onClick={handleWhatsAppClick} 
          className="btn btn-outline-success text-xs md:text-lg bg-white font-bold  hover:text-green-700 ">
          Chat on WhatsApp
        </button><img className="mx-2 w-7" src={whatsapp} alt="call"/>
        </div>
        </div>
       
      </div>
    </div>
   
    </div>
  );
}

export default ViewItem;
