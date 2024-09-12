import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, onValue, update } from 'firebase/database';
import LandItem from './LandItem';
import Loading from './Loading';

const LandList = (props) => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [filters, setFilters] = useState({
    title: '',
    ownerName: '',
    sellOrRent: '',
    location: '',
    propertyType: '',
    totalArea: '',
    propertyAddress: ''
  });

  useEffect(() => {
    const landRef = ref(db, 'lands');
    onValue(landRef, (snapshot) => {
      const lands = [];
      snapshot.forEach((childSnapshot) => {
        const land = {
          id: childSnapshot.key,
          ...childSnapshot.val()
        };
        lands.push(land);
      });
      setLands(lands);
      setLoading(false);
      props.setLand(lands);
    });
    // eslint-disable-next-line
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await update(ref(db, `lands/${id}`), { status });
      alert('Status updated successfully!');
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredLands = lands.filter((land) => {
    return (
      (!filters.title || land.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (!filters.ownerName || land.ownerName.toLowerCase().includes(filters.ownerName.toLowerCase())) &&
      (!filters.sellOrRent || land.sellOrRent.toLowerCase().includes(filters.sellOrRent.toLowerCase())) &&
      (!filters.location || land.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.propertyType || land.propertyType.toLowerCase().includes(filters.propertyType.toLowerCase())) &&
      (!filters.totalArea || land.totalArea.toString().includes(filters.totalArea)) &&
      (!filters.propertyAddress || land.propertyAddress.toLowerCase().includes(filters.propertyAddress.toLowerCase()))
    );
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto px-4 my-10">
        {/* Filter Inputs */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Filter by Title"
            value={filters.title}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="ownerName"
            placeholder="Filter by Owner Name"
            value={filters.ownerName}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="sellOrRent"
            placeholder="Filter by Sell or Rent"
            value={filters.sellOrRent}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="location"
            placeholder="Filter by Location"
            value={filters.location}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="propertyType"
            placeholder="Filter by Property Type"
            value={filters.propertyType}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="totalArea"
            placeholder="Filter by Total Area"
            value={filters.totalArea}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="propertyAddress"
            placeholder="Filter by Property Address"
            value={filters.propertyAddress}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Display Lands */}
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLands.map((land) => (
            <LandItem key={land.id} land={land} handleStatusChange={handleStatusChange} setId={props.setId} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LandList;
