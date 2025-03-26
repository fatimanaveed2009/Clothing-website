// Pricing.tsx
import React from "react";

// If your Pricing section has no props, you can define it as React.FC (React Function Component).
const Pricing: React.FC = () => {
  return (
    <section className="pricing bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">EDITOR`S PICK</h3>
        <p>Problems trying to resolve the conflict between </p>
        <div className="flex justify-center space-x-6">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <img
          src="/card-item.png" 
        alt="example picture" 
        width="510px"
        height="500px"
      />
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-64">
            <img 
            src="/col-md-3.png"
            alt="example image"
            width="240px"
            height="500px"
            />
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-64 p-20px" >
            <img 
            src="/filter.png"
            alt="example image"
            width="239px"
            height="242px"
            margin-right="1px"
            flex-direction="column"
            />
          
            <img 
            src="/media bg-cover.png"
            alt="example image"
            width="240px"
            height="220px"
            flex-direction="column"
            />
          </div>
        </div>

        
      </div>
    </section>
    
  );
};

export default Pricing;
