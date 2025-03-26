"use client"

import React, { useState } from "react";

const ToggleBar = () => {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <section>
    <div className="w-full bg-white border-b border-gray-300 py-4 px-6 flex items-center justify-between">
      {/* Results Info */}
      <div className="text-gray-600 text-sm">
        Showing all <span className="font-medium">12 results</span>
      </div>

      {/* View Toggle */}
      <div className="flex items-center gap-4">
        {/* Grid View */}
        <button
          onClick={() => setView("grid")}
          className={`flex items-center justify-center w-8 h-8 border ${
            view === "grid" ? "border-blue-500 text-blue-500" : "border-gray-300"
          } rounded-md`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </button>

        {/* List View */}
        <button
          onClick={() => setView("list")}
          className={`flex items-center justify-center w-8 h-8 border ${
            view === "list" ? "border-blue-500 text-blue-500" : "border-gray-300"
          } rounded-md`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Sorting and Filter */}
      <div className="flex items-center gap-4">
        {/* Sort Dropdown */}
        <select className="border border-gray-300 text-gray-600 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="popularity">Popularity</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="new-arrivals">New Arrivals</option>
        </select>

        {/* Filter Button */}
        <button className="flex items-center justify-center bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-600">
          Filter
        </button>
      </div>
    </div>
    </section>
  );
};

export default ToggleBar;
