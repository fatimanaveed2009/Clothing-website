// Import React explicitly (if not already imported)

import React from "react";
import Link from "next/link";

<Link href="/product-list">Go to product-list</Link>
// Import your components
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
// Add other components like Team, About, Products, Contact, etc.

const HomePage = () => {
    return (
        <>
            <main>
                <section id="hero" className="bg-blue-500 text-white py-20">
                    <h1 className="text-4xl font-bold">Welcome to E-Commerce Store</h1>
                </section>
                <Pricing />
                {/* Other sections like Team, Contact, About */}
            </main>
            <Footer />
        </>
    );
};
// landing_page.jsx

import Head from 'next/head';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="A beautifully crafted landing page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Brand Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Features</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h2>
          <p className="text-lg mb-8">A beautiful and responsive landing page for your business.</p>
          <button className="px-6 py-3 bg-white text-blue-500 rounded-md font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Feature One</h3>
            <p>Describe the first feature of your product here.</p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Feature Two</h3>
            <p>Describe the second feature of your product here.</p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Feature Three</h3>
            <p>Describe the third feature of your product here.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Brand Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


