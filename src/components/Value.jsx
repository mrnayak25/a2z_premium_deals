import React, { useState } from "react";
import { HiShieldCheck ,HiDocument, HiOfficeBuilding} from "react-icons/hi";
import { MdCancel, MdAnalytics, MdOutlineArrowDropDown } from "react-icons/md";
import image from "../images/1.jpg";

function Value() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  

const data = [
  {
    icon: <HiShieldCheck />, // Existing icon for security
    heading: "Secure and Trusted",
    detail:
      "We prioritize your safety and ensure that all transactions are secure and reliable. Trust us to handle all aspects with integrity and professionalism.",
  },
  {
    icon: <HiDocument />, // New icon for paperwork
    heading: "We Will Handle All the Government Paperwork",
    detail:
      "Navigating through government paperwork can be daunting. We take care of all the necessary documentation and legalities for you, making the process smooth and hassle-free.",
  },
  {
    icon: <HiOfficeBuilding />, // New icon for property management
    heading: "Expert Property Management",
    detail:
      "Our experienced team will manage all aspects of property transactions, from buying and selling to leasing. We ensure a seamless experience with our expertise in property management.",
  },
];


  return (
    <>
      <div className="p-6 items-center" id="about">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="mb-8 md:text-base flex flex-col items-center justify-center">
          <p className="text-lg text-gray-700 mb-4 md:w-2/3 text-center" data-aos="fade-in">
            Welcome to A2Z Premium Deals, your ultimate destination for premium property transactions. We connect you with
            dream homes and prime investment opportunities with a focus on customer satisfaction and personalized service.
          </p>
          <p className="text-lg text-gray-700 mb-4 md:w-1/2 text-center" data-aos="fade-in" data-aos-delay="100">
            Whether buying, selling, or renting, A2Z Premium Deals provides top-notch support and the best deals in the
            real estate market.
          </p>
        </div>

      </div>
      <section id="value" className="flex flex-col items-center justify-center w-full px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
          {/* --- Left Side ---*/}
          <div className="w-full md:w-1/2">
            <div className="w-full overflow-hidden rounded-t-[15rem] border-8 sm:w-full sm:h-[35rem]  border-[rgba(232,232,232,0.93)]">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* --- Right Side ---*/}
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <div>
              <span className="text-orange-500 text-xl">Our Value</span><br />
              <span className="text-2xl font-bold text-gray-800">Value We Give to You</span>
            </div>
            <span className="text-gray-600">
              We are always ready to help by providing the best services for you.
              <br />
              We believe a good place to live can make your life better.
            </span>

            <div className="w-full mt-8">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-300 shadow-sm overflow-hidden mb-1"
                >
                  <div
                    className={`flex items-center justify-between w-full p-2 bg-white cursor-pointer ${expandedIndex === i ? "shadow-lg rounded-md" : ""
                      }`}
                    onClick={() => toggleAccordion(i)}
                  >
                    <div className="flex items-center justify-center p-1 bg-gray-100 rounded-md">
                      {item.icon}
                    </div>
                    <span className="text-lg font-semibold">{item.heading}</span>
                    <div className="flex items-center justify-center p-1 bg-gray-100 rounded-md">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </div>
                  {expandedIndex === i && (
                    <div className="text-gray-600 p-4">
                      <p>{item.detail}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Value;
