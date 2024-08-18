import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo_realstate.png';
import { useAuth } from '../firebase';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
     // eslint-disable-next-line no-restricted-globals
      var conf = confirm("Are you sure you want to log out?");
      if (conf === true) {
        await logout();
        navigate('/a2z-admin');
      }
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white p-2 flex flex-col">
      <header className="absolute inset-x-0 top-7 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">A2Z Premium Deals</span>
              <img className="h-14 w-auto" src={logo} alt="A2Z Premium Deals" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fa-solid fa-bars h-6 w-6" aria-hidden="true"></i>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/a2z-admin/" className="text-sm font-semibold leading-6 text-gray-900">
              View Properties
            </Link>
            <Link to="/a2z-admin/feedback" className="text-sm font-semibold leading-6 text-gray-900">
              View Feedback
            </Link>
            <Link to="/a2z-admin/add" className="text-sm font-semibold leading-6 text-gray-900">
              Add Properties
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <img
              src='https://cdn2.iconfinder.com/data/icons/interface-essentials-1-2/24/logout--logout-frame-leave-exit-arrow-right-circle-512.png'
              alt='logout'
              className='float-right h-7 cursor-pointer'
              onClick={handleLogout}
            />
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={handleMobileLinkClick}>
                <span className="sr-only">A2Z Premium Deals</span>
                <img className="h-8 w-auto" src={logo} alt="A2Z Premium Deals" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <i className="fa-solid fa-x h-6 w-6" aria-hidden="true"></i>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link to="/a2z-admin" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={handleMobileLinkClick}>
                    View Properties
                  </Link>
                  <Link to="/a2z-admin/feedback" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={handleMobileLinkClick}>
                    View Feedback
                  </Link>
                  <Link to="/a2z-admin/add" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={handleMobileLinkClick}>
                    Add Properties
                  </Link>
                </div>
                <div className="py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => { handleMobileLinkClick(); setMobileMenuOpen(false); }}
                  >
                    A2Z Premium Deals
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <footer className="fixed bottom-0 left-0 z-10 w-full text-center bg-black text-white">
        Build By SVVAAP Team
      </footer>
    </div>
  );
}
