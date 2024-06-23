import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBarAdmin from '../components/NavBar_Admin';


const ManageLands = () => {

  return (
    <div>
      <h1 className='text-center font-bold text-xl bg-blue-500 p-1 mb-4'>Admin Console</h1>
      <NavBarAdmin/>
    
    <Outlet/>
  </div>
  );
};

export default ManageLands;
