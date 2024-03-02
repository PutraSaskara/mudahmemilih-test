import React from "react";

const SellingPoint = () => {
  return (
    <div className="font-sans relative lg:w-4/6">
      <img src="https://ik.imagekit.io/m1akscp5q/Group%201351.png?updatedAt=1702271106212" className=""></img>
      <div className="">
        {/* 1 */}
        <div className=" md:w-[224px] w-36 rounded-2xl overflow-hidden shadow-2xl bg-white absolute top-28 -left-6">
          <div className="p-6">
            <h1 className="md:text-md text-xs font-semibold mb-2 text-primary">
            Netral
            </h1>
            <p className="text-gray-700 md:text-[12px] text-[8px]">
            Tidak terafiliasi dengan partai ataupun kandidat tertentu manapun
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="md:w-[224px] w-34 rounded-2xl overflow-hidden shadow-2xl bg-white absolute bottom-[1px] left-36">
          <div className="p-6">
            <h1 className="md:text-md text-xs font-semibold mb-2 text-primary">
              Interaktif
            </h1>
            <p className="md:text-[12px] text-[8px] text-gray-700">
              Platform yang membantu memudahkan kandidat ataupun pemilih 
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="md:w-[224px] w-36 rounded-2xl overflow-hidden shadow-2xl bg-white absolute -right-2  top-0">
          <div className="md:p-6 p-3">
            <h1 className="md:text-md text-xs font-semibold mb-2 text-primary">
            Ramah Lingkungan
            </h1>
            <p className="text-gray-700 lg:text-[12px] text-[8px]">
            Membantu mengurangi dampak negatif lingkungan akibat penggunaan media cetak sekali pakai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingPoint;
