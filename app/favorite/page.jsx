"use client"

import React, { useState, useEffect } from "react";
import ImageCarousel2 from "@/components/searchpage/ImageCarousel2";

const Page = () => {
  // State to hold the favorite items
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Retrieve the favorite items from localStorage
    const favoriteItems = localStorage.getItem("favorites");
    // Check if there are any favorite items stored
    if (favoriteItems) {
      // Parse the stored string back into an array
      const parsedFavorites = JSON.parse(favoriteItems);
      // Extract unique identifiers from favorite items
      const uniqueIds = Array.from(new Set(parsedFavorites.map(item => item.id)));
      // Map unique identifiers back to favorite items
      const uniqueFavorites = uniqueIds.map(id =>
        parsedFavorites.find(item => item.id === id)
      );
      // Log the entire parsed array to the console for debugging
      console.log("Unique Favorites:", uniqueFavorites);
      // Set the favorites state with the unique array
      setFavorites(uniqueFavorites);
    }
  }, []); // Empty dependency array means this effect runs once on mount

  const clearFavorites = () => {
    // Clear favorites from localStorage
    localStorage.removeItem("favorites");
    // Clear favorites from state
    setFavorites([]);
  };
  

  return (
    <div className="mt-32 mb-12">
        <h1 className="font-bold text-center my-3 text-xl">Caleg Favorit Mu</h1>
        <div className="flex ml-10 text-white">
        <button onClick={clearFavorites} className="bg-red-800 py-1 px-2 rounded-md my-10">Clear All Favorites</button>
        <div>
        </div>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-5">
        {favorites.length > 0 ? (
          favorites.map((item, index) => (
            // Assuming each item has a 'nama' property. Adjust as needed.
            <div key={index}>
              <ImageCarousel2
                src={`https://server.mudahmemilih.com/storage/images/calegs/${item.img_caleg}`}
                alt={item.nama}
                href={`/calegs/${item.slug}`}
                title={item.title}
                dapil={item.nama_dapil}
                name={item.nama}
                logoPartai={"/No_image.png"}
                partai={item.nama_partai}
                content={item.nama}
              />
            </div>
          ))
        ) : (
          <p>No favorites saved!</p>
        )}
      </div>
    </div>
  );
};

export default Page;
