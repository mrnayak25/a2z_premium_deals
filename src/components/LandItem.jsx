import React from 'react';
import { Link } from 'react-router-dom';

// LandItem.js
const LandItem = ({ land, deleteLand, editLand, handleStatusChange, setId }) => (
  <div className="object-cover transition-transform duration-300 transform hover:scale-105">
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      {/* Sale or Rent Badge */}
      <div className="absolute top-2 left-2 z-10">
        <button className="text-white bg-green-600 px-3 py-1 rounded-full text-sm">
          For {land.sellOrRent}
        </button>
      </div>

      {/* Image Link */}
      <Link to="/a2z-admin/viewproperty_owner" onClick={() => setId(land.id)}>
        <div className="relative overflow-hidden h-52">
          {land.imageUrls && land.imageUrls.length > 0 ? (
            <img src={land.imageUrls[0]} alt="Property" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              <span className="text-gray-400">No Image Available</span>
            </div>
          )}
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-6">
        <Link to="/a2z-admin/viewproperty_owner" onClick={() => setId(land.id)}>
          {/* Price and Area */}
          <div className="flex justify-between items-center mt-1">
            <p className="font-bold text-xl text-green-700">₹{land.price.toLocaleString()}</p>
            <div className="w-1 h-9 bg-green-400 rounded-lg"></div>
            <p className="text-gray-500">{land.totalArea} {land.propertyAreaUnit}</p>
          </div>

          {/* Title and Description */}
          <h5 className="mt-3 text-xl font-extrabold text-gray-900 ">{land.title}</h5>
          <p className="mt-1 text-sm text-gray-600 line-clamp-3">{land.description}</p>

          {/* Status */}
          <h2 className="mt-3 font-semibold text-sm text-white bg-blue-500 px-3 py-1 rounded-full inline-block">
            Status: {land.status}
          </h2>
        </Link>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between space-x-2">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors duration-300"
            onClick={() => handleStatusChange(land.id, 'approved')}
          >
            Approve
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors duration-300"
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
