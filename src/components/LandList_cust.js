import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import LandItem from "./LandItem_cust";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

function LandList(props) {
  const [lands, setLands] = useState([]);
  const [filteredLands, setFilteredLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState("all");
  const [sellOrRent, setSellOrRent] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

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
        <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-3">
          <select
            id="price"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setPriceRange(e.target.value)}
          ><option value="all" disabled>Price</option>
            <option value="all">All</option>
            <option value="0-50000">0-50000</option>
            <option value="50001-100000">50001-100000</option>
            <option value="100001-200000">100001-200000</option>
            <option value="200001-500000">200001-500000</option>
            <option value="500001-">more</option>
          </select>
          <select
            id="sellOrRent"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setSellOrRent(e.target.value)}
          > <option value="all" disabled>Buy | Rent | Lease</option>
            <option value="sell">Buy</option>
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
          </select>
          <select
            id="propertyType"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setPropertyType(e.target.value)}
          > <option value="" disabled>Property Type</option>
            <option value="all">All</option>
            <option value="Agricultural Land">Agricultural Land</option>
            <option value="Farm Land">Farm Land</option>
            <option value="Farms">Farms</option>
            <option value="Residential Apartment">Residential Apartment</option>
            <option value="Flats">Flats</option>
            <option value="Independent House">Independent House</option>
            <option value="Villa">Villa</option>
            <option value="Residential Land">Residential Land</option>
            <option value="Residential Layouts">Residential Layouts</option>
            <option value="Studio Apartment">Studio Apartment</option>
            <option value="New Projects">New Projects</option>
            <option value="Commercial Buildings">Commercial Buildings</option>
            <option value="Business Centers">Business Centers</option>
            <option value="Office Spaces">Office Spaces</option>
            <option value="Commercial Land">Commercial Land</option>
            <option value="Industrial Lands">Industrial Lands</option>
            <option value="Plots">Plots</option>
            <option value="Sheds">Sheds</option>
            <option value="Warehouse">Warehouse</option>
            <option value="Go Down">Go Down</option>
            <option value="Rentals">Rentals</option>
            <option value="Resorts">Resorts</option>
            <option value="Hotels">Hotels</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {filteredLands.map((land) => (
            <div key={land.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <LandItem land={land} setId={props.setId} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LandList;
