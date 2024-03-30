"use client";

import React from "react";
import SearchInput from "../homepage/SearchInput";
// import CountdownComponent from "./CountdownComponent";
import HeaderImage from "./HeaderImage";
import SearchInputCaleg from "../homepage/SearchInputCaleg";


const Header = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 justify-center mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          {/* copywriting */}
          <div className="lg:hidden lg:mt-0 lg:col-span-5">
            <div className="w-8/12 mx-auto">
            <HeaderImage />
            </div>
            <div className="md:hidden mt-4">
              <SearchInput />
              <SearchInputCaleg/>
            </div>
          </div>

          <div className="lg:mr-auto mx-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-semibold text-primary tracking-tight leading-none md:text-4xl xl:text-5xl md:mt-0 mt-6 ">
              Pdkt dulu sama calonmu, biar makin mantap
            </h1>
            <p className="max-w-2xl mb-10 font-base  text-black lg:mb-8 md:text-lg lg:text-xl ">
            </p>
            <div className="flex justify-center lg:hidden ">
              {/* <CountdownComponent style="flex flex-row lg:hidden bg-white rounded-xl shadow-lg" /> */}
            </div>

            <h4 className="text-secondary font-sans">Cari Daerah Pilihanmu!</h4>

            <div className="hidden md:flex md:justify-center space-x-1 md:items-center md:align-middle  flex md:flex-row ">
              
              <SearchInput />
              <SearchInputCaleg/>
            </div>
          </div>

          {/* copywriting
           */}
          <div className=" right-4 hidden lg:flex-col lg:mt-0 lg:col-span-5 lg:flex">
            <HeaderImage />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
