import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../firebase'; // Ensure you have firebaseConfig set up


const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const db = getDatabase(app);
    const feedbackRef = ref(db, 'feedback');

    onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const feedbackArray = Object.values(data).filter(feedback => feedback.status === 'approved');
        setFeedbackData(feedbackArray);
      }
    });
  }, []);

  useEffect(() => {
    if (feedbackData.length === 0) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
        setIsFading(false);
      }, 500); // Match the duration of the fade out animation
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [feedbackData]);

  return (
    <div className="flex justify-center items-center mb-7 ">
      {feedbackData.length > 0 && (
        <section className="relative isolate overflow-hidden bg-white w-100 max-w-4xl px-6 py-10 sm:py-32 lg:px-8 shadow " data-aos="fade-up"
        data-aos-duration="3000">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What's our customers say</h2>
            {feedbackData[currentIndex] && (
              <figure className={`mt-7 transition-opacity duration-500 ${isFading ? 'fade-out' : 'fade-in'}`}>
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    "{feedbackData[currentIndex].message}"
                  </p>
                </blockquote>
                <figcaption className="mt-7">
                  <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/128/17140/17140038.png"
                    className="mx-auto h-10 w-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">{feedbackData[currentIndex].name}</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">{feedbackData[currentIndex].job}</div>
                  </div>
                </figcaption>
              </figure>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Feedback;
