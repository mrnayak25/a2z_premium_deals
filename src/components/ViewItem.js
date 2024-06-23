import React from "react";
import Carousel from "./Carousel";

function ViewItem({ id, land }) {
  const selectedLand = land.find((item) => item.id === id);

  if (!selectedLand) {
    return <div>Property not found</div>;
  }

  const whatsappMessage = `
    Hi Sir, I am interested in this property which is listed on your jobhunt4u.in website.
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
    <div className="flex flex-col lg:flex-row items-center justify-around animate__animated animate__fadeIn">
      <div className="lg:w-1/2 p-4">
        <Carousel images={selectedLand.imageUrls || []} />
      </div>
      <div className="lg:w-1/2 p-4 space-y-4 bg-gray-50 shadow-lg rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800">{selectedLand.title}</h1>
        <p className="text-gray-600">{selectedLand.description}</p>
        <div className="flex flex-col">
          
          <div className="flex justify-normal items-center">
            <h5 className="text-lg font-bold text-gray-700">Location:</h5>
            <p>{selectedLand.location}</p>
          </div>
          <div className="flex justify-normal items-center">
            <h5 className="text-lg font-bold text-gray-700">Sub-location:</h5>
            <p>{selectedLand.sublocation}</p>
          </div>
          <div className="flex justify-normal items-center">
            <h5 className="text-lg font-bold text-gray-700">Address:</h5>
            <p> {selectedLand.propertyCity}, {selectedLand.propertyState}, {selectedLand.zipCode}</p>
          </div>
          <div className="flex justify-normal items-center">
            <h5 className="text-lg font-bold text-gray-700">Price:</h5>
            <p>₹{selectedLand.price}</p>
          </div>
          <div className="flex justify-normal items-center">
            <h5 className="text-lg font-bold text-gray-700">Property Type:</h5>
            <p>{selectedLand.propertyType}</p>
          </div>
          <div className="flex justify-normal items-center">
            <h5 className="text-lg font-bold text-gray-700">Total Area:</h5>
            <p>{selectedLand.totalArea} {selectedLand.propertyAreaUnit}</p>
          </div>
          <div className="flex justify-normal items-center">
            <h5 className="text-lg font-bold text-gray-700">For Sell or Rent:</h5>
            <p>{selectedLand.sellOrRent}</p>
          </div>
          <div className="flex justify-normal items-center">
            <h5 className="text-lg font-bold text-gray-700">State: </h5>
            <p>{selectedLand.state}</p>
          </div>
          <div className="flex justify-normal items-center">
            <h5 className="text-lg font-bold text-gray-700">Zip Code:<n/> </h5>
            <p>{selectedLand.zipCode}</p>
          </div>
        </div>
        <button onClick={handleWhatsAppClick} className="btn btn-primary transition-transform duration-300 transform hover:scale-110">Contact on WhatsApp</button>
      </div>
    </div>
  );
}

export default ViewItem;
