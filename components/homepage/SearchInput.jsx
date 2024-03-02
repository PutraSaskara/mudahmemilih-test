// SearchInput.js
import Link from "next/link";

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
// use this new store
import useDataStore from "@/components/ZustandStore/useDatastore";

import useAuthStore from "@/components/ZustandStore/authStore";
import { useRouter } from "next/navigation";
import provinsiData from "@/components/searchpage/ProvinsiJson";

const SearchInput = () => {

  const searchRef = useRef()
  const calegRef = useRef();

  const { data, searchParam, setSearchParam, fetchData, setSelectedProvinsi } =
    useDataStore();

  const [namaCaleg, setNamaCaleg] = useState(""); // New state for Nama Caleg

  const router = useRouter();
  const { token } = useAuthStore();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleNamaCalegChange = (event) => {
    event.preventDefault()
    const keyword = searchRef.current.value
    // alert(searchRef.current.value)
    router.push(`/search/${keyword}`)
  };

  

  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [fetchData, token]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter provinsiData based on input value
    const filteredProvinsi = provinsiData.provinsi
      .filter((provinsi) =>
        provinsi.nama.toLowerCase().includes(value.toLowerCase())
      )
      .map((provinsi) => provinsi.nama);

    setSuggestions(filteredProvinsi || []);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle search based on Nama Caleg
    
    // Update your search logic here based on the two inputs
    router.push(`/searchPage?provinsi=${encodeURIComponent(inputValue)}}`);

    

        setSelectedProvinsi(inputValue);
 
    setInputValue("");
    setNamaCaleg(""); // Reset Nama Caleg input
    setSuggestions([]);
    setSearchParam(inputValue); // Update your search parameter as needed
    fetchData(); // Fetch data based on new search criteria
  };


  return (
    <div className="">
      <div className="bg-white py-[12px] px-[14px] rounded-lg shadow-2xl ">
        <form onSubmit={handleSubmit}>
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="white" />
                <path
                  d="M4 10C4.00006 3.98668 8 2 12 2C16 2 20 4.4 20 10C20 15.6 14.6667 20.3333 12 22C9.16667 20.5 3.99994 16 4 10Z"
                  stroke="#D2355F"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke="#D2355F"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* ... existing SVG code ... */}
            <div className="flex lg:flex-row flex-col justify-center items-center">
              <div className=" flex flex-row">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-md font-sans text-gray-900 text-sm rounded-lg bg-transparent "
              placeholder="Cari Provinsi..."
              required
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className=" md:w-72 md:h-10  my-auto flex flex-row text-center align-middle justify-center bg-primary text-white px-6 py-2  md:bg-primary hover:bg-accent hover:text-primary hover:border-neutral-500 hover:border focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm   "
            >
              {/* <FaSearch className=" md:flex text-center my-auto md:text-white font-sans md:mr-2  text-primary  hover:text-primary" /> */}
              <h4 className=" md:flex md:text-[12px] text-[10px] my-auto ">CARI</h4>
            </button>
            </div>
            {/* <div className="flex flex-row">
            <input
              type="search"
              id="default-search"
              ref={searchRef}
              className="block w-full p-4 ps-10 text-md font-sans text-gray-900 text-sm rounded-lg bg-transparent  "
              placeholder="Cari Nama Caleg..."
              required
              
            />

            <button
              type="submit"
              className="md:w-72 md:h-10  my-auto flex flex-row text-center align-middle justify-center text-white md:bg-primary hover:bg-accent hover:text-primary hover:border-neutral-500 hover:border focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm md:px-2 "
            >
              <FaSearch className=" md:flex text-center my-auto md:text-white font-sans md:mr-2 text-primary hover:text-primary"  />
              <h4 className=" hidden md:flex md:text-[8px] text-[6px] my-auto ">CARI KANDIDAT</h4>
            </button>
            </div> */}
            </div>

            {suggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-lg z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setInputValue(suggestion);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
