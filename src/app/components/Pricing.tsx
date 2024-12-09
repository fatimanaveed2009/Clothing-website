// Pricing.tsx
import React from "react";

// If your Pricing section has no props, you can define it as React.FC (React Function Component).
const Pricing: React.FC = () => {
  return (
    <section className="pricing bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Pricing Plans</h2>
        <div className="flex justify-center space-x-6">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Basic Plan</h3>
            <p className="my-4">Some features of the Basic Plan</p>
            <p className="text-lg font-bold">$19.99/month</p>
            <button className="mt-4 bg-blue-700 text-white py-2 px-6 rounded">Subscribe</button>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Pro Plan</h3>
            <p className="my-4">Some features of the Pro Plan</p>
            <p className="text-lg font-bold">$39.99/month</p>
            <button className="mt-4 bg-blue-700 text-white py-2 px-6 rounded">Subscribe</button>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Premium Plan</h3>
            <p className="my-4">Some features of the Premium Plan</p>
            <p className="text-lg font-bold">$59.99/month</p>
            <button className="mt-4 bg-blue-700 text-white py-2 px-6 rounded">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
