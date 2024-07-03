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
    status: "pending",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal

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
                  status: "pending",
                });
                setAgreeToTerms(false);
                setError("");
                setLoading(false);
                setShowSuccessModal(true); // Show success modal
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
    <div className="d-flex text-black">
  {loading ? (
    <Loading />
  ) : (
    <form onSubmit={handleSubmit} className=" my-10 max-w-5xl mx-auto p-6 bg-gray-200 shadow rounded-lg ">
      <div className="rounded-lg p-6">
        <h1 className="text-black text-center text-2xl font-semibold mb-4 underline">Post Your Property</h1>
        <p className="text-black text-center mb-6">
          Do you have a property to rent or sell? Use the form below to fill out the details and make a submission.
          We will review the listing and approve it so it can be shown on the website.
        </p>
        
        {/* Personal Details Section */}
        <div className="mb-6">
          <h2 className="text-black text-xl font-semibold mb-4">Personal Details</h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-black">
              Is this your property, or are you an agent or builder?
            </label><br/>
            <div className="flex justify-between mx-52">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {["ownerName", "email", "addressLine1", "addressLine2", "city", "zipCode", "contactNumber"].map((field) => (
              <div className="mb-4" key={field}>
                <label htmlFor={field} className="block mb-1 text-sm font-medium text-black">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  value={land[field]}
                  onChange={handleChange}
                  placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                  className="w-full p-2 border rounded bg-white text-black"
                  required
                />
              </div>
            ))}

          <div className="mb-4 md:col-span-2">
            <label htmlFor="state" className="block mb-1 text-sm font-medium text-black">
              State
            </label>
            <select
              id="state"
              name="state"
              value={land.state}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-black"
              required>
              <option value="Karnataka">Karnataka</option>
              {/* Add other state options here */}
            </select>
          </div>
          </div>
        </div>

        {/* Property Details Section */}
        <div className="">
          <h2 className="text-black text-xl font-semibold mb-4">Property Details</h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-black">Is this a sell, rent, or lease?</label>
            <div className="flex justify-between md:mx-52">
              {["SELL", "RENT", "LEASE"].map((option) => (
                <div className="flex items-center" key={option}>
                  <input
                    id={option}
                    type="radio"
                    value={option}
                    name="sellOrRent"
                    className="h-4 w-4 text-blue-600"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                {id.replace(/([A-Z])/g, " $1").trim()}
              </label>
              {type === "text" ? (
                <input
                  type="text"
                  name={id}
                  id={id}
                  value={land[id]}
                  onChange={handleChange}
                  placeholder={id.replace(/([A-Z])/g, " $1").trim()}
                  className="w-full p-2 border rounded bg-white text-black"
                  required
                />
              ) : (
                <select
                  id={id}
                  name={id}
                  value={land[id]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded bg-white text-black"
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
              className="w-full p-2 border rounded bg-white text-black"
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
              className="w-full p-2 border rounded bg-white text-black"
              required>
              <option value="Karnataka">Karnataka</option>
              {/* Add other state options here */}
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
              className="w-full p-2 border rounded bg-white text-black"
              required>
              <option value="" disabled>
                Select Property Type
              </option>
              <option value="Agricultural Land">Agricultural Land</option>
              {/* Add other property type options here */}
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
              className="w-full p-2 border rounded bg-white text-black"
            />
          </div>

          <div className="mb-4 md:col-span-3">
            <label htmlFor="description" className="block mb-1 text-sm font-medium text-black">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={land.description}
              onChange={handleChange}
              placeholder="Enter a brief description of the property"
              rows="4"
              className="w-full p-2 border rounded bg-white text-black"
              required
            />
          </div>

          </div>

          <div className="flex items-center mb-4">
            <input
              id="termsConditions"
              type="checkbox"
              className="h-4 w-4 text-blue-600"
              checked={land.termsConditions}
              onChange={handleChange}
              required
            />
            <label htmlFor="termsConditions" className="ml-2 text-sm font-medium text-black">
              I agree to the terms and conditions
            </label>
         </div>

          <button
            type="submit"
            className="w-52 py-2  bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200">
            Submit
          </button>
        </div>
      </div>
    </form>
  )}
</div>

  
  );
};

export default LandForm;
