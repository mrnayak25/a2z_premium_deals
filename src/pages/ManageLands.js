import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBarAdmin from '../components/NavBar_Admin';


const ManageLands = () => {

  return (
    <div>
     
      <NavBarAdmin/>
    
    <Outlet/>
  </div>
  );
};

export default ManageLands;
