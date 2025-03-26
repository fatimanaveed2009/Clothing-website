import React, { useState } from "react";
import Button from "./button";

interface CategoryFilterProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-lg transition-all text-lg font-medium ${
            selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
