// Import React explicitly (if not already imported)
import React from "react";

// Import your components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
// Add other components like Team, About, Products, Contact, etc.

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section id="hero" className="bg-blue-500 text-white text-center py-20">
                    <h1 className="text-4xl font-bold">Welcome to E-Commerce Store</h1>
                </section>
                <Pricing />
                {/* Other sections like Team, Contact, About */}
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
