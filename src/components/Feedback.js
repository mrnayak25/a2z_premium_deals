import React, { useState } from 'react';

const feedbackData = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    message: 'A2Z Premium Deals provided exceptional service and helped me find my dream home effortlessly!',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    message: 'Renting a property through A2Z Premium Deals was smooth and hassle-free. Highly recommend them!',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Michael Johnson',
    message: 'Selling my property with A2Z Premium Deals was a great experience. They handled everything professionally.',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Emily Davis',
    message: 'Excellent customer service and a wide range of properties to choose from. Thank you, A2Z Premium Deals!',
  },
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbackData.length) % feedbackData.length);
  };

  return (
    <div className="p-6 m-6 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Our Clients Say</h1>
      <p className="text-center text-gray-700 mb-8" data-aos="fade-up">Here's what our clients have to say about our services.</p>
      
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={prevFeedback}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Previous
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feedback-card bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
            <img 
              src={feedbackData[currentIndex].image}
              alt={feedbackData[currentIndex].name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-center">{feedbackData[currentIndex].name}</h2>
            <p className="text-gray-700 text-center">{feedbackData[currentIndex].message}</p>
          </div>

          <div className="feedback-card bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
            <img 
              src={feedbackData[(currentIndex + 1) % feedbackData.length].image}
              alt={feedbackData[(currentIndex + 1) % feedbackData.length].name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-center">{feedbackData[(currentIndex + 1) % feedbackData.length].name}</h2>
            <p className="text-gray-700 text-center">{feedbackData[(currentIndex + 1) % feedbackData.length].message}</p>
          </div>
        </div>

        <button
          onClick={nextFeedback}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Feedback;