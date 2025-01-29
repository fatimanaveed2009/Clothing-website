// Footer.tsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          {/* Brand */}
          <h2 className="text-2xl font-bold text-black-600 bg-#FAFAFA">Bandage</h2>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-5 gap-6 text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Company Info
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are Hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are Hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Features
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Resources
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Get In Touch
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8 text-gray-500">
          Made with Love by Finland All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
