import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Button from '../components/button';
import Footer from '../components/Footer';

const ProductsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Innovation Section */}
      <section className="text-center mb-12">
        <h2 className="text-sm font-medium text-gray-500">WHAT WE DO</h2>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Innovation tailored for you</h1>
        <p className="text-gray-600 mt-2">Home &bull; Team</p>
        <img
        src="/hero-picture.png"
        alt="introductory-images"
        />
      </section>
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">MEET OUR TEAM</h1>

      {/* Products Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div id="member-1" className="bg-gray-100 p-4 rounded-lg shadow">
          <img src="/member1.png" alt="member 1" className="w-full rounded" />
        </div>
        <div id="member-2" className="bg-gray-100 p-4 rounded-lg shadow">
          <img src="/member2.png" alt="member 2" className="w-full rounded" />
        </div>
        <div id="member-3" className="bg-gray-100 p-4 rounded-lg shadow">
          <img src="/member3.png" alt="member 3" className="w-full rounded" />
        </div>
        <div id="member-4" className="bg-gray-100 p-4 rounded-lg shadow">
          <img src="/member4.png" alt="member 4" className="w-full rounded" />
        </div>
        <div id="member-5" className="bg-gray-100 p-4 rounded-lg shadow">
          <img src="/member5.png" alt="member 5" className="w-full rounded" />
        </div>
        <div id="member-6" className="bg-gray-100 p-4 rounded-lg shadow">
          <img src="/member6.png" alt="member 6" className="w-full rounded" />
        </div>
        <div id="member-7" className="bg-gray-100 p-4 rounded-lg shadow">
          <img src="/member7.png" alt="member 7" className="w-full rounded" />
        </div>
        <div id="member-8" className="bg-gray-100 p-4 rounded-lg shadow">
          <img src="/member8.png" alt="member 8" className="w-full rounded" />
        </div>
        <div id="member-9" className="bg-gray-100 p-4 rounded-lg shadow">
          <img src="/member9.png" alt="member 9" className="w-full rounded" />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Start your <span className="text-blue-600">14 days free trial</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-lg">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </p>
        <div className="mt-6">
          <Button>Try it free now</Button>
        </div>
        <div className="flex space-x-4 mt-8">
          <a href="#" className="text-blue-500 text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-blue-700 text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-900 text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-700 text-xl">
            <FaLinkedinIn />
          </a>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ProductsPage;
