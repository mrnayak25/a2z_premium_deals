import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, onValue, update } from 'firebase/database';
import LandItem from "./LandItem";
import Loading from "./Loading";
//import ViewItem_owner from "../components/ViewItem_owner";

const LandList = (props) => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
 // const [selectedLandId, setSelectedLandId] = useState(null);

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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto px-4 my-10 ">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {lands.map((land) => (
        <LandItem key={land.id} land={land}  handleStatusChange={handleStatusChange} setId={props.setId}/>
          ))}
        </div>
      </div>

      {/* {selectedLandId && (
        <ViewItem_owner
          id={selectedLandId}
          land={lands}
          setLands={setLands}
          setSelectedLandId={setSelectedLandId}
        />
      )} */}
    </>
  );
};

export default LandList;
