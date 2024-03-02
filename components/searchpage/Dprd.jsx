import React from "react";
import Data from "../../components/homepage/CarouselData";
import ImageCarousel from "../../components/homepage/ImageCarousel";
import ImageCarousel2 from "@/components/searchpage/ImageCarousel2";

function Dprd({ calegData }) {
  // Check if calegData is an array and has items
  if (!Array.isArray(calegData) || calegData.length === 0) {
    return <div className="mt-[20px] h-[700px]">No data available</div>;
  }

  return (
    <div className="mt-[20px] h-[700px] mx-auto overflow-y-scroll scroll-smooth border-t-4  border-b-4  border-slate-500 mb-5">
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-5 pt-5">
        {calegData.map((item) => {
          const { attributes } = item;
          return (
            <ImageCarousel2
              key={attributes.id}
              src={`https://server.mudahmemilih.com/storage/images/calegs/${attributes.img_caleg}`}
              alt={`Image of ${attributes.nama}`}
              href={`/calegs/${attributes.slug}`} // Replace with actual link if available
              title={attributes.nama}
              dapil={`DAPIL ${attributes.nama_dapil}`}
              name={attributes.nama}
              logoPartai={"/No_image.png"}
              partai={attributes.nama_partai}
              content={attributes.visi_misi}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dprd;