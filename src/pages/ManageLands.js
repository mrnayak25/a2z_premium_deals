import React from 'react';
import LandForm from '../components/LandForm';
import LandList from '../components/LandList';
import Footer from '../components/Footer';
import { useAuth } from '../firebase'; // Adjust the path according to your firebase setup
import { Navigate } from 'react-router-dom';


const ManageLands = () => {

    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
      try {
        await logout();
        Navigate('/a2z-admin');
      } catch (error) {
        console.error('Failed to log out', error);
      }
    };
  return (
    <div>
    <h1 className='text-center font-bold text-xl'>Admin Console</h1>
    <img src='https://cdn2.iconfinder.com/data/icons/interface-essentials-1-2/24/logout--logout-frame-leave-exit-arrow-right-circle-512.png' alt='logout' className='float-right h-7' onClick={handleLogout} />
    
    <LandForm />
    <LandList />
  </div>
  );
};

export default ManageLands;
