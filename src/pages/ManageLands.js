// src/pages/ManageLands.js
import LandForm from '../components/LandForm';
import LandList from '../components/LandList';

const ManageLands = () => {

  return (
    <div>
        <h1 className='text-center font-bold text-xl'>Admin Console</h1>
      <LandForm />
      <LandList />
    </div>
  );
};

export default ManageLands;