import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBarAdmin from '../components/NavBar_Admin';


const ManageLands = () => {

  return (
    <div>
      <NavBarAdmin/>
    <h1 className='text-center font-bold text-xl'>Admin Console</h1>
    <Outlet/>
  </div>
  );
};

export default ManageLands;
