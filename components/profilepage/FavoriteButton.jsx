"use client";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const FavoriteButton = ({ params, onClick }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleClickFavorite = () => {
    // Add new favorite to the existing favorites array
    const updatedFavorites = [...favorites, params];
    // Store updated favorites array in localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    // Update state to reflect the change
    setFavorites(updatedFavorites);
    console.log("Added to favorites:", params);
  };

  return (
    <div>
      <div
        className="flex items-center gap-2 border-2 border-black rounded-xl px-4 hover:transform  hover:scale-110 focus:shadow-sm focus:bg-primary focus:text-white focus:shadow-black focus:transform focus:scale-110 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 transition-transform text-black bg-white"
        onClick={handleClickFavorite}
        role="button"
        tabIndex={0}
        
      >
        <div
          className="rounded-full p-2 m-1 hover:shadow-sm hover:shadow-black "
          tabIndex={0}
        >
          <FaRegHeart size={25} className="my-auto" />
        </div>
          <p>Tambahkan Favorit</p>

        {/* <h3 className="text-[#7B7B7B]">Simpan ke Favorit</h3> */}
      </div>
    </div>
  );
};

export default FavoriteButton;
