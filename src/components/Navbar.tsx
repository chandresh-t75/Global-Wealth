"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';



const Navbar= () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[100%] bg-white fixed z-[30] mb-4 shadow-xl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-10">
        <div className="flex justify-between h-16">
        <div className="w-full flex flex-row sm:justify-between gap-4 items-center">
            <div className=" flex items-center">
              <Link href="/">
                
                  {/* <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="block lg:hidden h-8 w-auto"
                  /> */}
                  <h1 className='bold text-[20px] text-[#C4AB7C] '>Global Wealth</h1>
                  
              </Link>
            </div>
            <div className="hidden sm:-my-px  sm:flex sm:space-x-10">
              <Link href="/"  className="text-[14px] md:text-[18px] font-medium text-[#C4AB7C] hover:text-gray-300">
                  Home
                
              </Link>
              <Link href="#about"  className=" text-[14px] md:text-[18px]  font-medium text-[#C4AB7C] hover:text-gray-300">
                  About
            
              </Link>
              <Link href="#service" className=" text-[14px] md:text-[18px]  font-medium text-[#C4AB7C] hover:text-gray-300">
                  Services
                
              </Link>
              <Link href="#faq" className=" text-[14px] md:text-[18px]  font-medium text-[#C4AB7C] hover:text-gray-300">
                  FAQs
                
              </Link>
              <Link href="#contact" className="text-[14px] md:text-[18px]   font-medium text-[#C4AB7C] hover:text-gray-300">
                  Contact Us
            
              </Link>
            </div>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#C4AB7C] hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                    d="M4 6h16M4 12h16m-7 6h7"
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

      {isOpen && (
        <div className="sm:hidden bg-[#123352]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-[#C4AB7C] hover:text-gray-300">Home
            </Link>
            <Link href="#about"className="block px-3 py-2 rounded-md text-base font-medium text-[#C4AB7C] hover:text-gray-300">About
            </Link>
            <Link href="#service" className="block px-3 py-2 rounded-md text-base font-medium text-[#C4AB7C] hover:text-gray-300">Services
            </Link>
            <Link href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-[#C4AB7C] hover:text-gray-300">FAQs
            </Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-[#C4AB7C] hover:text-gray-300">Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
