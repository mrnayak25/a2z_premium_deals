import React from 'react';
import LandForm from '../components/LandForm';
import LandList from '../components/LandList';
import Footer from '../components/Footer';
import { useAuth } from '../firebase'; // Adjust the path according to your firebase setup
import { Navigate, Outlet, Route, Router, Routes } from 'react-router-dom';
import FeedbackList from '../components/FeedbackList';
import NavBar_Admin from '../components/NavBar_Admin';


const ManageLands = () => {

  return (
    <div>
      <NavBar_Admin/>
    <h1 className='text-center font-bold text-xl'>Admin Console</h1>
    <Outlet/>
  </div>
  );
};

export default ManageLands;
