import React from "react";
import Carousel from "./Carousel";
import callpng from '../images/phone.png';
import whatsapp from '../images/whatsapp_img.png'; // Ensure you have the WhatsApp icon image
import shareIcon from '../images/sharethis-64.png'; // Add your share icon
import background from '../images/leaves.webp';
import { useNavigate, useParams } from "react-router-dom";
import { useLands } from "../context/LandContext";
import { RWebShare } from "react-web-share";
import Navbar from "../components/Header";

function ViewItem() {
  const { id } = useParams();
  const { lands, loading } = useLands();
  const navigate = useNavigate();

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  const selectedLand = lands.find((item) => item.id === id);

  if (!selectedLand) {
    return <div className="text-center py-10 text-xl">Property not found</div>;
  }

  const shareData = {
    text: `Check out this property on A2Z PREMIUM DEALS 
    Title: ${selectedLand.title}
    Description: ${selectedLand.description}
    Location: ${selectedLand.location}, ${selectedLand.sublocation}, ${selectedLand.propertyCity}, ${selectedLand.propertyState}
    Price: Rs.${selectedLand.price}
    Area: ${selectedLand.totalArea} ${selectedLand.propertyAreaUnit}
    Property Type: ${selectedLand.propertyType}`,
    url: `https://a2zpremiumdeals.com/viewproperty/${selectedLand.id}`,
    title: `Property for sale: ${selectedLand.title}`,
  };
  

  const whatsappMessage = `Hi Sir, I am interested in this property listed on A2zpremiumdeals.com.
  Details:
  - Title: ${selectedLand.title}
  - Price: Rs.${selectedLand.price}
  - Owner Name: ${selectedLand.ownerName}
  - Location: ${selectedLand.location}`;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919902331774/?text=${message}`);
  };

  return (
    <>
      <div className="bg-black rounded-br-lg rounded-bl-lg">
        <Navbar />
      </div>
      <div
        className="bg-cover bg-no-repeat min-h-screen py-8 px-4"
        style={{ backgroundImage: `url(${background})`, backgroundOpacity: '0.5' }}
      >
        <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg p-6 md:p-10">
          <div className="flex space-x-4 items-center justify-between">
            {/* Back Button */}
            <button
              className="flex items-center justify-center text-white bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all"
              onClick={() => navigate(-1)}
            >
              <i className="fa-solid fa-arrow-left text-xl"></i>
            </button>

            {/* Share Button */}
            <RWebShare
              data={shareData}
              onClick={() => console.log("Shared successfully!")}
            >
              <button
                className="flex items-center justify-center text-white bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-500 transition-all"
              >
                <img className="w-6 h-6" src={shareIcon} alt="Share" />
              </button>
            </RWebShare>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedLand.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{selectedLand.description}</p>

          <div className="lg:flex lg:space-x-8">
            {/* Image Carousel */}
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Carousel images={selectedLand.imageUrls || []} />
            </div>

            {/* Property Details */}
            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-3">
                <DetailItem label="Location" value={selectedLand.location} />
                <DetailItem label="Sub-location" value={selectedLand.sublocation} />
                <DetailItem label="Address" value={`${selectedLand.propertyCity}, ${selectedLand.propertyState}, ${selectedLand.zipCode}`} />
                <DetailItem label="Price" value={`₹${selectedLand.price}`} />
                <DetailItem label="Property Type" value={selectedLand.propertyType} />
                <DetailItem label="Total Area" value={`${selectedLand.totalArea} ${selectedLand.propertyAreaUnit}`} />
                <DetailItem label="For Sell or Rent" value={selectedLand.sellOrRent} />
                <DetailItem label="State" value={selectedLand.state} />
                <DetailItem label="Zip Code" value={selectedLand.zipCode} />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-6">
                <ActionButton
                  label="Contact Us"
                  icon={callpng}
                  buttonClass="bg-blue-600 hover:bg-blue-700"
                />
                <ActionButton
                  label="Chat on WhatsApp"
                  icon={whatsapp}
                  buttonClass="bg-green-600 hover:bg-green-700"
                  onClick={handleWhatsAppClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Reusable detail component
const DetailItem = ({ label, value }) => (
  <div className="flex justify-start items-center">
    <h5 className="text-lg font-bold text-gray-700 w-40">{label}:</h5>
    <p className="text-gray-600">{value}</p>
  </div>
);

// Reusable button component
const ActionButton = ({ label, icon, buttonClass, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 ${buttonClass}`}
  >
    {label}
    <img className="ml-2 w-6" src={icon} alt={label} />
  </button>
);

export default ViewItem;
