import React from 'react';
import LandForm from '../components/LandForm';
import LandList from '../components/LandList';
import { useAuth } from '../firebase'; // Adjust the path according to your firebase setup
import { Navigate } from 'react-router-dom';


const ManageLands = () => {

    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
      try {
        await logout();
        Navigate('/manage-lands');
      } catch (error) {
        console.error('Failed to log out', error);
      }
    };
  return (
    <div>
    <h1 className='text-center font-bold text-xl'>Admin Console</h1>
    <img src='/path-to-logout-image' alt='logout' className='float-right' onClick={handleLogout} />
    <LandForm />
    <LandList />
  </div>
  );
};

export default ManageLands;
