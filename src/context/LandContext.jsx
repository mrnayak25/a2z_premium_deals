import React, { createContext, useContext, useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from '../firebase'; // Adjust the import according to your setup
import { useLocation } from 'react-router-dom';

const LandContext = createContext();

export const LandProvider = ({ children }) => {
  const [lands, setLands] = useState([]);
 // const loc = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const landsRef = ref(db, "lands");
    onValue(landsRef, (snapshot) => {
      const landsData = snapshot.val();
      const loadedLands = [];
      for (const id in landsData) {
        if (landsData[id].status === "approved") {
          loadedLands.push({ id, ...landsData[id] });
        }
      }
      setLands(loadedLands);
      setLoading(false);
    });
  }, []); // Adjust dependencies as needed

  return (
    <LandContext.Provider value={{ lands, loading }}>
      {children}
    </LandContext.Provider>
  );
};

export const useLands = () => {
  return useContext(LandContext);
};
