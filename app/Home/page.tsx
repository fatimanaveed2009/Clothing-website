import Image from "next/image";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import BlogSection from "../components/blog-post";



// Import other components as needed (e.g., Hero, Team, Contact)

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="text-white text-center py-20">
        <div className="relative">
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
            {/* Card 1 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <Image
                src="/Product card1.png"
                alt="Product 1"
                width={239}
                height={615}
                className="rounded-md mb-4"
              />
      
            </div>         
    

                {/*card 2*/}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <Image
                src="/Product card2.png"
                alt="Product 2"
                width={239}
                height={615}
                className="rounded-md mb-4"
              />
             
            </div>


               {/*Card 3 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <Image
                src="/Product card3.png"
                alt="Product 1"
                width={239}
                height={615}
                className="rounded-md mb-4"
              />
              
            </div>


              {/*Card 4*/}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <Image
                src="/Product card4.png"
                alt="Product 1"
                width={239}
                height={615}
                className="rounded-md mb-4"
              />
              
            </div>


            {/*Card 5 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <Image
                src="/Product card5.png"
                alt="Product 1"
                width={239}
                height={615}
                className="rounded-md mb-4"
              />
              
            </div>


             {/*Card 6 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <Image
                src="/Product card6.png"
                alt="Product 1"
                width={239}
                height={615}
                className="rounded-md mb-4"
              />
              
            </div>


             {/*card 7*/ }
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <Image
                src="/Product card7.png"
                alt="Product 1"
                width={239}
                height={615}
                className="rounded-md mb-4"
              />
             
            </div>


            {/*card 8*/}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <Image
                src="/Product card8.png"
                alt="Product 1"
                width={239}
                height={615}
                className="rounded-md mb-4"
              />
              
            </div>
            
          </div>
        </div>
      </section>
      <section>
      <img
        src="/carousel-item.png"
        alt="image"
        width="1440px"
        height="709px"
        />
      </section>
      <section>
        <img
        src="/row.png"
        alt="image"
        width="1,439px"
        height="682px"
        />
      </section>
      
      <BlogSection />
      {/* Footer */}
      <Footer />
    </>
  );
}
