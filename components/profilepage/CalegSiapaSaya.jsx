"use client";
import React from "react";
import useSingleCaleg from "../../hook/useSingleCaleg";
import Loading from "./Loading2";

function CalegSiapaSaya({ calegData }) {
  
  calegData1 = calegData?.data?.attributes;

  return (
    <div className="mb-[200px] w-full relative">
    {isLoading && (
      <div className="absolute">
        <Loading />
      </div>
    )}

    {calegData1 ? (
      <div>
        <p>Nama: {calegData1.nama}</p>
        <p>Asal: {calegData1.kab_kota}</p>
        <p>Partai: {calegData1.nama_partai}</p>
        <p>Daerah Pilihan: {calegData1.nama_dapil}</p>
      </div>
    ) : !isLoading && (
      <p>No Caleg Data available</p>
    )}
  </div>
  );
}

export default CalegSiapaSaya;
