// Navbar.tsx
import React from "react";

// If your Navbar has no props, you can define it as React.FC (React Function Component).
const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">E-Commerce Store</h1>
        <ul className="flex space-x-6">
          <li className="text-white">Home</li>
          <li className="text-white">Products</li>
          <li className="text-white">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar