import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import callpng from "../images/phone.png";
import whatsapp from "../images/whatsapp_img.png";

AOS.init();

function AboutUs() {
  return (
    <div className="p-6" id="about">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-4" data-aos="fade-in">
          Welcome to A2Z Premium Deals, your ultimate destination for premium property transactions. We connect you with
          dream homes and prime investment opportunities with a focus on customer satisfaction and personalized service.
        </p>
        <p className="text-lg text-gray-700 mb-4" data-aos="fade-in" data-aos-delay="100">
          Whether buying, selling, or renting, A2Z Premium Deals provides top-notch support and the best deals in the
          real estate market.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPofOc_pK-Fh1jYVUnfPWUq3GPuceQxWBQXA&s"
          alt="Store 1"
          className="w-full h-auto rounded-lg shadow-lg"
          data-aos="fade-left"
        />
        <img
          src="https://coralpi.com/wp-content/uploads/2022/06/land-for-sale.jpg"
          alt="Store 2"
          className="w-full h-auto rounded-lg shadow-lg"
          data-aos="fade-left"
          data-aos-delay="100"
        />
        <img
          src="https://housing.com/news/wp-content/uploads/2024/01/Flats-vs-compressed-1.jpg"
          alt="Store  3"
          className="w-full h-auto rounded-lg shadow-lg"
          data-aos="fade-left"
          data-aos-delay="200"
        />
      </div>

     


      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8" id="contact">
        <div class="mt-8 overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-bold tracking-tight">
                Get in touch
              </h1>
              <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                Fill in the form to start a conversation
              </p>

              <div class="flex items-center mt-8 text-white dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-100">
                  Leo Brother's Shopping Complex, Mukamar, Udupi Dist. 574 111, Karnataka, India
                </div>
              </div>

              <div class="flex items-center mt-4 text-white dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  <a href="tel:+919902331774" className="text-black-600 ">
                    {" "}
                    +919902331774
                  </a>

                  <a href="tel:+918494972860" className="text-black-600 ">
                    {" "}
                    +918494972860
                  </a>
                </div>
              </div>

              <div class="flex justify-around items-center mt-8 text-gray-600 dark:text-gray-400">
                <a href="tel:+919902331774">
                  <div className="flex bg-blue-600 mx-3 rounded-lg ring-1 ring-blue-600 transition-transform duration-300 transform hover:scale-110">
                    <button type="button" className="btn btn-outline-primary rounded-lg  bg-white p-1 hover:text-blue-600 ">
                      Contact Us
                    </button>
                    <img className=" m-1 h-7" src={callpng} alt="call" />
                  </div>
                </a>
                <a
                  href="https://wa.me/919902331774?text=Hello%2C%20I%20am%20interested%20in%20your%20real%20estate%20services."
                  target="_blank"
                  rel="noopener noreferrer">
                  <div className="flex bg-green-700 rounded-lg ring-1 ring-green-700 transition-transform duration-300 transform hover:scale-110">
                    <button className="btn btn-outline-success rounded-lg bg-white p-1 hover:text-green-700 ">
                      Chat on WhatsApp
                    </button>
                    <img className=" m-1 mx-2 h-7" src={whatsapp} alt="call" />
                  </div>
                </a>
              </div>

            </div>

            <form class="p-6 flex flex-col justify-center">
              <div class="flex flex-col">
                <label for="name" class="hidden">Full Name</label>
                <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <div class="flex flex-col mt-2">
                <label for="email" class="hidden">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <div class="flex flex-col mt-2">
                <label for="tel" class="hidden">Number</label>
                <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutUs;
