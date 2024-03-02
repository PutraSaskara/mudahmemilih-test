"use clinet"


import React from 'react';

const StarRating = ({ count }) => {
  return (
    <div className="flex">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-yellow-500 ">★</span>
      ))}
    </div>
  );
};

const TestimonialCards = ({ data, className }) => {
  console.log(data); // Accept data as a prop
  return (
    <div className={`max-w-sm mx-auto bg-white rounded-3xl   border  shadow-xl p-3 ${className}`}>
      <StarRating count={data.stars} />
      <p className="text-gray-600 mt-4 text-left">{data.comment}</p>
      <div className="flex items-center mt-6">
        <img className="w-12 h-12 object-cover rounded-full mr-4" src={data.person.imageUrl} alt={data.person.name} />
        <div>
          <p className="text-lg font-semibold">{data.person.name}</p>
          <p className="text-sm text-gray-500">{data.person.job}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
