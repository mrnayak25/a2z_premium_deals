import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';
import logo from '../images/logo_realstate.png';
import { FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'; // Import new icons

const Footer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (data) => {
    data.status = "pending";
    try {
      await push(ref(db, 'feedback'), data);
      reset();
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-24 h-24 mb-4"/>
          <h2 className="text-2xl font-bold mb-4">A2Z PREMIUM DEALS</h2>
          <nav className="mb-4">
            <a href="#" className="mx-4 hover:underline">Features</a>
            <a href="#" className="mx-4 hover:underline">Tradings</a>
            <a href="#" className="mx-4 hover:underline">About</a>
          </nav>
          <div className="flex justify-center mb-4">
            <a href="#" className="mx-3 text-xl hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="mx-3 text-xl hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="mx-3 text-xl hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="mx-3 text-xl hover:text-gray-400"><FaGithub /></a>
          </div>
          {/* Feedback Form */}
          {!isModalOpen && (
            <div>
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600"
                onClick={() => setIsModalOpen(true)}
              >
                Feedback
              </button>
            </div>
          )}
          
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white text-black rounded-lg shadow-lg w-full max-w-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-lg font-bold">Submit Feedback</h5>
                  <button
                    type="button"
                    className="text-black hover:text-red-500"
                    onClick={() => setIsModalOpen(false)}
                  >
                    &times;
                  </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      {...register('name', { required: true })}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Email@gmail.com"
                      {...register('email', { required: true })}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job/Position</label>
                    <input
                      type="text"
                      placeholder="Position - job / business / ceo / founder"
                      {...register('job', { required: true })}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    {errors.job && <p className="text-red-500 text-sm mt-1">Job/Position is required</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      placeholder="Message ...."
                      {...register('message', { required: true })}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <p className="text-gray-400 mt-4">
            &copy; 2024 A2Z Premium Deals. All rights reserved. Developed by <a href="https://svvaap.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">svvaap.com</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
