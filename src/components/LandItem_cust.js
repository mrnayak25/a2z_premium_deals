import React from 'react';
import styled from 'styled-components';
import whatsapp from "../images/whatsapp.png"

const LandItemWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const LandItem = ({ land}) => (
  <LandItemWrapper className='col-md-4 '>
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-transform duration-300 transform hover:scale-105"  data-aos="fade-left">
        <div className="absolute top-0.1 left-2  z-10" data-aos="fade-down " data-aos-delay="200">
            <button className="text-white bg-green-500 rounded-b-lg p-2 px-3"> For {land.type}</button>
        </div>
        <div className="relative overflow-hidden h-64" data-aos="fade-up" data-aos-delay="100">
          <img src={land.imageUrl} alt={land.title}
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      <div className="p-4" data-aos="fade-up" data-aos-delay="100"> 
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{land.title}</h5>
          <div className="d-flex justify-around">
             <p className="mb-3 font-normal text-gray-700">Price: Rs.{land.price}</p>
             <div className='h-7 w-1 bg-green-500 rounded'></div>
             <p className="mb-3 font-normal text-gray-700"> Size: {land.size}</p>
             </div>
             <p>{land.description}</p>
             <div className='d-flex justify-end mt-2 max-w-full'> 
              <button className='btn btn-outline-primary'>Contact</button>
              <div className=' bg-green-600 p-1 rounded ms-3 hover:bg-green-900'><img className='h-10 w-10' src={whatsapp} alt='whatsapp'/></div>
             </div>
      </div>
    </div>
  </LandItemWrapper>
);

export default LandItem;