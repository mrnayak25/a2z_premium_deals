import React from 'react';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import image from '../images/contact.jpg'

function Contact() {
  return (
    <section id="contact-us" className="py-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 px-4">
        {/* --- Left Side --- */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <span className="text-orange-500">Our Contacts</span>
          <span className="text-2xl font-bold text-gray-800">Easy to Contact Us</span>
          <span className="text-gray-600">
            We always ready to help by providing the best services for you. We believe a good place to live can make your life better.
          </span>

          {/* --- Contact Modes --- */}
          <div className="flex flex-col mt-8 gap-4">
            <div className="flex flex-col md:flex-row gap-6">
              {/* -- First Mode -- */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-64 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-md">
                    <MdCall size={25} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Call</span>
                    <span className="text-gray-500">021 123 456 789</span>
                  </div>
                </div>
                <div className="w-full mt-4 md:mt-0 md:w-auto text-center px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-md hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white hover:scale-90">
                  Call Now
                </div>
              </div>

              {/* -- Second Mode -- */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-64 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-md">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Chat</span>
                    <span className="text-gray-500">021 123 456 789</span>
                  </div>
                </div>
                <div className="w-full mt-4 md:mt-0 md:w-auto text-center px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-md hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white hover:scale-90">
                  Chat Now
                </div>
              </div>
            </div>

            {/* --- Second Row --- */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* -- Third Mode -- */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-64 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-md">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Video Call</span>
                    <span className="text-gray-500">021 123 456 789</span>
                  </div>
                </div>
                <div className="w-full mt-4 md:mt-0 md:w-auto text-center px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-md hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white hover:scale-90">
                  Video Call Now
                </div>
              </div>

              {/* -- Fourth Mode -- */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-64 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-md">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Message</span>
                    <span className="text-gray-500">021 123 456 789</span>
                  </div>
                </div>
                <div className="w-full mt-4 md:mt-0 md:w-auto text-center px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-md hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white hover:scale-90">
                  Message Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Side --- */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full">
            <img src={image} alt="Contact Us" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
