import React, { useState } from "react";
import { ref, set, push } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import Loading from "./Loading"; // Import the Loading component

const LandForm = () => {
  const [land, setLand] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    size: "",
    image: null,
    type: "Sale", // Default value for the type of land
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLand({ ...land, [name]: value });
  };

  const handleFileChange = (e) => {
    setLand({ ...land, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (land.image) {
      setLoading(true); // Set loading to true when the upload starts
      try {
        const imageStorageRef = storageRef(storage, `land_images/${land.image.name}`);
        await uploadBytes(imageStorageRef, land.image);
        const imageUrl = await getDownloadURL(imageStorageRef);

        const landData = {
          title: land.title,
          description: land.description,
          price: land.price,
          location: land.location,
          size: land.size,
          imageUrl,
          type: land.type, // Include the type of land
        };

        const newLandRef = push(ref(db, "lands"));
        await set(newLandRef, landData);
        setLand({ title: "", description: "", price: "", location: "", size: "", image: null, type: "Sale" });
        setError("");
      } catch (error) {
        console.error("Error adding document: ", error);
        setError("Error adding document");
      } finally {
        setLoading(false); // Set loading to false when the upload completes
      }
    } else {
      setError("Please upload an image.");
    }
  };

  return (
    <div className="d-flex justify-center">
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded mt-10 w-50 p-3">
          <div className="">
            <h1 className="text-white text-center text-xl block font-medium">Add Information</h1>
            <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Land Name
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={land.title}
              onChange={handleChange}
              placeholder="Land Name"
              required
            />
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={land.description}
              onChange={handleChange}
              placeholder="Description"
              required
            />
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={land.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={land.location}
              onChange={handleChange}
              placeholder="Location"
              required
            />
            <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Size 
            </label>
            <input
              type="text"
              name="size"
              id="size"
              className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={land.size}
              onChange={handleChange}
              placeholder="Size in acres"
              required
            />
            <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Type
            </label>
            <div className="flex justify-around mb-3">
              <div className="flex items-center">
                <input
                  id="Sale"
                  type="radio"
                  value="Sale"
                  name="type"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  checked={land.type === "Sale"}
                  onChange={handleChange}
                />
                <label htmlFor="Sale" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Sale
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="rent"
                  type="radio"
                  value="rent"
                  name="type"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  checked={land.type === "rent"}
                  onChange={handleChange}
                />
                <label htmlFor="rent" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Rent
                </label>
              </div>
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">
              Upload Image
            </label>
            <input
              className="block w-full text-sm mb-3 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="image_help"
              id="image"
              type="file"
              onChange={handleFileChange}
            />
            {error && <div className="text-red-600">{error}</div>}
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 hover:ring-4 hover:text-black focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Add Land
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LandForm;
