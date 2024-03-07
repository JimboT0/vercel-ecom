import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

function MiniNav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div >
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (

                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>








                <Transition
                    show={isOpen}

                >

                    {(ref) => (
                        <div className="fixed top-20 left-5  h-100 w-1/4 bg-white p-4 rounded-xl" id="mobile-menu">
                            <div ref={ref} className="">

                                <div className="flex items-center justify-between" id="mobile-menu">


                                    <div>

                                        <a
                                            href="#"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-5 py-2 rounded-md text-base font-medium"
                                        >
                                            Home
                                        </a>

                                        <a
                                            href="/about"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-5 py-2 rounded-md text-base font-medium"
                                        >
                                            About
                                        </a>

                                        <a
                                            href="/shop"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-5 py-2 rounded-md text-base font-medium"
                                        >
                                            Shop
                                        </a>

                                        <a
                                            href="/blog"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-5 py-2 rounded-md text-base font-medium"
                                        >
                                            Blog
                                        </a>

                                        <a
                                            href="/contact"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-5 py-2 rounded-md text-base font-medium"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default MiniNav;
