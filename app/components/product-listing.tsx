import React from "react";
import Image from "next/image";

const ProductGrid = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {/* Card 1 */}
        <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
          <div className="relative w-full h-[350px]">
            <Image
              src="/card1.png"
              alt="Card 1"
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
            <Image
              src="/card2.png"
              alt="Card 2"
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
            <Image
              src="/card3.png"
              alt="Card 3"
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
            <Image
              src="/card4.png"
              alt="Card 4"
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
            <Image
              src="/card5.png"
              alt="Card 5"
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
            <Image
              src="/card6.png"
              alt="Card 6"
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
            <Image
              src="/card7.png"
              alt="Card 7"
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
            <Image
              src="/card8.png"
              alt="Card 8"
              width={238}
              height={350}
              className="object-cover rounded-t-md"
            />
          </div>
          <div className="flex-grow p-4">
            <h3 className="text-lg font-semibold text-gray-800">Card 8</h3>
          </div>
        </div>

        {/* Card 9 */}
        <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
          <div className="relative w-full h-[350px]">
            <Image
              src="/card9.png"
              alt="Card 9"
              width={238}
              height={350}
              className="object-cover rounded-t-md"
            />
          </div>
          <div className="flex-grow p-4">
            <h3 className="text-lg font-semibold text-gray-800">Card 9</h3>
          </div>
        </div>

        {/* Card 10 */}
        <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
          <div className="relative w-full h-[350px]">
            <Image
              src="/card10.png"
              alt="Card 10"
              width={238}
              height={350}
              className="object-cover rounded-t-md"
            />
          </div>
          <div className="flex-grow p-4">
            <h3 className="text-lg font-semibold text-gray-800">Card 10</h3>
          </div>
        </div>

        {/* Card 11 */}
        <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
          <div className="relative w-full h-[350px]">
            <Image
              src="/card11.png"
              alt="Card 11"
              width={238}
              height={350}
              className="object-cover rounded-t-md"
            />
          </div>
          <div className="flex-grow p-4">
            <h3 className="text-lg font-semibold text-gray-800">Card 11</h3>
          </div>
        </div>

        {/* Card 12 */}
        <div className="border rounded-lg shadow w-[238px] h-[488px] flex flex-col">
          <div className="relative w-full h-[350px]">
            <Image
              src="/card12.png"
              alt="Card 12"
              width={238}
              height={350}
              className="object-cover rounded-t-md"
            />
          </div>
          <div className="flex-grow p-4">
            <h3 className="text-lg font-semibold text-gray-800">Card 12</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
