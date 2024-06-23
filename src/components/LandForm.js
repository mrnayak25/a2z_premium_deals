import React, { useState } from "react";
import { ref, set, push } from "firebase/database";
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import Loading from "./Loading"; // Import the Loading component

const LandForm = () => {
  const [land, setLand] = useState({
    ownerType: "Individual",
    ownerName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "Karnataka",
    zipCode: "",
    contactNumber: "",
    sellOrRent: "SELL",
    location: "",
    sublocation: "",
    propertyAddress: "",
    propertyCity: "",
    propertyState: "Karnataka",
    propertyZipCode: "",
    propertyType: "",
    totalArea: "",
    price: "",
    title: "",
    description: "",
    images: [], // Array to hold selected images
    imageUrls: [], // Array to hold image download URLs after upload
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLand({ ...land, [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const imageArray = [];
    const allowedTypes = ["image/jpeg", "image/png"]; // Define allowed image types
    for (let i = 0; i < files.length; i++) {
      if (allowedTypes.includes(files[i].type)) {
        imageArray.push(files[i]);
      } else {
        // Handle error for invalid file type (if needed)
        console.warn(`File ${files[i].name} is not a valid image type.`);
      }
    }
    setLand({ ...land, images: imageArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      setError("You must agree to the terms and conditions.");
      return;
    }
    if (land.images.length > 0) {
      setLoading(true);
      try {
        const imageUrls = [];
        for (let i = 0; i < land.images.length; i++) {
          const image = land.images[i];
          const imageStorageRef = storageRef(storage, `land_images/${image.name}`);
          const uploadTask = uploadBytesResumable(imageStorageRef, image);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
                default:
                  console.log("error");
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              console.error("Error during upload:", error);
            },
            async () => {
              // Handle successful uploads on complete
              const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
              imageUrls.push(imageUrl);

              if (imageUrls.length === land.images.length) {
                const landData = {
                  ...land,
                  imageUrls: imageUrls,
                };

                const newLandRef = push(ref(db, "lands"));
                await set(newLandRef, landData);
                setLand({
                  ownerType: "Individual",
                  ownerName: "",
                  email: "",
                  addressLine1: "",
                  addressLine2: "",
                  city: "",
                  state: "Karnataka",
                  zipCode: "",
                  contactNumber: "",
                  sellOrRent: "SELL",
                  isPremium: false,
                  location: "",
                  sublocation: "",
                  propertyAddress: "",
                  propertyCity: "",
                  propertyState: "Karnataka",
                  propertyZipCode: "",
                  propertyType: "",
                  totalArea: "",
                  price: "",
                  title: "",
                  description: "",
                  images: [],
                  imageUrls: [],
                });
                setAgreeToTerms(false);
                setError("");
                setLoading(false);
              }
            }
          );
        }
      } catch (error) {
        console.error("Error adding document: ", error);
        setError("Error adding document");
        setLoading(false);
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
        <form onSubmit={handleSubmit} className="mt-10 w-50 p-3 text-black">
          <div className="">
            <h1 className="t text-center text-xl block font-medium">Post Your Property</h1>
            <div className="bg-gray-900 rounded mt-10 w-90 p-3">
              <h1 className="text-white text-center text-xl block font-medium">Post Your Property</h1>
              <p className="text-white text-center mb-4">
                Do you have a property to rent or sell? Use the form below to fill out the details and make a
                submission. We will review the listing and approve it so it can be shown on the website.
              </p>
              <h2 className="text-lg block font-medium mb-2">Personal Details</h2>
              <div className="">
                <div>
                  <h2 className="text-white text-lg block font-medium mb-2">Personal Details</h2>
                  <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                    Is this your property, or are you an agent or builder?
                  </label>
                  <div className="flex justify-around mb-3">
                    <div className="flex items-center">
                      <input
                        id="Individual"
                        type="radio"
                        value="Individual"
                        name="ownerType"
                        className="w-full h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        checked={land.ownerType === "Individual"}
                        onChange={handleChange}
                      />
                      <label htmlFor="Individual" className="ms-2 text-sm font-medium text-gray-900 ">
                        Individual
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Agent"
                        type="radio"
                        value="Agent"
                        name="ownerType"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        checked={land.ownerType === "Agent"}
                        onChange={handleChange}
                      />
                      <label htmlFor="Agent" className="ms-2 text-sm font-medium text-gray-900 ">
                        Agent
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Builder"
                        type="radio"
                        value="Builder"
                        name="ownerType"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        checked={land.ownerType === "Builder"}
                        onChange={handleChange}
                      />
                      <label htmlFor="Builder" className="ms-2 text-sm font-medium text-gray-900 ">
                        Builder
                      </label>
                    </div>
                  </div>
                  <label htmlFor="ownerName" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    id="ownerName"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.ownerName}
                    onChange={handleChange}
                    placeholder="Owner Name"
                    required
                  />
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                  />
                  <label htmlFor="addressLine1" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    id="addressLine1"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.addressLine1}
                    onChange={handleChange}
                    placeholder="Address Line 1"
                    required
                  />
                  <label htmlFor="addressLine2" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    name="addressLine2"
                    id="addressLine2"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.addressLine2}
                    onChange={handleChange}
                    placeholder="Address Line 2"
                    required
                  />
                  <label htmlFor="city" className="block mb-1 text-sm font-medium text-gray-900 ">
                    City / Village
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.city}
                    onChange={handleChange}
                    placeholder="City / Village"
                    required
                  />
                  <label htmlFor="state" className="block mb-1 text-sm font-medium text-gray-900 ">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.state}
                    onChange={handleChange}
                    required>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                  <label htmlFor="zipCode" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.zipCode}
                    onChange={handleChange}
                    placeholder="Zip Code"
                    required
                  />
                  <label htmlFor="contactNumber" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.contactNumber}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required
                  />
                  <h2 className="text-white text-lg block font-medium mb-2">Property Details</h2>
                  <label className="block mb-1 text-sm font-medium text-gray-900 ">
                    Is this a sell, rent, or lease?
                  </label>
                  <div className="flex justify-around mb-3">
                    <div className="flex items-center">
                      <input
                        id="SELL"
                        type="radio"
                        value="SELL"
                        name="sellOrRent"
                        className="w-full h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        checked={land.sellOrRent === "SELL"}
                        onChange={handleChange}
                      />
                      <label htmlFor="SELL" className="ms-2 text-sm font-medium text-gray-900 ">
                        SELL
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="RENT"
                        type="radio"
                        value="RENT"
                        name="sellOrRent"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        checked={land.sellOrRent === "RENT"}
                        onChange={handleChange}
                      />
                      <label htmlFor="rent" className="ms-2 text-sm font-medium text-gray-900 ">
                        Rent
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="lease"
                        type="radio"
                        value="LEASE"
                        name="sellOrRent"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        checked={land.sellOrRent === "LEASE"}
                        onChange={handleChange}
                      />
                      <label htmlFor="lease" className="ms-2 text-sm font-medium text-gray-900 ">
                        Lease
                      </label>
                    </div>
                  </div>
                  <label htmlFor="location" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="form-select bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={land.location}
                    onChange={handleChange}>
                    <option value="Bagalkot">Bagalkot</option>
                    <option value="Ballari (Bellary)">Ballari (Bellary)</option>
                    <option value="Belagavi (Belgaum)">Belagavi (Belgaum)</option>
                    <option value="Bengaluru (Bangalore) Rural">Bengaluru (Bangalore) Rural</option>
                    <option value="Bengaluru (Bangalore) Urban">Bengaluru (Bangalore) Urban</option>
                    <option value="Bidar">Bidar</option>
                    <option value="Chamarajanagar">Chamarajanagar</option>
                    <option value="Chikballapur">Chikballapur</option>
                    <option value="Chikkamagaluru (Chikmagalur)">Chikkamagaluru (Chikmagalur)</option>
                    <option value="Chitradurga">Chitradurga</option>
                    <option value="Dakshina Kannada">Dakshina Kannada</option>
                    <option value="Davangere">Davangere</option>
                    <option value="Dharwad">Dharwad</option>
                    <option value="Gadag">Gadag</option>
                    <option value="Hassan">Hassan</option>
                    <option value="Haveri">Haveri</option>
                    <option value="Kalaburagi (Gulbarga)">Kalaburagi (Gulbarga)</option>
                    <option value="Kodagu">Kodagu</option>
                    <option value="Kolar">Kolar</option>
                    <option value="Koppal">Koppal</option>
                    <option value="Mandya">Mandya</option>
                    <option value="Mysuru (Mysore)">Mysuru (Mysore)</option>
                    <option value="Raichur">Raichur</option>
                    <option value="Ramanagara">Ramanagara</option>
                    <option value="Shivamogga (Shimoga)">Shivamogga (Shimoga)</option>
                    <option value="Tumakuru (Tumkur)">Tumakuru (Tumkur)</option>
                    <option value="Udupi">Udupi</option>
                    <option value="Uttara Kannada (Karwar)">Uttara Kannada (Karwar)</option>
                    <option value="Vijayapura (Bijapur)">Vijayapura (Bijapur)</option>
                    <option value="Yadgir">Yadgir</option>
                  </select>

                  <label htmlFor="sublocation" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Sub-Location
                  </label>
                  <input
                    type="text"
                    name="sublocation"
                    id="sublocation"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.sublocation}
                    onChange={handleChange}
                    placeholder="Sub-Location"
                    required
                  />
                  <label htmlFor="propertyAddress" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    id="propertyAddress"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.propertyAddress}
                    onChange={handleChange}
                    placeholder="Property Address"
                    required
                  />
                  <label htmlFor="propertyCity" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Property City / Village
                  </label>
                  <input
                    type="text"
                    name="propertyCity"
                    id="propertyCity"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.propertyCity}
                    onChange={handleChange}
                    placeholder="Property City / Village"
                    required
                  />
                  <label htmlFor="propertyState" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Property State
                  </label>
                  <select
                    id="propertyState"
                    name="propertyState"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.propertyState}
                    onChange={handleChange}
                    required>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                  <label htmlFor="propertyZipCode" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Property Zip Code / Pin Code
                  </label>
                  <input
                    type="text"
                    name="propertyZipCode"
                    id="propertyZipCode"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.propertyZipCode}
                    onChange={handleChange}
                    placeholder="Property Zip Code"
                    required
                  />
                  <label htmlFor="totalArea" className="block mb-1 text-sm font-medium text-gray-900 ">
                    Total Area
                  </label>
                  <input
                    type="text"
                    name="totalArea"
                    id="totalArea"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.totalArea}
                    onChange={handleChange}
                    placeholder="Total Area"
                    required
                  />
                  <select
                    id="property_area_unit"
                    name="propertyAreaUnit"
                    className="form-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={land.propertyAreaUnit}
                    onChange={handleChange}
                    required>
                    <option value="sq. ft." selected>
                      {" "}
                      sq. ft.
                    </option>
                    <option value="sq. m.">sq. m.</option>
                    <option value="sq. yd.">sq. yd.</option>
                    <option value="cent">cent</option>
                    <option value="acre">acre</option>
                    <option value="hectare">hectare</option>
                  </select>
                </div>

                <label htmlFor="propertyType" className="block mb-1 text-sm font-medium text-gray-900 ">
                  Property Type
                </label>
                <select
                  id="property_type"
                  name="propertyType"
                  className="form-select bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={land.propertyType}
                  onChange={handleChange}>
                  <option value="" disabled>
                    Select Property Type
                  </option>
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
                <label htmlFor="totalPrice" className="block mb-1 text-sm font-medium text-gray-900 ">
                  Total Sale Price / Rent
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={land.price}
                  onChange={handleChange}
                  placeholder="Price"
                  required
                />
                <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-900 ">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={land.title}
                  onChange={handleChange}
                  placeholder="Title"
                  required
                />
                <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-900 ">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={land.description}
                  onChange={handleChange}
                  placeholder="Description"
                  required
                />
                <label htmlFor="images" className="block mb-1 text-sm font-medium text-gray-900 ">
                  Upload Images
                </label>
                <input
                  type="file"
                  name="images"
                  id="images"
                  className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleFileChange}
                  accept="image/*"
                  multiple
                  required
                />
                <div className="flex items-center mb-3">
                  <input
                    id="agreeToTerms"
                    type="checkbox"
                    name="agreeToTerms"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={agreeToTerms}
                    onChange={() => setAgreeToTerms(!agreeToTerms)}
                    required
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 text-sm font-medium text-gray-900 ">
                    I agree to the terms and conditions.
                  </label>
                </div>
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default LandForm;
