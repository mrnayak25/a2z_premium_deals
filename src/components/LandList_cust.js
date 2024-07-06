// src/components/LandList.js
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import LandItem from "./LandItem_cust";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { useProperty } from './PropertyContext';

function LandList(props) {
  const [lands, setLands] = useState([]);
  const [filteredLands, setFilteredLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState("all");
  const [sellOrRent, setSellOrRent] = useState("all");
  const { propertyType, setPropertyType } = useProperty();

  const location = useLocation();

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
  }, [location.key]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");
    if (type) {
      setPropertyType(type);
    }
  }, [location.search]);

  useEffect(() => {
    filterLands();
  }, [lands, priceRange, sellOrRent, propertyType]);

  const filterLands = () => {
    const filtered = lands.filter((land) => {
      const price = parseInt(land.price, 10);
      const [minPrice, maxPrice] = priceRange !== "all" ? priceRange.split("-").map((p) => parseInt(p, 10)) : [0, Infinity];
      return (
        price >= minPrice &&
        (maxPrice ? price <= maxPrice : true) &&
        (sellOrRent === "all" || land.sellOrRent.toLowerCase() === sellOrRent.toLowerCase()) &&
        (propertyType === "all" || land.propertyType.toLowerCase() === propertyType.toLowerCase())
      );
    });
    setFilteredLands(filtered);
    props.setLand(filtered); // Update the filtered lands in the parent component if needed
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center md:items-end m-7 space-y-4 md:space-y-0">
        <h1 id="property" className="text-4xl font-semibold">
          Properties
        </h1>
        <div className="flex flex-row md:flex-row justify-normal space-y-0  md:space-y-0 space-x-3 overflow-hidden">
          <select
            id="price"
            className="p-1 border border-gray-300 rounded max-w-32"
            onChange={(e) => setPriceRange(e.target.value)}
          >
       
            <option value="all">All Price</option>
            <option value="0-500000">Below 5 Lakhs</option>
            <option value="500000-1000000">5 Lakhs to 10 Lakhs</option>
            <option value="1000000-2000000">10 Lakhs to 20 Lakhs</option>
            <option value="2000000-5000000">20 Lakhs to 50 Lakhs</option>
            <option value="5000000-10000000">50 Lakhs to 1 Crore</option>
            <option value="10000000">Above 1 Crore</option>
          </select>
          <select
            id="sellOrRent"
            className="p-1 border border-gray-300 rounded "
            onChange={(e) => setSellOrRent(e.target.value)}
          >
            <option value="all">Buy | Rent | Lease</option>
            <option value="sell">Buy</option>
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
          </select>
          <select
            id="propertyType"
            className="p-1 border border-gray-300 rounded max-w-40"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="all">All Property Type</option>
            <option value="agricultural land">Agricultural Land</option>
            <option value="commercial land">Commercial Land</option>
            <option value="commercial buildings">Commercial Buildings</option>
            <option value="independent house">Independent House</option>
            <option value="farm land">Farm Land</option>
            <option value="plots">Plots</option>
            <option value="residential land">Residential Land</option>
            <option value="residential layouts">Residential Layouts</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto px-4 ">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredLands.map((land) => (
            <LandItem key={land.id} land={land} setId={props.setId} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LandList;
