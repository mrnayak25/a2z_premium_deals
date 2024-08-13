import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
import logo from '../images/logo_realstate.png'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  const navigation = [
  //  { name: 'Home', href: './' },
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    {name:'Post Property' ,href:"/sellProperty"},
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
            className={`flex gap-8 ${menuOpened && "absolute top-12 right-16 bg-white flex-col text-black font-medium p-12 rounded-lg shadow-md transition-all duration-300"} md:flex-row md:relative md:bg-transparent md:text-white md:gap-8`}
            style={getMenuStyles(menuOpened)}
          >
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="hover:cursor-pointer">
                  {item.name}
                </a>
              ))}
          
          </div>
        </OutsideClickHandler>
        <div className="block md:hidden" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
