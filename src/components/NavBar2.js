import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo_realstate.png';

const navigation = [
    { name: 'Home', href: './' },
];

function NavBar2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <div className="px-6 pt-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex lg:flex-1">
                                <Link to="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">A2Z Premium Deals</span>
                                    <img className="h-11 w-auto" src={logo} alt="A2Z Premium Deals" />
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
                            <nav className="hidden lg:flex lg:gap-x-12">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                    {mobileMenuOpen && (
                        <div className="fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                                    <i className="fa-solid fa-x h-6 w-6" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="mt-6">
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
                                </div>
                            </div>
                        </div>
                    )}
                </header>
            </div>
        </>
    );
}

export default NavBar2;
