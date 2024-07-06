import React from "react";
import Carousel from "./Carousel.js";

function ViewItem_owner({ id, land }) {
  if (!land || !id) {
    return <div>Loading...</div>;
  }

  const selectedLand = land.find((item) => item.id === id);

  if (!selectedLand) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <h1 className="font-bold p-4">Property Details</h1>
      <hr />
      <div className="flex flex-col lg:flex-row items-center justify-around animate__animated animate__fadeIn p-6 my-5 ">
        <div className="w-100 lg:w-1/2 ">
          <Carousel images={selectedLand.imageUrls || []} />
        </div>
        <div className="w-100 lg:w-1/2 p-4 space-y-6 bg-white shadow-lg rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-2xl font-bold text-gray-800 ">{selectedLand.title}</h1>
          <p className="text-gray-600 text-lg">{selectedLand.description}</p>
          <div className="space-y-3">
            <div className="flex justify-start items-center">
              <h5 className="text-lg font-bold text-gray-700 w-1/3">Owner Name:</h5>
              <p className="text-gray-600">{selectedLand.ownerName}</p>
            </div>
            <div className="flex justify-start items-center">
              <h5 className="text-lg font-bold text-gray-700 w-1/3">Owner Type:</h5>
              <p className="text-gray-600">{selectedLand.ownerType}</p>
            </div>
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
              <p className="text-gray-600">{selectedLand.propertyAddress}, {selectedLand.sublocation}, {selectedLand.propertyCity}, {selectedLand.propertyState}, {selectedLand.zipCode}</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewItem_owner;
