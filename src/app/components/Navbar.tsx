// components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from './search-bar';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Search query:", query);
    // Implement your search logic here
  };

  return (
    <div>
      <div className='flex w-full h-[46px] bg-[#23856D] pt-3 pb-3 pl-5'>
        <img src='./Vector.png' className='w-[16px] h-[16px]' alt="Vector Icon" />
        <span className='text-white text-sm font-bold pl-1'>(225) 555-0118</span>
        <img src='./icn settings icn-xs.png' className='w-[16px] h-[16px] pl-6' alt="Settings Icon" />
        <span className='text-white text-sm font-bold pl-1'>email@example.com</span>
        <span className='text-white text-sm font-bold pl-60'>Follow Us and get a chance to win 80% off</span>
        <span className='text-white text-sm font-bold pl-40'>Follow Us:</span>
      </div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="w-187px h-58px mx-38px">Bandage</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/Home" className="mr-5 hover:text-gray-900">Home</Link>
            <Link href="/shop" className="mr-5 hover:text-gray-900">Shop</Link>
            <Link href="/categories" className="mr-5 hover:text-gray-900">Categories</Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
            <Link href="/pricing" className="mr-5 hover:text-gray-900">Pricing</Link>
            <Link href="/BestProducts" className="mr-5 hover:text-gray-900">Products</Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
          </nav>
          <SearchBar onSearch={handleSearch} />
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login/Register
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};  
const Header: React.FC = () => {
    return (
      <header className="text-gray-600 body-font">
        {/* Header content */}
      </header>
    );
  };


export default Navbar;
export { Header };