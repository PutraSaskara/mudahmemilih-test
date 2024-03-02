"use client";
import React from "react";
import VisiMisi from "./VisiMisi";
import useSingleCaleg from "../../hook/useSingleCaleg";
import Loading from "./Loading2";

function CalegVisiMisi({ calegData }) {
  

  const calegData1 = calegData?.data?.attributes;
  return (
    <div className="mb-[200px] w-full relative">
      {isLoading && (
        <div className="absolute">
          <Loading />
        </div>
      )}

      {calegData1 ? (
        <VisiMisi visi={calegData1.visi_misi} misi={calegData1.visi_misi} />
      ) : (
        !isLoading && <p>No Caleg Data available</p>
      )}
    </div>
  );
}

export default CalegVisiMisi;
