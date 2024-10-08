import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../images/logo_realstate.png';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? '0' : '-100%' };
    }
    return {}; // No specific styles for desktop
  };

  // Navigation links for home page
  const homeNavigation = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Properties', href: '/properties' },
    { name: 'Post Property', href: '/sellProperty' },
  ];

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <section className="text-white z-[99]" id=".">
      <div className="flex justify-between items-center py-4 px-8">
        {/* Logo and Site Name */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="logo" width={40} className="mr-2" />
            <h1 className="text-lg font-bold items-center">A2Z Premium Deals</h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className={`hidden md:flex gap-8 md:relative md:bg-transparent md:text-white md:flex-row md:gap-8 transition-all duration-300`}
            style={getMenuStyles(menuOpened)}
          >
            {isHomePage ? (
              // Show full navigation on home page
              homeNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:cursor-pointer"
                  onClick={() => setMenuOpened(false)} // Close the menu on link click
                >
                  {item.name}
                </a>
              ))
            ) : (
              // Show 'Back' button on other pages
              <button
                onClick={() => navigate(-1)}
                className="text-white bg-gray-800 p-3 rounded-lg shadow-md hover:bg-gray-700 transition-all"
              >
                Back
              </button>
            )}
          </div>
        </OutsideClickHandler>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[60%] h-full bg-white text-black p-12 shadow-md transform transition-transform duration-300 ease-in-out z-50 md:hidden `}
        style={getMenuStyles(menuOpened)}
      >
        {isHomePage ? (
          homeNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-lg font-medium hover:cursor-pointer"
              onClick={() => setMenuOpened(false)} // Close the menu on link click
            >
              {item.name}
            </a>
          ))
        ) : (
          <button
            onClick={() => navigate(-1)}
            className="text-black bg-gray-300 p-3 rounded-md shadow-md hover:bg-gray-400 transition-all w-full text-left"
          >
            Back
          </button>
        )}
      </div>
    </section>
  );
};

export default Header;
