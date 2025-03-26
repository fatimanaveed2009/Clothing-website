'use client';

import React from 'react';
import { FaPlay } from 'react-icons/fa';
import Button from '../components/button';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-white px-6 py-12 md:px-16 md:py-24 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-sm font-semibold text-gray-500">ABOUT COMPANY</h3>
          <h2 className="text-4xl font-bold text-black mt-2">ABOUT US</h2>
          <p className="text-gray-700 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700">
            Get Quote Now
          </button>
        </div>

        {/* Right Section - Image Placeholder */}
        <div className="md:w-1/2">
          <img src="/About1.png" alt="About Us" className="w-full h-auto" />
        </div>
      </div>

      {/* Highlighted Box Section */}
      <div className="mt-16 w-full max-w-4xl mx-auto border border-gray-300 p-6 bg-white shadow-sm">
        <h4 className="text-red-500 text-sm font-semibold">Problems trying</h4>
        <p className="mt-2 text-lg font-bold text-black">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <p className="text-gray-700 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Stats Section */}
      <div className="mt-16 flex flex-wrap justify-center md:justify-between gap-6 text-center md:text-left">
        <div className="w-40">
          <h3 className="text-2xl font-bold text-black">15K</h3>
          <p className="text-gray-700">Happy Customers</p>
        </div>
        <div className="w-40">
          <h3 className="text-2xl font-bold text-black">150K</h3>
          <p className="text-gray-700">Monthly Visitors</p>
        </div>
        <div className="w-40">
          <h3 className="text-2xl font-bold text-black">15</h3>
          <p className="text-gray-700">Countries Worldwide</p>
        </div>
        <div className="w-40">
          <h3 className="text-2xl font-bold text-black">100+</h3>
          <p className="text-gray-700">Top Partners</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-16 w-full max-w-4xl mx-auto relative">
        <div
          className="w-full h-80 bg-cover bg-center shadow-md flex items-center justify-center relative"
          style={{ backgroundImage: 'url(/video-card.png)' }}
        >
          <div className="w-14 h-14 bg-black text-white flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 rounded-full">
            <FaPlay size={20} />
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="mt-16 w-full max-w-4xl mx-auto border border-gray-300 p-8 bg-white shadow-sm text-center">
        <h3 className="text-2xl font-bold text-black">Meet Our Team</h3>
        <p className="text-gray-700 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {/* Team Member 1 */}
          <div className="w-40 text-center">
            <img src="/team1.png" alt="Team Member" className="w-40 h-40 object-cover" />
            <h4 className="text-lg font-bold text-black mt-2">Username</h4>
            <p className="text-gray-700">Profession</p>
          </div>
          {/* Team Member 2 */}
          <div className="w-40 text-center">
            <img src="/team2.png" alt="Team Member" className="w-40 h-40 object-cover" />
            <h4 className="text-lg font-bold text-black mt-2">Username</h4>
            <p className="text-gray-700">Profession</p>
          </div>
          {/* Team Member 3 */}
          <div className="w-40 text-center">
            <img src="/team3.png" alt="Team Member" className="w-40 h-40 object-cover" />
            <h4 className="text-lg font-bold text-black mt-2">Username</h4>
            <p className="text-gray-700">Profession</p>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <section>
        <img src="/About-desktop-client.png" alt="sponsors" className="w-full h-auto" />
      </section>

      {/* Final Section */}
      <section className='w-590px h-640px'>
        <div className="flex items-center justify-center h-screen bg-blue-500">
          <div className="p-8 bg-blue-600 text-white rounded-lg shadow-lg max-w-md float-left">
            <h4 className="text-sm font-semibold mb-2 tracking-wide">WORK WITH US</h4>
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">Now Let’s grow Yours</h1>
            <p className="text-sm mb-6 leading-relaxed">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
            </p>
            <Button className="mt-4 px-6 py-3 bg-blue text-blue-600 font-semibold shadow-md hover:bg-blue-100">
              Button
            </Button>
          </div>
          <div className="float-right">
            <img src="/side-image.png" alt="side image" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
