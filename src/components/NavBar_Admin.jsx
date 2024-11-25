import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo_realstate.png';
import { useAuth } from '../firebase';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/a2z-admin'); // Default active link
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      var conf = confirm("Are you sure you want to log out?");
      if (conf === true) {
        await logout();
        navigate('/a2z-admin');
      }
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="flex flex-col rounded-lg m-3">
      <header className="bg-blue-100 rounded-lg">
        <div className="bg-blue-950 rounded-lg p-2">
          <h1 className='text-center font-bold text-2xl text-yellow-100'>Admin Console</h1>
        </div>
        <nav className="flex items-center justify-between p-2 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
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
            {/* Links with conditional class */}
            <Link
              to="/a2z-admin/"
              className={`text-sm font-semibold leading-6 text-gray-900 ${
                activeLink === '/a2z-admin/' ? 'bg-gray-300 rounded-lg px-3 py-2' : ''
              }`}
              onClick={() => handleLinkClick('/a2z-admin/')}
            >
              View Properties
            </Link>
            <Link
              to="/a2z-admin/feedback"
              className={`text-sm font-semibold leading-6 text-gray-900 ${
                activeLink === '/a2z-admin/feedback' ? 'bg-gray-300 rounded-lg px-3 py-2' : ''
              }`}
              onClick={() => handleLinkClick('/a2z-admin/feedback')}
            >
              View Feedback
            </Link>
            <Link
              to="/a2z-admin/add"
              className={`text-sm font-semibold leading-6 text-gray-900 ${
                activeLink === '/a2z-admin/add' ? 'bg-gray-300 rounded-lg px-3 py-2' : ''
              }`}
              onClick={() => handleLinkClick('/a2z-admin/add')}
            >
              Add Properties
            </Link>
            <Link
              to="/a2z-admin/site-content"
              className={`text-sm font-semibold leading-6 text-gray-900 ${
                activeLink === '/a2z-admin/add' ? 'bg-gray-300 rounded-lg px-3 py-2' : ''
              }`}
              onClick={() => handleLinkClick('/a2z-admin/site-content')}
            >
             Site Content
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
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => handleLinkClick('/')}>
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
                  <Link
                    to="/a2z-admin"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                      activeLink === '/a2z-admin' ? 'bg-gray-300' : ''
                    }`}
                    onClick={() => handleLinkClick('/a2z-admin')}
                  >
                    View Properties
                  </Link>
                  <Link
                    to="/a2z-admin/feedback"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                      activeLink === '/a2z-admin/feedback' ? 'bg-gray-300' : ''
                    }`}
                    onClick={() => handleLinkClick('/a2z-admin/feedback')}
                  >
                    View Feedback
                  </Link>
                  <Link
                    to="/a2z-admin/add"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                      activeLink === '/a2z-admin/add' ? 'bg-gray-300' : ''
                    }`}
                    onClick={() => handleLinkClick('/a2z-admin/add')}
                  >
                    Add Properties
                  </Link>
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
