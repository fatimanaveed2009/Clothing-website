"use client"
import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import BlogSection from "../components/blog-post";
import ProductCards from "../../products/page";


// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function HomePage() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const products: Product[] = [
    { id: 1, name: "Product1", price: 50, image: "/Product card1.png" },
    { id: 2, name: "Product2", price: 50, image: "/Product card2.png" },
    { id: 3, name: "Product3", price: 50, image: "/Product card3.png" },
    { id: 4, name: "Product4", price: 50, image: "/Product card4.png" },
    { id: 5, name: "Product5", price: 50, image: "/Product card5.png" },
    { id: 6, name: "Product6", price: 50, image: "/Product card6.png" },
    { id: 7, name: "Product7", price: 50, image: "/Product card7.png" },
    { id: 8, name: "Product8", price: 50, image: "/Product card8.png" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="text-white text-center bg-color-white py-20">
        <div className="relative bg-white">
          <img
            src="/carousel 1.png"
            alt="Styled Image"
            className="w-full h-[716px] object-cover"
          />
        </div>
        <p className="mt-4 text-lg">Explore the best products tailored just for you.</p>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h4 className="text-lg text-gray-600">Featured Products</h4>
          <h2 className="text-3xl font-semibold mb-4">BESTSELLER PRODUCTS</h2>
          <p className="text-gray-500 mb-12">
            Problems trying to resolve the conflict between
          </p>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={239}
                  height={615}
                  className="rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-sm text-gray-500 mb-2">Product Details</p>
                <p className="text-blue-500 font-bold">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary (optional display of cart count) */}
      <section className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <h4 className="text-lg">Items in Cart: {cart.length}</h4>
          {/* You can display cart details here if needed */}
        </div>
      </section>

      <ProductCards />

      <section>
        <img src="/carousel-item.png" alt="image" width="1440px" height="709px" />
      </section>

      <section>
        <img src="/row.png" alt="image" width="1,439px" height="682px" />
      </section>

      <BlogSection />
      {/* Footer */}
      <Footer />
    </>
  );
}