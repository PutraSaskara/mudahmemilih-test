import React from "react";

function EventHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
            Designed for you to get more
            <span className="text-blue-600">simple</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            Build your business here. Take it anywhere.
          </p>
        </div>

        <div className="mt-10 relative max-w-5xl mx-auto">
          <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

          <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg ">
            <div className="bg-white w-48 h-48 rounded-lg "></div>
          </div>

          <div class="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div class="bg-white w-48 h-48 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHero;
