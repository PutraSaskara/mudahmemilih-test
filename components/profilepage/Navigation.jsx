"use client";
import Link from "next/link";
import VisiMisi from './VisiMisi'
import SiapaSaya from './SiapaSaya'
import EventStyle from './EventStyle'
import { useState } from "react";
import EventData from './eventdata.json'

function Navigation() {
  // const {visimisi, siapasaya, event} = props
  const [activeItem, setActiveItem] = useState("/profile");

  const visi = <VisiMisi/>
  const siapa = <SiapaSaya/>
  const eventStyles = EventData.map((item, index) => (
    <div key={index}>
      <EventStyle
        image={item.image}
        alt={item.title}
        source={item.source}
        title={item.title}
        date={item.date}
      />
    </div>
  ));
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <ul className="flex justify-between items-center py-2 border-b-2 mb-5 mt-5 lg:w-full lg:mx-auto lg:mt-[150px] lg:justify-start lg:gap-5 lg:px-">
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "/profile"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("/profile")}
        >
          <button>
            <p>Visi Misi</p>
          </button>
        </li>
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "/profile/siapasaya"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("/profile/siapasaya")}
        >
          <button>
            <p>Siapa Saya?</p>
          </button>
        </li>
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "/profile/event"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("/profile/event")}
        >
          <button>
            <p>Event List</p>
          </button>
        </li>
      </ul>
      
      {activeItem === "/profile" && visi}
      {activeItem === "/profile/siapasaya" && siapa}
      {activeItem === "/profile/event" && 
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-[50px] mb-10">{eventStyles}</div>
      }
    </div>
  );
}

export default Navigation;