import React from "react";
import { MdCall, MdLocationOn } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import image from "../images/contact.jpg";

function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 px-4">
        {/* --- Left Side --- */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div>
            <span className="text-orange-500 text-xl ">Our Contacts</span>
            <br />
            <span className="text-2xl font-bold text-gray-800 ">Easy to Contact Us</span>
          </div>
          <span className="text-gray-600">
            We're always ready to help by providing the best services for you. We believe a good place to live can make
            your life better.
          </span>

          {/* --- Contact Modes --- */}
          <div className="flex flex-col mt-8 gap-4">
            <div className="flex flex-col gap-6">
              {/* -- Call Details -- */}
              <div className="items-center w-full md:w-64 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-200 text-orange-500 rounded-md">
                    <MdCall size={25} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Call</span>
                    <span className="text-gray-500">Brayan Alphonso: +91 99023 31774</span>
                    <span className="text-gray-500">A2Z Office: +91 84949 72860</span>
                  </div>
                </div>
              </div>

              {/* --- Second Row --- */}
              <div className="flex flex-col  gap-6">
                {/* -- WhatsApp Chat -- */}
                <div className="items-center w-full md:w-64 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-200 text-orange-500 rounded-md">
                      <BsWhatsapp size={25} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">Chat on WhatsApp</span>
                      <span className="text-gray-500">Brayan Alphonso: +91 99023 31774</span>
                      <span className="text-gray-500">A2Z Office: +91 84949 72860</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* -- Address -- */}
              <div className="items-center w-full md:w-64 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-200 text-orange-500 rounded-md">
                    <MdLocationOn size={25} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Address</span>
                    <span className="text-gray-500">
                      MR. BRAYAN ALPHONSO <br />
                      LEO BROTHER'S SHOPPING COMPLEX <br />
                      MUKAMAR, UDUPI DIST. 574 111 <br />
                      KARNATAKA, INDIA
                    </span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* --- Right Side --- */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full overflow-hidden rounded-t-[15rem] border-8 border-white/10 sm:w-full sm:h-[35rem]">
            <img src={image} alt="Contact Us" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
