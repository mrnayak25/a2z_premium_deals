import React, { useState } from "react";
import { get , ref, set, push } from "firebase/database";
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import Loading from "./Loading";
import watermark from 'watermarkjs'; // Import watermarkjs

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
    images: [],
    imageUrls: [],
    status: "pending",
  });
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLand({ ...land, [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const imageArray = [];
    const allowedTypes = ["image/jpeg", "image/png"];
    for (let i = 0; i < files.length; i++) {
      if (allowedTypes.includes(files[i].type)) {
        imageArray.push(files[i]);
      } else {
        console.warn(`File ${files[i].name} is not a valid image type.`);
      }
    }
    setLand({ ...land, images: imageArray });
  };

  const applyWatermark = async (image) => {
    return new Promise((resolve, reject) => {
      watermark([image])
        .dataUrl(watermark.text.center('A2Z PREMIUM DEALS', 'bold 48px Arial', '#FFF', 0.8))
        .then((dataUrl) => {
          resolve(dataUrl);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions before submitting.");
      return;
    }
  
    setLoading(true);
  
    try {
      const dbRef = ref(db, "lands");
      const newLandRef = push(dbRef);
      const imageUrls = [];
      const currentDateTime = new Date().toISOString(); // Get the current date and time
  
      // Get the current number of properties to assign a unique number
      const propertyCountRef = ref(db, "propertyCounter");
      const propertyCounterSnapshot = await get(propertyCountRef);
      let propertyNumber = propertyCounterSnapshot.exists() ? propertyCounterSnapshot.val() + 1 : 1;
  
      for (const image of land.images) {
        const watermarkedImage = await applyWatermark(image);
  
        const blob = await (await fetch(watermarkedImage)).blob();
  
        const storagePath = `land_images/${newLandRef.key}/${image.name}`;
        const storageReference = storageRef(storage, storagePath);
        const uploadTask = uploadBytesResumable(storageReference, blob);
  
        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            null,
            reject,
            async () => {
              const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
              imageUrls.push(downloadUrl);
              resolve();
            }
          );
        });
      }
  
      await set(newLandRef, {
        ...land,
        imageUrls,
        uploadedDate: currentDateTime, // Add uploaded date and time
        propertyNumber: `p${propertyNumber}`, // Assign the unique property number
      });
  
      // Increment property counter in the database
      await set(propertyCountRef, propertyNumber);
  
      setLoading(false);
      setShowSuccessModal(true);
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
        status: "pending",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
    }
  };
  
  

  if (showSuccessModal) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Success</h2>
          <p className="mb-4">Your property has been successfully submitted.</p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex text-black">
      {loading ? (
        <div className="m-auto">
        <Loading />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="my-10  md:w-full md:max-w-5xl mx-auto p-6 bg-gray-200 shadow rounded-lg ">
          <div className="rounded-lg p-6">
            <h1 className="text-black text-center text-3xl font-bold mb-4">Post Your Property</h1>
            <p className="text-black text-center mb-6">
              Do you have a property to rent or sell? Use the form below to fill out the details and make a submission.
              We will review the listing and approve it so it can be shown on the website.
            </p>

            {/* Personal Details Section */}
            <div className="mb-4 ">
              <h2 className="text-black text-xl font-semibold mb-4">Personal Details</h2>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-black">
                  Is this your property, or are you an agent or builder?
                </label>
                <br />
                <div className="flex justify-between md:mx-52">
                  {["Individual", "Agent", "Builder"].map((type) => (
                    <div className="flex items-center" key={type}>
                      <input
                        id={type}
                        type="radio"
                        value={type}
                        name="ownerType"
                        className="h-4 w-4 text-blue-600"
                        checked={land.ownerType === type}
                        onChange={handleChange}
                      />
                      <label htmlFor={type} className="ml-2 text-sm font-medium text-black">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {["ownerName", "email", "addressLine1", "addressLine2", "city", "zipCode", "contactNumber"].map(
                  (field) => (
                    <div className="mb-2 md:mb-4 " key={field}>
                      <label htmlFor={field} className="block mb-1 text-sm font-medium text-black">
                        {field
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())
                          .trim()}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text" && field === "contactNumber" ? "number" : "text"}
                        name={field}
                        id={field}
                        value={land[field]}
                        onChange={handleChange}
                        placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                        className="w-full p-2 border rounded bg-white text-black ring-2 hover:ring-black focus:ring-0 transition-transform duration-300 hover:scale-105"
                        required
                      />
                    </div>
                  )
                )}

                <div className="mb-4 md:col-span-2">
                  <label htmlFor="state" className="block mb-1 text-sm font-medium text-black">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={land.state}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-white text-black ring-2 hover:ring-black focus:ring-0 transition-transform duration-300 hover:scale-105"
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
                </div>
              </div>
            </div>

            {/* Property Details Section */}
            <div>
            <h2 className="text-black text-xl font-semibold mb-4">Property Details</h2>
            <div className="mb-4 md:mx-52">
              <label className="block mb-2 text-sm font-medium text-black">Is this a sell, rent, or lease?</label>
              <div className="flex justify-between">
                {["SELL", "RENT", "LEASE"].map((option) => (
                  <div className="flex items-center" key={option}>
                    <input
                      id={option}
                      type="radio"
                      value={option}
                      name="sellOrRent"
                      className="h-4 w-4 text-blue-600 "
                      checked={land.sellOrRent === option}
                      onChange={handleChange}
                    />
                    <label htmlFor={option} className="ml-2 text-sm font-medium text-black">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  id: "location",
                  type: "select",
                  options: [
                    "Bagalkot",
                    "Ballari (Bellary)",
                    "Belagavi (Belgaum)",
                    "Bengaluru (Bangalore) Rural",
                    "Bengaluru (Bangalore) Urban",
                    "Bidar",
                    "Chamarajanagar",
                    "Chikballapur",
                    "Chikkamagaluru (Chikmagalur)",
                    "Chitradurga",
                    "Dakshina Kannada",
                    "Davangere",
                    "Dharwad",
                    "Gadag",
                    "Hassan",
                    "Haveri",
                    "Kalaburagi (Gulbarga)",
                    "Kodagu",
                    "Kolar",
                    "Koppal",
                    "Mandya",
                    "Mysuru (Mysore)",
                    "Raichur",
                    "Ramanagara",
                    "Shivamogga (Shimoga)",
                    "Tumakuru (Tumkur)",
                    "Udupi",
                    "Uttara Kannada (Karwar)",
                    "Vijayapura (Bijapur)",
                    "Yadgir",
                  ],
                },
                { id: "sublocation", type: "text" },
                { id: "propertyAddress", type: "text" },
                { id: "propertyCity", type: "text" },
                { id: "propertyZipCode", type: "text" },
                { id: "price", type: "text" },
                { id: "title", type: "text" },
                { id: "totalArea", type: "text" },
              ].map(({ id, type, options }) => (
                <div className="mb-4" key={id}>
                  <label htmlFor={id} className="block mb-1 text-sm font-medium text-black">
                    {id
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())
                      .trim()}
                  </label>
                  {type === "text" ? (
                    <input
                      type="text"
                      name={id}
                      id={id}
                      value={land[id]}
                      onChange={handleChange}
                      placeholder={id.replace(/([A-Z])/g, " $1").trim()}
                      className="w-full p-2 border rounded bg-white text-black ring-2 hover:ring-black focus:ring-0 transition-transform duration-300 hover:scale-105"
                      required
                    />
                  ) : (
                    <select
                      id={id}
                      name={id}
                      value={land[id]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded bg-white text-black ring-2 hover:ring-black focus:ring-0 transition-transform duration-300 hover:scale-105"
                      required>
                      {options.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}

              <div className="mb-4">
                <label htmlFor="propertyAreaUnit" className="block mb-1 text-sm font-medium text-black">
                  Total Area Unit
                </label>
                <select
                  id="property_area_unit"
                  name="propertyAreaUnit"
                  value={land.propertyAreaUnit}
                  onChange={handleChange}
                  className="w-full p-2 border rounded bg-white  text-black ring-2  hover:ring-black focus:ring-0 transition-transform duration-300 hover:scale-105"
                  required>
                  <option value="sq. ft.">sq. ft.</option>
                  <option value="sq. m.">sq. m.</option>
                  <option value="sq. yd.">sq. yd.</option>
                  <option value="cent">cent</option>
                  <option value="acre">acre</option>
                  <option value="hectare">hectare</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="propertyState" className="block mb-1 text-sm font-medium text-black">
                  Property State
                </label>
                <select
                  id="propertyState"
                  name="propertyState"
                  value={land.propertyState}
                  onChange={handleChange}
                  className="w-full p-2 border rounded bg-white text-black ring-2 hover:ring-black focus:ring-0 transition-transform duration-300 hover:scale-105"
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
              </div>

              <div className="mb-4">
                <label htmlFor="propertyType" className="block mb-1 text-sm font-medium text-black">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={land.propertyType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded bg-white text-black ring-2 hover:ring-black focus:ring-0 transition-transform duration-300 hover:scale-105"
                  required>
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
              </div>

              <div className="mb-4">
                <label htmlFor="propertyImages" className="block mb-1 text-sm font-medium text-black">
                  Property Images
                </label>
                <input
                  type="file"
                  name="propertyImages"
                  id="propertyImages"
                  multiple
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded bg-white text-black ring-2 hover:ring-black focus:ring-0 transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="mb-4 md:col-span-3">
                <label htmlFor="description" className="block mb-1 text-base font-medium text-black">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={land.description}
                  onChange={handleChange}
                  placeholder="Enter a brief description of the property"
                  rows="4"
                  className="w-full p-2 border rounded bg-white text-black ring-2 hover:ring-black focus:ring-0 transition-transform duration-300 hover:scale-95"
                  required
                />
              </div>
            </div>

            <input
              id="termsConditions"
              type="checkbox"
              className="h-4 w-4 text-blue-600"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <label htmlFor="termsConditions" className="ml-2 text-sm font-medium text-black">
              I agree to the terms and conditions
            </label>
            </div>
            <button
              type="submit"
              className="w-52 mt-10 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LandForm;
