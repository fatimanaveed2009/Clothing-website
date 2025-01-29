import React from 'react';
import Button from '../components/button';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <main className="w-full max-w-6xl mx-auto text-center mt-12">
        <h2 className="text-sm font-medium text-gray-500">PRICING</h2>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Simple Pricing</h1>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="text-blue-900 font-semibold">Monthly</button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full">Yearly <span className="ml-2">Save 25%</span></button>
        </div>

        <div className="mt-12 flex flex-wrap items-stretch">
          {/* Free Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-1/3 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">FREE</h3>
            <p className="text-gray-600 mt-4">Organize across all apps by hand</p>
            <p className="text-2xl font-bold text-gray-800 mt-4">$0</p>
            <ul className="mt-6 space-y-2">
              <li className="text-gray-600">Unlimited product updates</li>
            </ul>
            <button className="bg-blue-900 text-white mt-6 px-4 py-2 rounded">Get Started</button>
          </div>

          {/* Standard Plan */}
          <div className="bg-blue-900 text-white shadow-lg rounded-lg p-6 w-1/3 border border-gray-200">
            <h3 className="text-lg font-semibold">STANDARD</h3>
            <p className="mt-4">Organize across all apps by hand</p>
            <p className="text-2xl font-bold mt-4">$9.99</p>
            <ul className="mt-6 space-y-2">
              <li>Unlimited product updates</li>
            </ul>
            <button className="bg-white text-blue-900 mt-6 px-4 py-2 rounded">Get Started</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-1/3 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">PREMIUM</h3>
            <p className="text-gray-600 mt-4">Organize across all apps by hand</p>
            <p className="text-2xl font-bold text-gray-800 mt-4">$19.99</p>
            <ul className="mt-6 space-y-2">
              <li className="text-gray-600">Unlimited product updates</li>
            </ul>
            <button className="bg-blue-900 text-white mt-6 px-4 py-2 rounded">Get Started</button>
          </div>
        </div>
      </main>

      <footer className="w-full bg-white shadow-md py-6 mt-12">
        <p className="text-gray-600 text-center">Trusted By Over 4000 Big Companies</p>
        <img src="/container.png" alt="sponsors" className="mx-auto" />
      </footer>
      
      <section>
        <img src="/div.png" alt="FAQs" />
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
      <Footer />
    </div>
  );
};

export default PricingPage;
