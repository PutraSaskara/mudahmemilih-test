"use client"
import React, { useEffect, useState,useRef } from "react";
import MapBackground from "@/components/searchpage/MapBackground";
import FetchComponent from "@/components/searchpage/FetchComponent";
import SearchComponent from "@/components/searchpage/SearchComponent";
import { useRouter } from "next/navigation";


const SearchPage = () => {
  const router = useRouter();
  const [provinsi, setProvinsi] = useState("");
  const fetchComponentRef = useRef(null); 

  useEffect(() => {
    // Check if the router is ready and the query parameter is available
    if (router.isReady) {
      const queryProvinsi = router.query.provinsi;
      if (queryProvinsi) {
        setProvinsi(queryProvinsi);
      }
    }
  }, [router.isReady, router.query]);

  return (
    <div>
      <div className=" bg-primary  w-auto">
        <MapBackground  fetchComponentRef={fetchComponentRef}/>
      </div>
       
      <div className="mx-[10px] mb-3 mt-0">
        {/* You can pass provinsi as a prop to SearchComponent if needed */}
        <SearchComponent provinsi={provinsi} />
      </div>
      <div ref={fetchComponentRef}>
        {/* Similarly, pass provinsi as a prop to FetchComponent if it's required */}
        <FetchComponent provinsi={provinsi} />
      </div>
    </div>
  );
};

export default SearchPage;
