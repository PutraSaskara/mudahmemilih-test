"use client";
import React from "react";
import Hero1 from "./Hero1";
import useSingleCaleg from "../../hook/useSingleCaleg";
import Loading from "../Loading";

function CalegHome({ id }) {
  const { data, isLoading, error } = useSingleCaleg(id);

  if (isLoading) {
    return <Loading />;
  }

  if (!data || !data.data) {
    return <div className='mt-[300px] text-center'>No Caleg Data available</div>;
  }
  
  if (error) {
    return <div className='mt-[300px] text-center'>Error: {error.message}</div>;
  }


  const calegData = data.data.attributes;

  return (
    <div>
       <Hero1
            name={calegData.nama}
            quotes={calegData.kab_kota}
            imgBenner={"/landscape-logo.png"}
            imgProfle={"https://ik.imagekit.io/m1akscp5q/Pasang%20profilemu%20disni%20(4).jpg?updatedAt=1702972121979"}
            email={calegData.email}
            ig={"http://www.instagram.com/"}
            fb={"http://www.facebook.com"}
            noUrut={calegData.no_urut}
            dapil={calegData.nama_dapil}
            imgPartai={"/No_image.png"}
            namaPartai={calegData.nama_partai}
            alt={calegData.nama}
          />
    </div>
  );
}

export default CalegHome;
