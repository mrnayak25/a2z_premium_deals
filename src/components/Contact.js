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
            <div className="flex flex-col gap-6 items-center">
              {/* -- Call Details -- */}
              <div className="items-center w-full md:w-96 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-200 text-orange-500 rounded-md">
                    <MdCall size={25} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Call</span>
                    <span className="text-gray-500">
                      <a href="tel:+919902331774" className="text-gray-500 hover:text-orange-500">
                        Brayan Alphonso: +91 9902331774
                      </a>
                    </span>
                    <span className="text-gray-500">
                      <a href="tel:+918494972860" className="text-gray-500 hover:text-orange-500">
                        A2Z Office: +91 8494972860
                      </a>
                    </span>
                  </div>

                </div>
              </div>

              {/* --- Second Row --- */}
              <div className="flex flex-col  gap-6">
                {/* -- WhatsApp Chat -- */}
                <div className="items-center w-full md:w-96 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-200 text-orange-500 rounded-md">
                      <BsWhatsapp size={25} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">Chat on WhatsApp</span>
                      <span className="text-gray-500">
                        <a
                          href="https://wa.me/919902331774?text=Hello%2C%20I%20need%20more%20info%20about%20A2Z%20Premium%20Deals..."
                          className="text-gray-500 hover:text-green-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Brayan Alphonso: +91 9902331774
                        </a>
                      </span>
                      <span className="text-gray-500">
                        <a
                          href="https://wa.me/918494972860?text=Hello%2C%20I%20need%20more%20info%20about%20A2Z%20Premium%20Deals..."
                          className="text-gray-500 hover:text-green-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          A2Z Office: +91 8494972860
                        </a>
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              {/* -- Address -- */}
              <div className="items-center w-full md:w-96 p-4 border border-gray-300 rounded-md gap-4 transition-transform transform hover:scale-110 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-200 text-orange-500 rounded-md">
                    <MdLocationOn size={25} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Address</span>
                    <span className="text-gray-500">
                      <a
                        href="https://maps.google.com/?cid=10587554036520004588&entry=gps"
                        className="text-gray-500 hover:text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MR. BRAYAN ALPHONSO <br />
                        LEO BROTHER'S SHOPPING COMPLEX <br />
                        MUKAMAR, UDUPI DIST. 574 111 <br />
                        KARNATAKA, INDIA
                      </a>
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
