import React from 'react';
import { useForm } from 'react-hook-form';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';
import logo from '../images/logo_realstate.png'

const Footer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await push(ref(db, 'feedback'), data);
      reset();
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>+919902331774</p>
            <p>+918494972860</p><br></br>
            <p>MR. BRAYAN ALPHONSO</p>
            <p>LEO BROTHER'S SHOPPING COMPLEX</p>
            <p>MUKAMAR, UDUPI DIST. 574 111</p>
            <p>KARNATAKA, INDIA</p>
          </div>

          {/* Feedback Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Feedback</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  {...register('message', { required: true })}
                  className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">A2Z PREMIUM DEALS</h2>
            <div className="mt-10 text-center object-cover transition-transform duration-300 transform hover:scale-110">
            <img src={logo} alt="Real Estate" className="mx-auto h-40 w-auto rounded-lg shadow-lg" />
          </div>
          </div>
        </div>
        <div className="text-center mt-8">
  &copy; 2024 A2Z Premium Deals. All rights reserved. Developed by <a href="https://svvaap.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">svvaap.com</a>.
</div>

      </div>
    </footer>
  );
};

export default Footer;