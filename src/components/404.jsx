// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo_realstate.png";

const NotFound = () => {
    return (
        <>
            <section className=" dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">


                <div className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">404 Error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl">Page Not Found</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">Sorry, the page you're looking for doesn't exist. Here are some helpful links:</p>

                        <div className="flex justify-center lg:justify-start items-center mt-6 gap-x-3 text-black">
                            <Link
                                to="/"
                                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border border-gray-300 rounded-lg gap-x-2 sm:w-auto dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-700 hover:bg-gray-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 rtl:rotate-180"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span className='text-black'>Go Back</span>
                            </Link>

                            <a
                                href="/"
                                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
                            >
                                Take Me To A2zpremiumdeals.com
                            </a>
                        </div>
                    </div>


                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0 flex flex-col justify-center items-center">
                        <img className="md:w-1/4 w-1/2 mb-4" src={logo} alt="jobhunt4u logo" />
                        <img className="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="Illustration" />
                    </div>

                </div>
            </section>



        </>
    );
};

export default NotFound;
