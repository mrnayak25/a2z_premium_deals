import React, { useEffect, useState} from "react";
import { ref, onValue} from "firebase/database";
import { db } from "../firebase";
import LandItem from "./LandItem_cust";
import Loading from "./Loading";

function LandList (props) {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const landsRef = ref(db, "lands");
    onValue(landsRef, (snapshot) => {
      const landsData = snapshot.val();
      const loadedLands = [];
      for (const id in landsData) {
        loadedLands.push({ id, ...landsData[id] });
      }
      setLands(loadedLands);
      props.setLand(loadedLands);
      setLoading(false);
    });
  }, []);


  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1 id='property' className="text-4xl font-extrabold m-7">Properties</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {lands.map((land) => (
            <div key={land.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <LandItem land={land} setId={props.setId} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandList;
