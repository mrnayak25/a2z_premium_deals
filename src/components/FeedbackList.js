import React, { useEffect, useState } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { db } from '../firebase';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const feedbackRef = ref(db, 'feedback');
    onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const feedbackArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setFeedbacks(feedbackArray);
      }
    });
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await update(ref(db, `feedback/${id}`), { status });
      alert('Feedback status updated successfully!');
    } catch (error) {
      console.error('Error updating feedback status:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Feedback List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-2">{feedback.name}</h3>
            <p className="mb-2"><strong>Email:</strong> {feedback.email}</p>
            <p className="mb-2"><strong>Position:</strong> {feedback.job}</p>
            <p className="mb-2"><strong>Message:</strong> {feedback.message}</p>
            <p className="mb-4"><strong>Status:</strong> {feedback.status}</p>
            <div className="flex justify-between">
              <button 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => handleStatusChange(feedback.id, 'approved')}
              >
                Approve
              </button>
              <button 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => handleStatusChange(feedback.id, 'declined')}
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
