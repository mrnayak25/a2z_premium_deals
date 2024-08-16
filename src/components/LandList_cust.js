import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import LandItem from "./LandItem_cust";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { useProperty } from "./PropertyContext";

const LandList = (props) => {
  const [lands, setLands] = useState([]);
  const [filteredLands, setFilteredLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState("all");
  const [sellOrRent, setSellOrRent] = useState("all");
  const { propertyType, setPropertyType } = useProperty();
  const [itemsToShow, setItemsToShow] = useState(9); // Initial number of items to display
  const loc = useLocation();
  const [isRotated, setIsRotated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  }, [loc.key]);

  useEffect(() => {
    const queryParams = new URLSearchParams(loc.search);
    const type = queryParams.get("type");
    if (type) {
      setPropertyType(type);
    }
  }, [loc.search]);

  useEffect(() => {
    filterLands();
  }, [lands, priceRange, sellOrRent, propertyType, props.location]);

  const filterLands = () => {
    const filtered = lands.filter((land) => {
      const price = parseInt(land.price, 10);
      const [minPrice, maxPrice] = priceRange !== "all" ? priceRange.split("-").map((p) => parseInt(p, 10)) : [0, Infinity];
      return (
        price >= minPrice &&
        (maxPrice ? price <= maxPrice : true) &&
        (sellOrRent === "all" || land.sellOrRent.toLowerCase() === sellOrRent.toLowerCase()) &&
        (propertyType === "all" || land.propertyType.toLowerCase() === propertyType.toLowerCase()) &&
        (props.location === "" || land.location.toLowerCase().includes(props.location.toLowerCase())) // Filter by location
      );
    });
    setFilteredLands(filtered);
    props.setLand(filtered); // Update the filtered lands in the parent component if needed
  };

  if (loading) {
    return <Loading />;
  }

  const handleViewMore = () => {
    setItemsToShow(itemsToShow + 8); // Increment the number of items to show
  };

  const handleViewLess = () => {
    setItemsToShow(8); // Reset to initial number of items to show
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div id="properties" className="flex flex-row md:flex-row justify-between items-center align-baseline md:items-end m-4 md:m-7 space-y-4 md:space-y-0">
        {/* Text section */}
        <div className="flex flex-col ms-4 md:ms-20 text-left md:text-start font-roboto">
          <span className="text-lg md:text-xl text-orange-500">Best Choices</span>
          <span className="text-2xl md:text-4xl text-sky-900 font-semibold">Popular Properties</span>
        </div>

        {/* Filter section */}
        <div className="md:flex flex-row overflow-x-hidden justify-center items-center align-middle text-center space-y-4 md:space-y-0 md:space-x-4">
          {/* PC Filter: Simple Select */}
          <div className="hidden md:flex space-x-2">
            <select
              id="price"
              className="p-2 border border-gray-300 rounded max-w-full md:max-w-fit m-2"
              onChange={(e) => setPriceRange(e.target.value)}
              value={priceRange}
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
              className="p-2 border border-gray-300 rounded max-w-full md:max-w-fit m-2"
              onChange={(e) => setSellOrRent(e.target.value)}
              value={sellOrRent}
            >
              <option value="all">Buy | Rent | Lease</option>
              <option value="sell">Buy</option>
              <option value="rent">Rent</option>
              <option value="lease">Lease</option>
            </select>

            <select
              id="propertyType"
              className="p-2 border border-gray-300 rounded max-w-full md:max-w-fit m-2"
              onChange={(e) => setPropertyType(e.target.value)}
              value={propertyType}
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

          {/* Mobile Filter: Modal Button */}
          <div className="md:hidden flex justify-center items-center mt-4">
            <button
              onClick={handleModalOpen}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Filter
            </button>
          </div>

          {/* Refresh button */}
          <div className="flex justify-center items-center mt-4 md:mt-0 hidden md:flex">
            <i
              className={`fa-solid fa-arrows-rotate text-xl text-orange-500 mx-2 md:mx-4 font-bold transition-transform duration-500 ease-in-out ${isRotated ? 'rotate-360' : ''}`}
              onClick={() => {
                props.setLocation("");
                setFilteredLands(lands);
                setIsRotated(true);
                setPriceRange("all");
                setSellOrRent("all");
                setPropertyType("all");
                setTimeout(() => setIsRotated(false), 500); // Reset rotation after animation
              }}
            ></i>
          </div>

        </div>

        {/* Mobile Modal for Filters */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-xl font-semibold mb-4">Filter Properties</h3>
              <select
                id="modalPrice"
                className="p-2 border border-gray-300 rounded w-full mb-4"
                onChange={(e) => setPriceRange(e.target.value)}
                value={priceRange}
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
                id="modalSellOrRent"
                className="p-2 border border-gray-300 rounded w-full mb-4"
                onChange={(e) => setSellOrRent(e.target.value)}
                value={sellOrRent}
              >
                <option value="all">Buy | Rent | Lease</option>
                <option value="sell">Buy</option>
                <option value="rent">Rent</option>
                <option value="lease">Lease</option>
              </select>

              <select
                id="modalPropertyType"
                className="p-2 border border-gray-300 rounded w-full mb-4"
                onChange={(e) => setPropertyType(e.target.value)}
                value={propertyType}
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

              <div className="flex justify-between">
                <button
                  onClick={handleModalClose}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setPriceRange("all");
                    setSellOrRent("all");
                    setPropertyType("all");
                    handleModalClose();
                  }}
                  className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      <div className="container mx-auto px-4 transition-all duration-500 ease-in-out transform mb-5">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLands.slice(0, itemsToShow).map((land) => (
            <LandItem key={land.id} land={land} setId={props.setId} index={filteredLands.indexOf(land) + 1} />
          ))}
        </div>
        <div className="w-auto h-1 mx-20 mt-4 shadow-xl shadow-orange-400 rounded-full bg-orange-500 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="200"></div>
        {filteredLands.length > itemsToShow && (
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-orange-500 rounded-b-xl border-t-0 text-white hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="300" onClick={handleViewMore}>
              <i className="fa-solid fa-angle-down mr-1"></i> View More
            </button>
          </div>
        )}
        {itemsToShow > 9 && (
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-orange-500 rounded-b-xl border-t-0 text-white hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="300" onClick={handleViewLess}>
              <i className="fa-solid fa-angle-up mr-1"></i> View Less
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LandList;
