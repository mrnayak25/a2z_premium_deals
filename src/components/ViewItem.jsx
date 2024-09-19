import React from "react";
import Carousel from "./Carousel";
import callpng from '../images/phone.png';
import whatsapp from '../images/whatsapp_img.png';
import background from '../images/leaves.webp';
import { useNavigate, useParams } from "react-router-dom";
import { useLands } from "../context/LandContext";

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

  const whatsappMessage = `
    Hi Sir, I am interested in this property listed on A2zpremiumdeals.com.
    Details:
    - Title: ${selectedLand.title}
    - Price: Rs.${selectedLand.price}
    - Owner Name: ${selectedLand.ownerName}
    - Location: ${selectedLand.location}
  `;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919902331774/?text=${message}`);
  };

  return (
    <div
      className="bg-cover bg-no-repeat min-h-screen py-8 px-4"
      style={{ backgroundImage: `url(${background})`, backgroundOpacity: '0.5' }}
    >
      {/* Back Button */}
      <button
        className="absolute top-4 left-6 text-white bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-700 transition-all"
        onClick={() => navigate(-1)}
      >
        <i className="fa-solid fa-arrow-left text-xl"></i>
      </button>

      <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg p-6 md:p-10">
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
