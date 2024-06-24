import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_realstate.png';

const navigation = [
  { name: 'About us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact us', href: '#contact' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div  >
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
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
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
              <a href="#property" className="text-sm font-semibold leading-6 text-gray-900">
                Property
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="/sellProperty" className="text-sm font-semibold leading-6 text-gray-900 p-1 outline">
                Post Your Property <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">A2Z Premium Deals</span>
                  <img className="h-8 w-auto" src={logo} alt="A2Z Premium Deals" />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#property"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Property
                    </a>
                    <a href="/sellProperty" className="text-sm font-semibold leading-6 text-gray-900 p-1 outline" onClick={() => setMobileMenuOpen(false)}>
                      Post Your Property <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div><br/>
      <div class=" mt-20">
        <div class="container bg-white shadow  text-black w-100  p-3 rounded-1">
          <ul class="d-flex justify-content-between">
            <li class="nav-item">
              <a class="nav-link" href="/explore?property_type=Agricultural+Land">Agricultural Lands</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/explore?property_type=Commercial+Land">Commercial Lands</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/explore?property_type=Commercial+Buildings">Commerical Buildings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/explore?property_type=Independent+House">Independent House</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/explore?property_type=Farm+Land">Farm Land</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/explore?property_type=Plots">Plots</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/explore?property_type=Residential+Land">Residential Land</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/explore?property_type=Residential+Layouts">Residential Layouts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}
