import React from "react";
import Carousel from "./Carousel";
import NavBar2 from './NavBar2.js'

function ViewItem({ id, land }) {
  const selectedLand = land.find((item) => item.id === id);

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
    <>
      <NavBar2/>
      <h1 className="font-bold p-4">Property Details</h1>
      <hr></hr>
    <div className="flex flex-col lg:flex-row items-center justify-around animate__animated animate__fadeIn p-6 bg-gray-100 min-h-screen">
      <div className="w-100 lg:w-1/2 ">
        <Carousel images={selectedLand.imageUrls || []} />
      </div>
      <div className="w-100 lg:w-1/2 p-4 space-y-6 bg-white shadow-lg rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-2xl font-bold text-gray-800 ">{selectedLand.title}</h1>
        <p className="text-gray-600 text-lg">{selectedLand.description}</p>
        <div className="space-y-3">
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-1/3">Location:</h5>
            <p className="text-gray-600">{selectedLand.location}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-1/3">Sub-location:</h5>
            <p className="text-gray-600">{selectedLand.sublocation}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-1/3">Address:</h5>
            <p className="text-gray-600">{selectedLand.propertyCity}, {selectedLand.propertyState}, {selectedLand.zipCode}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-1/3">Price:</h5>
            <p className="text-gray-600">₹{selectedLand.price}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-1/3">Property Type:</h5>
            <p className="text-gray-600">{selectedLand.propertyType}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-1/3">Total Area:</h5>
            <p className="text-gray-600">{selectedLand.totalArea} {selectedLand.propertyAreaUnit}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-1/3">For Sell or Rent:</h5>
            <p className="text-gray-600">{selectedLand.sellOrRent}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-1/3">State:</h5>
            <p className="text-gray-600">{selectedLand.state}</p>
          </div>
          <div className="flex justify-start items-center">
            <h5 className="text-lg font-bold text-gray-700 w-1/3">Zip Code:</h5>
            <p className="text-gray-600">{selectedLand.zipCode}</p>
          </div>
        </div>
        <button 
          onClick={handleWhatsAppClick} 
          className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg font-bold transition-transform duration-300 transform hover:scale-110 hover:bg-green-600"
        >
          Chat on WhatsApp
        </button>
      </div>
    </div>
   
    </>
  );
}

export default ViewItem;
