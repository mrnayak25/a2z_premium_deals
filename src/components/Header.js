import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
import logo from '../images/logo_realstate.png';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? '0' : '-100%' };
    }
    return {}; // No specific styles for desktop
  };

  const navigation = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Post Property', href: '/sellProperty' },
  ];

  return (
    <section className="text-white z-[99]">
      <div className="flex justify-between items-center py-4 px-8">
        <img src={logo} alt="logo" width={50} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className={`md:flex gap-8 md:relative md:bg-transparent md:text-white md:flex-row md:gap-8 transition-all duration-300`}
            style={getMenuStyles(menuOpened)}
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:cursor-pointer"
                onClick={() => setMenuOpened(false)} // Close the menu on link click
              >
                {item.name}
              </a>
            ))}
          </div>
        </OutsideClickHandler>
        <div className="block md:hidden" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 w-[60%] h-full bg-white text-black p-12 shadow-md transform transition-transform duration-300 ease-in-out md:hidden`}
        style={getMenuStyles(menuOpened)}
      >
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block py-2 text-lg font-medium hover:cursor-pointer"
            onClick={() => setMenuOpened(false)} // Close the menu on link click
          >
            {item.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Header;
