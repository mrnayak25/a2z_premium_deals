import React from 'react';
import { useForm } from 'react-hook-form';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';
import logo from '../images/logo_realstate.png';

const Footer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    data.status = "pending";
    try {
      await push(ref(db, 'feedback'), data);
      reset();
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <footer className="footer bg-base-200 text-base-content p-3 md:p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details */}
          <aside className="hidden md:block">
            <h2 className="footer-title text-xl font-bold mb-4">Contact Us</h2>
            <p>+919902331774</p>
            <p>+918494972860</p><br />
            <p>MR. BRAYAN ALPHONSO</p>
            <p>LEO BROTHER'S SHOPPING COMPLEX</p>
            <p>MUKAMAR, UDUPI DIST. 574 111</p>
            <p>KARNATAKA, INDIA</p>
          </aside>

          {/* Feedback Form */}
          <aside>
            <h2 className="footer-title text-xl font-bold mb-4">Feedback</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text" placeholder='Name'
                  {...register('name', { required: true })}
                  className="w-full px-3 py-2 bg-gray-200 border border-gray-600 rounded focus:border-blue-400"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email" placeholder='Email@gmail.com'
                  {...register('email', { required: true })}
                  className="w-full px-3 py-2 bg-gray-200 border border-gray-600 rounded focus:border-blue-400"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Job/Position</label>
                <input
                  type="text" placeholder='Position - job / business / ceo / founder'
                  {...register('job', { required: true })}
                  className="w-full px-3 py-2 bg-gray-200 border border-gray-600 rounded focus:border-blue-400"
                />
                {errors.job && <p className="text-red-500 text-sm mt-1">Job/Position is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea placeholder='Message ....'
                  {...register('message', { required: true })}
                  className="w-full px-3 py-2 bg-gray-200 border border-gray-600 rounded focus:border-blue-400"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
              </div>
              <button type="submit" className="btn btn-outline-primary px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </aside>

          {/* Quick Links */}
          <aside>
            <h2 className="footer-title text-xl font-bold mb-4">A2Z PREMIUM DEALS</h2>
            <div className="mt-10 text-center object-cover transition-transform duration-300 transform hover:scale-110">
              <img src={logo} alt="Real Estate" className="mx-auto h-40 w-auto rounded-lg shadow-lg" />
            </div>
          </aside>
        </div>
        <div className="text-center mt-8">
          &copy; 2024 A2Z Premium Deals. All rights reserved. Developed by <a href="https://svvaap.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">svvaap.com</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
