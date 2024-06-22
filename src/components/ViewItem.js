import React from "react";
import Carousel from "./Carousel";

function ViewItem({ id, land }) {
  const selectedLand = land.find((item) => item.id === id);

  if (!selectedLand) {
    return <div>Property not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row animate__animated animate__fadeIn">
      <div className="lg:w-1/2 p-4">
        <Carousel images={selectedLand.imageUrls || []} />
      </div>
      <div className="lg:w-1/2 p-4 space-y-4 bg-gray-50 shadow-lg rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800">{selectedLand.title}</h1>
        <p className="text-gray-600">{selectedLand.description}</p>
        <h5 className="text-lg text-gray-700">Location: {selectedLand.location}</h5>
        <h5 className="text-lg text-gray-700">Sub-location: {selectedLand.sublocation}</h5>
        <h6 className="text-md text-gray-700">Address: {selectedLand.address}</h6>
        <h3 className="text-2xl font-semibold text-green-600">₹{selectedLand.price}</h3>
        <h4 className="text-lg text-gray-700">Total Area: {selectedLand.size} sq. ft.</h4>
        <button className="btn btn-primary transition-transform duration-300 transform hover:scale-110">Enquire</button>
      </div>
    </div>
  );
}

export default ViewItem;
