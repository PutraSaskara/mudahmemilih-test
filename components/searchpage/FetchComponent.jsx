"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import useDataStore from "@/components/ZustandStore/useDatastore";
import provinsiData from "./ProvinsiJson";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/searchpage/LoadingSpinner";

export default function FetchComponent() {
  const {
    searchParam,
    setSearchParam,
    fetchData,
    data,
    selectedProvinsi,
    setSelectedProvinsi,
    selectedKabKota,
    setSelectedKabKota,
    selectedNama,
    setSelectedNama,
    setKecamatan,
    kecamatan,
    setSelectedKecamatanData,
    selecttedKecamatanData,
  } = useDataStore();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const namaDapilsRef = useRef(null);

  // Function to handle provinsi button click
  // const handleProvinsiClick = (provinsi) => {
  //   setSearchParam(provinsi.nama);
  //   setSelectedProvinsi(provinsi.nama);
  //   setSelectedKabKota(null);
  //   fetchData();
  // };

  const handleKabKotaClick = (kabKota) => {
    setSelectedKabKota(kabKota); // Set the selected Kab/Kota

    // Filter the data for the selected kab/kota
    const kabKotaData = data.filter((item) => item.kab_kota.includes(kabKota));

    // Check if there is kecamatan data available
    const hasKecamatanData = kabKotaData.some((item) => item.kecamatan);

    if (hasKecamatanData) {
      // If kecamatan data is available, update the selectedNama state
      const updatedNama = kabKotaData.map((item) => {
        // Handle kecamatan data as a whole string
        if (item.kecamatan) {
          return `${item.nama}-${item.kecamatan}`; // Combine nama with kecamatan
        } else {
          return item.nama;
        }
      });

      setSelectedNama(updatedNama);
    } else {
      // If no kecamatan data, set search parameter and redirect
      setSearchParam(kabKota);
      setSelectedKabKota(null);
      setKecamatan(null);
      router.push("/searchCalegs"); // Redirect to /search page
    }

    // Scroll to the "Nama Dapils" div
    if (namaDapilsRef.current) {
      namaDapilsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNamaKecamatanClick = (namaKecamatan) => {
    console.log(`Input namaKecamatan: ${namaKecamatan}`); // Log the input namaKecamatan

    // Split the input string by "-" and take the second part
    const splitParts = namaKecamatan.split("-");
    const kecamatanPart = splitParts[0];
    console.log(`Extracted kecamatanPart: ${kecamatanPart}`); // Log the extracted kecamatan part

    // Check if kecamatanPart is defined before setting the search parameter
    if (kecamatanPart) {
      setSearchParam(kecamatanPart);

      console.log(`Set searchParam to: ${kecamatanPart}`);
      fetchData(); // Log the setting of searchParam
    } else {
      console.log("No kecamatan part found in namaKecamatan");
    }

    // Navigate to /search route
    router.push("/searchCalegs");
    console.log("Navigated to /search route"); // Log the navigation action
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      try {
        await fetchData();
      } catch (error) {
        console.error("Error:", error);
      }
      setIsLoading(false);
    };

    fetchDataAsync();
    setSelectedKabKota();
  }, [fetchData]);

  return (
    <div className="mb-10 mt-10 font-sans mx-6">
      <Link href="/">
        <div className="flex justify-start items-center gap-2 mt-5 mb-5">
          <IoChevronBack size={30} style={{ color: "#D2355F" }} />

          {selectedProvinsi && (
            <>
              <h3 className="text-xl font-sans font-bold">
                {selectedProvinsi}
              </h3>
              <IoChevronBack size={30} style={{ color: "#D2355F" }} />
            </>
          )}

          {selectedKabKota && (
            <>
              <h3 className="text-xl font-sans font-bold">
                {selectedKabKota}
              </h3>
              <IoChevronBack size={30} style={{ color: "#D2355F" }} />
            </>
          )}

          {kecamatan && (
            <h3 className="text-xl font-sans font-bold">
              {kecamatan}
            </h3>
          )}
        </div>
      </Link>

      <div className="space-y-2 font-sans mb-4">
        <h1 className="text-xl text-center font-sans mb-5">
          Pilih Provinsi dimana kamu tinggal
        </h1>

        <div className=" mx-auto flex justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-20">
          <button
            className="bg-primary border  hover:text-white text-white font-sans py-2 px-4 rounded-lg text-sm"
            // onClick={() => handleProvinsiClick(provinsi)}
          >
            {selectedProvinsi}
          </button>
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data && (
          <div>
            <h1 className="text-xl text-center font-sans mb-5">
              Pilih Kabupaten/Kota
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
              {data
                .filter((item) => item.dapil_type === 2) // Filter items with dapil_type of 2
                .reduce((unique, item) => {
                  // Split kab_kota by '#' and iterate over the array
                  const kabKotaArray = item.kab_kota.split("#");
                  kabKotaArray.forEach((kabKota) => {
                    if (!unique.includes(kabKota)) {
                      unique.push(kabKota);
                    }
                  });
                  return unique;
                }, [])
                .map((kabKota, index) => (
                  <button
                    key={`${index}_${kabKota}`}
                    className="bg-white border hover:bg-primary hover:text-white text-abu font-sans py-2 px-4 rounded-lg text-sm"
                    onClick={() => handleKabKotaClick(kabKota)}
                  >
                    {kabKota}
                  </button>
                ))}
            </div>
          </div>
        )
      )}

      <h1 className="text-xl text-center font-sans mb-5" ref={namaDapilsRef}>
        Nama Dapils
      </h1>
      <div className="flex flex-col justify-center mx-auto w-fit">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mb-10 ">
          {selectedNama.map((namaKecamatan, index) => (
            <button
              key={index}
              className="bg-white border min-w-[150px] hover:bg-primary hover:text-white text-abu font-sans py-2 px-4 rounded-lg text-sm overflow-x-auto"
              onClick={() => handleNamaKecamatanClick(namaKecamatan)}
            >
              
                {namaKecamatan}
             
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
