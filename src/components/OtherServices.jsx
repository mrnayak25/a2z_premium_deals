import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import jobhunt4u from "../images/jobhunt4u.png";
import alphonsomatrimony from "../images/alphonsomatrimony.png";
import Alphonsocyberservices from "../images/alphonsoCyberService.png";
import alma from "../images/AlmaEducation.png";

const companies = [
  {
    id: 1,
    name: "Jobhunt4u",
    logo: jobhunt4u,
    link: "https://jobhunt4u.in",
    description: "Your gateway to finding the perfect job. Get focused and get hired!",
  },
  {
    id: 2,
    name: "Alphonso Cyber Services",
    logo: Alphonsocyberservices,
    link: "",
    description: "We handle All the gov. paper works here ..",
  },
  {
    id: 3,
    name: "Alphonso Matrimony",
    logo: alphonsomatrimony,
    link: "https://alphonsomatrimony.com",
    description: "Bringing families together with trusted matrimonial services.",
  },
  {
    id: 4,
    name: "Alma Study Bee",
    logo: alma,
    link: "",
    description: "With Alma Study Bee, your dream of international education is now within reach!.",
  },
  
];

const CompanyCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1 },
    [Autoplay({ playOnInit: true, delay: 3000 })] // Auto-slide every 3 seconds
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); // Reinitialize Embla when necessary
    }
  }, [emblaApi]);

  return (
    <div className="embla w-full py-6 mt-5">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        <span className="animated-gradient-header"> Our Other </span>Services
      </h2>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {companies.map((company) => (
            <div
              key={company.id}
              className="embla__slide flex-shrink-0 md:w-1/4 w-full flex items-center justify-center p-4"
            >
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center shadow-sm p-2"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 object-contain rounded-lg mb-2"
                />
                <span className="text-sm font-semibold text-gray-700">
                  {company.name}
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  {company.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
