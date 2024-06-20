import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const LandItemWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const LandItem = ({ land, deleteLand, editLand }) => (
  <LandItemWrapper className='col-md-4 '>
    <div className="relative max-w-sm bg-white border transition-transform duration-300 transform hover:scale-105 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <button className="text-white bg-green-500 rounded-lg p-2">For {land.type}</button>
        </div>
      <div className="absolute top-2 right-2 z-10 flex space-x-2">
        <button onClick={() => editLand(land)} className="text-white bg-blue-500 p-2 rounded hover:bg-blue-600">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={() => deleteLand(land.id)} className="text-white bg-red-500 p-2 rounded hover:bg-red-600">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
        <div className="relative overflow-hidden h-64">
          <img
            src={land.imageUrl}
            alt={land.title}
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      <div className="p-4">
        
      <div className="flex justify-between items-center mt-1">
            <p className="font-bold text-left text-green-700 text-2xl">₹{land.price}</p>
            <p className="text-left text-gray-700">Size: {land.size}</p>
          </div>
          <h5 className="mt-2 text-2xl font-extrabold text-left tracking-tight text-gray-900">{land.title}</h5>
          <p className="text-left whitespace-pre-line text-gray-600">{land.description}</p>
      </div>
    </div>
  </LandItemWrapper>
);

export default LandItem;