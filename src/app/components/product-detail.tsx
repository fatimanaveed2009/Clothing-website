import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Button from "./button";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    images: string[];
    rating: number;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-5xl mx-auto">
      {/* Product Images */}
      <div>
        <Image
          src={selectedImage}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="flex mt-4 space-x-2">
          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="Thumbnail"
              width={80}
              height={80}
              className={`cursor-pointer border-2 rounded-md transition-all ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < product.rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex items-center space-x-2 mb-6">
          {product.discountPrice ? (
            <>
              <span className="text-xl font-semibold text-red-500">${product.discountPrice}</span>
              <span className="text-lg text-gray-500 line-through">${product.price}</span>
            </>
          ) : (
            <span className="text-xl font-semibold">${product.price}</span>
          )}
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
