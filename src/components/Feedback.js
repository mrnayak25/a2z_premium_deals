import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../firebase'; // Ensure you have firebaseConfig set up

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const db = getDatabase(app);
    const feedbackRef = ref(db, 'feedback');

    onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const feedbackArray = Object.values(data);
        setFeedbackData(feedbackArray);
      }
    });
  }, []);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbackData.length) % feedbackData.length);
  };

  return (
    <div className="p-6 m-6 bg-gray-100 rounded-lg items-center">
    <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Our Clients Say</h1>
    <p className="text-center text-gray-700 mb-8" data-aos="fade-up">Here's what our clients have to say about our services.</p>
    
    <div className="flex justify-center items-center space-x-4">
      <button
        onClick={prevFeedback}
        className=" text-black text-2xl px-4 py-2 rounded object-cover transition-transform duration-300 transform hover:scale-150"
      >
        &lt;
      </button>

      {feedbackData.length > 0 && (
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="feedback-card bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
            <img 
              src={feedbackData[currentIndex].image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
              alt={feedbackData[currentIndex].name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-center">{feedbackData[currentIndex].name}</h2>
            <p className="text-gray-700 text-center">{feedbackData[currentIndex].message}</p>
          </div>
        </div>
      )}

      <button
        onClick={nextFeedback}
        className=" text-black text-2xl px-4 py-2 rounded object-cover transition-transform duration-300 transform hover:scale-150"
      >
        &gt;
      </button>
    </div>
  </div>
  );
};

export default Feedback;
