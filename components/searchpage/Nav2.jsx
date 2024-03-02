"use client";

import { useState } from "react";
import PlaceHolderCards from "./PlaceHolderCards";


function Navigation({isLoadingDpr, isLoadingDprdProvinsi, isLoadingDprdKota, prop1, prop2, prop3}) {
  // const {visimisi, siapasaya, event} = props
  const [activeItem, setActiveItem] = useState("DPR");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <ul className="flex justify-between items-center py-2 border-b-2 mb-5 mt-5 lg:w-full lg:mx-auto lg:justify-start lg:gap-5 lg:px-">
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "DPR"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("DPR")}
        >
          <button>
            <p>DPR</p>
          </button>
        </li>
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "DPRD-PROVINSI"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("DPRD-PROVINSI")}
        >
          <button>
            <p>DPRD PROVINSI</p>
          </button>
        </li>
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "DPRD-Kota"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("DPRD-Kota")}
        >
          <button>
            <p>DPRD KOTA</p>
          </button>
        </li>
      </ul>
      
      {activeItem === "DPR" && (isLoadingDpr ? <PlaceHolderCards /> : prop1)}
      {activeItem === "DPRD-PROVINSI" && (isLoadingDprdProvinsi ? <PlaceHolderCards /> : prop2)}
      {activeItem === "DPRD-Kota" && (isLoadingDprdKota ? <PlaceHolderCards /> : prop3)}
    </div>
  );
}

export default Navigation;