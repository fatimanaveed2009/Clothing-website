import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

// Import other components as needed (e.g., Hero, Team, Contact)

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-blue-500 text-white text-center py-20"
        >
          <h1 className="text-4xl font-bold">Welcome to Our E-Commerce Store</h1>
          <p className="mt-4 text-lg">
            Explore the best products tailored just for you.
          </p>
        </section>

        {/* Pricing Section */}
        <Pricing />

        {/* Other Sections (e.g., Team, About, Contact) */}
        {/* Example */}
        <section id="team" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
            <p className="text-lg">
              A group of dedicated professionals behind our success.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
