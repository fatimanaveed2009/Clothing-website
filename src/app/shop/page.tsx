import React from "react";
import Image from "next/image";
import ToggleBar from "../components/toggle-section";
import Footer from "../components/Footer";
import ProductCards from "../components/product-listing";

const ProductList = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <header className="bg-gray-100 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shop</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            </li>
            <li>
              <a href="/product-list" className="text-gray-600 hover:text-gray-900">Shop</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Product Categories */}
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Image 1 */}
          <div className="bg-gray-100 text-center">
            <Image 
              src="/col-md-4(1).png"
              alt="Category 1" 
              width={205}
              height={223}
              className="mx-auto"
            />
            <h3 className="mt-2 text-lg font-semibold">Clothes</h3>
          </div>

          {/* Image 2 */}
          <div className="bg-gray-100 text-center">
            <Image 
              src="/col-md-4(2).png"
              alt="Category 2" 
              width={205}
              height={223}
              className="mx-auto"
            />
            <h3 className="mt-2 text-lg font-semibold">Clothes</h3>
          </div>

          {/* Image 3 */}
          <div className="bg-gray-100 text-center">
            <Image 
              src="/col-md-4(3).png"
              alt="Category 3" 
              width={205}
              height={223}
              className="mx-auto"
            />
            <h3 className="mt-2 text-lg font-semibold">Clothes</h3>
          </div>

          {/* Image 4 */}
          <div className="bg-gray-100 text-center">
            <Image 
              src="/col-md-4(4).png"
              alt="Category 4" 
              width={205}
              height={223}
              className="mx-auto"
            />
            <h3 className="mt-2 text-lg font-semibold">Clothes</h3>
          </div>

          {/* Image 5 */}
          <div className="bg-gray-100 text-center">
            <Image 
              src="/col-md-4(5).png"
              alt="Category 5" 
              width={205}
              height={223}
              className="mx-auto"
            />
            <h3 className="mt-2 text-lg font-semibold">Clothes</h3>
          </div>
        </div>
      </section>
<section>
  <ToggleBar/>
</section>

<section>
  <Image
  src="/container.png"
  alt="sponserer-pictures"
  width={1440}
  height={175}
  />
</section>
   
      {/* Footer */}
      <Footer/>
      <ProductCards/>
    </div>
  );
};

export default ProductList;
