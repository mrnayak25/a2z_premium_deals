import React from 'react';
import { Link } from 'react-router-dom';

// LandItem.js
const LandItem = ({ land, deleteLand, editLand, handleStatusChange, setId }) => (
  <div className="object-cover transition-transform duration-300 transform hover:scale-105">
    <div className="relative max-w-sm bg-white border transition-transform duration-300 transform hover:scale-105 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <button className="text-white bg-green-500 rounded-lg p-2">For {land.sellOrRent}</button>
      </div>
      <Link to="/a2z-admin/viewproperty_owner" onClick={() => setId(land.id)}>
        <div className="relative overflow-hidden h-52">
          {land.imageUrls && land.imageUrls.length > 0 && (
            <img src={land.imageUrls[0]} alt="Property1" className="property-image" />
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to="/a2z-admin/viewproperty_owner" onClick={() => setId(land.id)}>
          <div className="flex justify-between items-center mt-1">
            <p className="font-bold text-left text-green-700 text-2xl">₹{land.price}</p>
            <div className="w-1 h-9 bg-green-400 rounded-lg"></div>
            <p className="text-left text-gray-700">{land.totalArea} {land.propertyAreaUnit}</p>
          </div>
          <h5 className="mt-2 text-2xl font-extrabold text-left tracking-tight text-gray-900">{land.title}</h5>
          <p className="text-left whitespace-pre-line text-gray-600">{land.description}</p>
          <h2 className=" font-semibold whitespace-pre-line text-black bg-blue-200 rounded p-1 m-1">Status :{land.status}</h2>
        </Link>
        <div className="flex justify-between">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => handleStatusChange(land.id, 'approved')}
          >
            Approve
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => handleStatusChange(land.id, 'declined')}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LandItem;
