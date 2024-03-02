"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function SiapaSaya() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const toggleShowFirst = () => {
    setShowFirst(!showFirst);
  };
  const toggleShowSecond = () => {
    setShowSecond(!showSecond);
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="w-full py-2 shadow-md flex justify-between">
          <h3 className="text-[18px] font-bold">Latar Belakang</h3>
          <button onClick={toggleShowFirst}>
            <IoIosArrowDown size={20} />
          </button>
        </div>
        {showFirst && (
          <ul className="mt-[24px] space-y-1 text-black list-disc list-inside">
            <li>
              <span>Nama Lengkap :</span> Murad Nasser Septian
            </li>

            <li>
              <span>Umur :</span> 70 Tahun
            </li>

            <li>
              <span>TTL :</span> Jakarta, 20 Desember 1980
            </li>

            <li>
              <span>Pendidikan :</span> S1 Sistem Informasi UGM, S2 Information
              System LSPR
            </li>
          </ul>
        )}
      </div>

      <div>
        <div className="w-full py-2 shadow-md flex justify-between">
          <h3 className="text-[18px] font-bold">Prestasi</h3>
          <button onClick={toggleShowSecond}>
            <IoIosArrowDown size={20} />
          </button>
        </div>

        {showSecond && (
          <ul className="mt-[24px] space-y-1 text-black list-disc list-inside">
            <li>Sekertaris 1 Bidang Ekonomi di KBRI Belanda (2014-2022)</li>
            <li>Menteri Luar Negri (2018-2019)</li>
            <li>Menteri Koordinator Kemaritiman (2019-2022)</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default SiapaSaya;
