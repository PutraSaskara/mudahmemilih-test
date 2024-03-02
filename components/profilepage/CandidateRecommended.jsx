import Image from "next/image";
import React from "react";

function CandidateRecommended() {
  return (
    <div className="my-14 hidden lg:block">
      <h1 className="text-2xl font-bold text-center mb-10">Recommended Candidate</h1>
      <div className="lg:flex items-center justify-center ">
        <div className="mx-auto px-5">
          <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <Image
              width={300}
              height={300} 
              className="w-full rounded-lg object-cover object-center"
              src="/political-profile-1.jpg"
              alt="product"
            />
            <p className="my-4 pl-4 font-bold text-gray-500">politician Name</p>
            <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">party politicians</p>
          </div>
        </div>
        <div className="mx-auto px-5">
          <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <Image
              width={300}
              height={300} 
              className="w-full rounded-lg object-cover object-center"
              src="/political-profile-1.jpg"
              alt="product"
            />
            <p className="my-4 pl-4 font-bold text-gray-500">politician Name</p>
            <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">party politicians</p>
          </div>
        </div>
        <div className="mx-auto px-5">
          <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <Image
              width={300}
              height={300} 
              className="w-full rounded-lg object-cover object-center"
              src="/political-profile-1.jpg"
              alt="product"
            />
            <p className="my-4 pl-4 font-bold text-gray-500">politician Name</p>
            <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">party politicians</p>
          </div>
        </div>
        <div className="mx-auto px-5">
          <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <Image
              width={300}
              height={300} 
              className="w-full rounded-lg object-cover object-center"
              src="/political-profile-1.jpg"
              alt="product"
            />
            <p className="my-4 pl-4 font-bold text-gray-500">Product Name</p>
            <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">party politicians</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateRecommended;
