import React from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Footer from "../components/Footer";

const ProductDetails = () => {
  return (
    <section className="container mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:text-gray-700">Home</a> <span>/</span>
        <a href="/shop" className="hover:text-gray-700"> Shop</a> <span>/</span>
        <span className="text-gray-700"> Bandage</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column (Image Placeholder) */}
        <div className="bg-gray-100 h-96 flex items-center justify-center">
          <img src="carousel-inner.png" alt="Product Carousel" className="object-cover h-full w-full" />
        </div>

        {/* Right Column (Product Details) */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Floating Phone</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">10 Reviews</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">$1,139.33</p>
          <p className="text-green-600 font-semibold mb-2">In Stock</p>
          <p className="text-gray-600 mb-4">
            Met minimy Mollie non desert Alamo sit est cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie.
          </p>

          {/* Color Options */}
          <div className="flex items-center space-x-2 mb-4">
            <button className="w-6 h-6 bg-red-500 rounded-full border border-gray-300"></button>
            <button className="w-6 h-6 bg-green-500 rounded-full border border-gray-300"></button>
            <button className="w-6 h-6 bg-blue-500 rounded-full border border-gray-300"></button>
            <button className="w-6 h-6 bg-yellow-500 rounded-full border border-gray-300"></button>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Select Options
            </button>
            <button className="p-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="p-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-t border-gray-200">
        <div className="flex justify-center space-x-8 text-gray-600 text-sm mt-4">
          <button className="font-semibold border-b-2 border-blue-600 text-blue-600">Description</button>
          <button className="hover:text-blue-600">Additional Information</button>
          <button className="hover:text-blue-600">Reviews (0)</button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-1 flex justify-center">
            <img src="/description.png" alt="Description Image" className="object-cover rounded-lg shadow-lg" />
          </div>
          <div className="col-span-2 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <h2 className="text-lg font-semibold mb-2">The quick fox jumps over</h2>
                <p className="text-gray-600">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
                  door ENIM RELIT Mollie.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                {/* Card 1 */}
                <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
                  <div className="relative w-full h-[350px]">
                    <img
                      src="/product1.png"
                      alt="product 1"
                      width={238}
                      height={350}
                      className="object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Card 1</h3>
                  </div>
                </div>
        
                {/* Card 2 */}
                <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
                  <div className="relative w-full h-[350px]">
                    <img
                      src="/product2.png"
                      alt="product 2"
                      width={238}
                      height={350}
                      className="object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Card 2</h3>
                  </div>
                </div>
        
                {/* Card 3 */}
                <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
                  <div className="relative w-full h-[350px]">
                    <img
                      src="/product3.png"
                      alt="product 3"
                      width={238}
                      height={350}
                      className="object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Card 3</h3>
                  </div>
                </div>
        
                {/* Card 4 */}
                <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
                  <div className="relative w-full h-[350px]">
                    <img
                      src="/product4.png"
                      alt="product 4"
                      width={238}
                      height={350}
                      className="object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Card 4</h3>
                  </div>
                </div>
        
                {/* Card 5 */}
                <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
                  <div className="relative w-full h-[350px]">
                    <img
                      src="/product5.png"
                      alt="product 5"
                      width={238}
                      height={350}
                      className="object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Card 5</h3>
                  </div>
                </div>
        
                {/* Card 6 */}
                <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
                  <div className="relative w-full h-[350px]">
                    <img
                      src="/product6.png"
                      alt="product 6"
                      width={238}
                      height={350}
                      className="object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Card 6</h3>
                  </div>
                </div>
        
                {/* Card 7 */}
                <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
                  <div className="relative w-full h-[350px]">
                    <img
                      src="/product7.png"
                      alt="product 7"
                      width={238}
                      height={350}
                      className="object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Card 7</h3>
                  </div>
                </div>
        
                {/* Card 8 */}
                <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
                  <div className="relative w-full h-[350px]">
                    <img
                      src="/product8.png"
                      alt="product 8"
                      width={238}
                      height={350}
                      className="object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Card 8</h3>
                  </div>
                </div> 
                <section >
                <img
                src="/desktop-clients-1.png"
                alt="image"
                width="1440px"
                height="175px"
                />  
                </section> 
        </div>
        <Footer />
  </section>

       
    
  );
};


export default ProductDetails;
