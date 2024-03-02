"use client"
import React, {useState} from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

function PriceList() {
    const [hoverState, setHoverState] = useState({
        link1: false,
        link2: false,
        link3: false,
      });

      const handleMouseEnter = (link) => {
        setHoverState((prev) => ({ ...prev, [link]: true }));
      };
    
      const handleMouseLeave = (link) => {
        setHoverState((prev) => ({ ...prev, [link]: false }));
      };
  return (
    <div className="mt-[150px] mb-[100px]">
      <h1 className="md:text-center font-bold text-3xl">
        Temukan pilihan yang tepat disini
      </h1>
      <p className="text-abu text-[16px] md:text-center mt-3">
        Mulai dengan penampilan profesional dengan pas foto dan biodata dasar,
        serta memberikan eksposur tanpa biaya
      </p>

      <div className="flex justify-center md:items-center flex-col lg:flex-row gap-1  mt-10">

    <Link href={'https://wa.me/6282339929257?text=Saya%20tertarik%20dengan%20Mudah%20Memiulih'} target="_blank">
      <div className="md:w-[416px] w-full relative"
      onMouseEnter={() => handleMouseEnter("link1")}
      onMouseLeave={() => handleMouseLeave("link1")}
      >
          <Image
            src={hoverState.link1 ? "/pricing-pink.png" : "/pricing-fix.png"}
            width={50}
            height={50}
            className="w-full"
          />

          <div className="top-0 w-full h-full absolute">
            <div className="px-5 pb-10">
              <h3 className="text-center text-primary font-semibold text-[24px] mt-10">Maju</h3>
              <h3 className="text-center font-bold text-4xl mt-3">Free</h3>
              <p className="mt-3 text-center text-abu ">Dapatkan penampilan profesional dengan pas foto dan biodata dasar, memberikan eksposur tanpa biaya.</p>
              <button className={`bg-${hoverState.link1 ? "primary" : "slate-400"} w-full h-[64px] rounded-xl mt-3 lg:mt-[125px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>Get Started</button>
              <h3 className="text-primary text-[16px] mt-3">Fitur yang didapat:</h3>
              <ul>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p className="text-[10]">Pas Foto</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Bio Data</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu"/>
                    <p className="text-abu">Foto Bebas (Update + tambah foto)</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu"/>
                    <p className="text-abu">Generate Foto AI </p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu"/>
                    <p className="text-abu">Report View</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu"/>
                    <p className="text-abu">Report Likes dan Dislikes</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu"/>
                    <p className="text-abu">Upload Prestasi</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu"/>
                    <p className="text-abu">Upload Event (5  Event)</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu "/>
                    <p className="text-abu">Pilih Border/Premium Skin/ Frame </p>
                </li>
                <li className="flex items-center gap-4 lg:mt-3 ">
                    <RxCross2 size={25} className="text-abu w-9 lg:w-8 "/>
                    <p className="text-abu">Featuring Homepage (Tampil di halaman utama)</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu"/>
                    <p className="text-abu">Form Registrasi Relawan</p>
                </li>
              </ul>



            </div>
          </div>
        </div>
    </Link>

        
        <Link href={'https://wa.me/6282339929257?text=Saya%20tertarik%20dengan%20Mudah%20Memiulih'} target="_blank">
        
        <div className="md:w-[416px] w-full relative bg-[#EEFBF6] hover:bg-[#F6D7DF]"
        onMouseEnter={() => handleMouseEnter("link2")}
        onMouseLeave={() => handleMouseLeave("link2")} 
        >
          <Image
            src={hoverState.link2 ? "/pricing-pink.png" : "/pricing-fix.png"}
            width={50}
            height={50}
            className="w-full"
          />

          <div className="top-0 w-full h-full absolute">
            <div className="px-5 pb-10">
              <h3 className="text-center text-primary font-semibold text-[24px] mt-10">Yakin</h3>
              <h3 className="text-center font-semibold text-4xl mt-3">
                <span className="text-[24px]">Rp.</span><span className="text-[40px] font-bold">149K</span> <span className="text-[24px] text-abu">/mo</span>
              </h3>
              <h3 className="text-center font-semibold text-4xl mt-3">
                <span className="text-[24px]">Rp.</span><span className="text-[20px] font-bold line-through">999K</span> <span className="text-[18px] text-abu">/mo</span>
              </h3>
              <p className="mt-3 text-center text-abu">Ungkapkan visi dan kreativitasmu dengan foto bebas update, dukungan AI, dan laporan interaksi pemilih serta kegiatan terkini.</p>
              <button className={`bg-${hoverState.link2 ? "primary" : "slate-400"} w-full h-[64px] rounded-xl mt-3 lg:mt-[61px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>Get Started</button>
              <h3 className="text-primary text-[16px] mt-3">Fitur yang didapat:</h3>
              <ul>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Pas Foto</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Bio Data</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Foto Bebas (Update + tambah foto)</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Generate Foto AI </p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Report View</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Report Likes dan Dislikes</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Upload Prestasi</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Upload Event (5  Event)</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu "/>
                    <p className="text-abu">Pilih Border/Premium Skin/ Frame </p>
                </li>
                <li className="flex items-center gap-4 lg:mt-3 ">
                    <RxCross2 size={25} className="text-abu w-9 lg:w-8 "/>
                    <p className="text-abu">Featuring Homepage (Tampil di halaman utama)</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <RxCross2 size={25} className="text-abu"/>
                    <p className="text-abu">Form Registrasi Relawan</p>
                </li>
              </ul>



            </div>
          </div>
        </div>
        </Link>

        <Link href={'https://wa.me/6282339929257?text=Saya%20tertarik%20dengan%20Mudah%20Memiulih'} target="_blank">
        
        <div className="md:w-[416px] w-full relative bg-[#EEFBF6] hover:bg-[#F6D7DF]"
        onMouseEnter={() => handleMouseEnter("link3")}
        onMouseLeave={() => handleMouseLeave("link3")} >
          <Image
            src={hoverState.link3 ? "/pricing-pink.png" : "/pricing-fix.png"}
            width={50}
            height={50}
            className="w-full"
          />

          <div className="top-0 w-full h-full absolute">
            <div className="px-5 pb-10">
              <h3 className="text-center text-primary font-semibold text-[24px] mt-10">Pasti</h3>
              <h3 className="text-center font-semibold text-4xl mt-3">
                <span className="text-[24px]">Rp.</span><span className="text-[40px] font-bold">249K</span> <span className="text-[20px] text-abu">/mo</span>
              </h3>
              <h3 className="text-center font-semibold text-4xl mt-3">
                <span className="text-[24px]">Rp.</span><span className="text-[18px] font-bold line-through">1.499K</span> <span className="text-[24px] text-abu">/mo</span>
              </h3>
              <p className="mt-3 text-center text-abu">Personalisasikan profilmu dengan pemilihan frame, tampil di halaman utama, dan dukungan relawan melalui formulir registrasi khusus untuk kampanye yang lebih efektif.</p>
              <button className={`bg-${hoverState.link3 ? "primary" : "slate-400"} w-full h-[64px] rounded-xl mt-3 lg:mt-[38px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>Get Started</button>
              <h3 className="text-primary text-[16px] mt-3">Fitur yang didapat:</h3>
              <ul>
              <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Pas Foto</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Bio Data</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Foto Bebas (Update + tambah foto)</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Generate Foto AI </p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Report View</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Report Likes dan Dislikes</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Upload Prestasi</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Upload Event (5  Event)</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Pilih Border/Premium Skin/ Frame </p>
                </li>
                <li className="flex items-center gap-4 lg:mt-3 ">
                    <FaCheck size={25} className="text-primary w-9 lg:w-8 "/>
                    <p>Featuring Homepage (Tampil di halaman utama)</p>
                </li>
                <li className="flex gap-4 lg:mt-3">
                    <FaCheck size={25} className="text-primary"/>
                    <p>Form Registrasi Relawan</p>
                </li>
              </ul>



            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default PriceList;
