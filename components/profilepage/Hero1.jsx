"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { PiOfficeChairLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import Detail from "@/components/profilepage/Detail";
import FavoriteButton from "@/components/profilepage/FavoriteButton";


function Hero({ name, quotes, imgBenner, imgProfle, email, ig, fb, noUrut, dapil, imgPartai, namaPartai, alt, favorit}) {
  return (
    <div className="mt-[100px] lg:mx-5">
      <div className="mb-20 relative w-full flex items-end">
        {/* Background image */}
        <Image
          src={imgBenner}
          alt={alt}
          width={300}
          height={300}
          className="w-full h-[183px] lg:h-[331px] -z-10"
          priority={true}
        />

        {/* Add other content or buttons as needed */}
        <div className="absolute ml-5 lg:ml-[220px] -bottom-10 lg:-bottom-24 flex justify-between">

          <img
            src={imgProfle}
            alt={alt}
            className="w-[80px] md:w-[100px] rounded-lg lg:hidden"
            onError={(e) => e.target.src="https://ik.imagekit.io/m1akscp5q/Pasang%20profilemu%20disni%20(4).jpg?updatedAt=1702972121979"}
          />
        </div>



        <div className="bg-white shadow-lg absolute w-[60%] left-[100px] right-0 ml-auto mr-auto -bottom-[60px] py-5 hidden lg:block rounded-r-lg ">
            <div className="relative">
              <div className="px-5 py-3">
                <div className="flex mt-4 sm:mt-0 item-center justify-between">
                  <div>
                    <h1 className="font-semibold text-[24px] mr-3 text-start lg:mr-0">
                      {name}
                    </h1>
                    {/* <p className="text-[10px]">
                      {quotes}
                    </p> */}
                  </div>
                  <div className=" flex lg:flex-row justify-center">
                    <div className="-right-2 -top-[45px] absolute">
                  <FavoriteButton params={favorit}/>
                    </div>
                    <Link href={email} target="_blank">
                      <div className="bg-primary rounded-full p-1 m-1">
                        <MdEmail size={20} className="text-white" />
                      </div>
                    </Link>
                    <Link
                      href={fb}
                      target="_blank"
                    >
                      <div className=" bg-primary rounded-full p-1 m-1">
                        <IoLogoFacebook size={20} className="text-white" />
                      </div>
                    </Link>
                    <Link href={ig} target="_blank">
                      <div className="bg-primary rounded-full p-1 m-1">
                        <FaInstagram size={20} className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="bg-white flex justify-between items-center">
                <img
            src={imgProfle}
            alt={alt}
            className="lg:w-[150px] md:w-[100px] rounded-lg absolute lg:-left-[140px] lg:-bottom-[30px]"
            onError={(e) => e.target.src="https://ik.imagekit.io/m1akscp5q/Pasang%20profilemu%20disni%20(4).jpg?updatedAt=1702972121979"}
          />
                  <div>
                    <div className="flex items-center">
                      <Image
                        src={imgPartai}
                        width={40} height={40}
                        className="bg-red-400 rounded-full w-10 h-10 mr-2"
                        alt={namaPartai}
                      />
                      <div>
                        <h3 className="text-[16px]">{namaPartai}</h3>
                        <h4 className="text-[14px] text-[#848484]">
                          Partai Politik
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flex-c gap-3 items-center">
                    <SlCalender />
                    <div>
                    
                      <h3 className="text-center">No. {noUrut}</h3>
                      <h4 className="text-[14px] text-center text-[#848484]">
                        No. Urut
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <PiOfficeChairLight />
                    <div>
                      <h3>{dapil}</h3>
                      <p className="text-[14px] text-[#848484]">
                        Daerah Pilihan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          




      </div>
      <Detail 
      name={name}
      email={email}
      ig={ig}
      fb={fb}
      dapil={dapil}
      namaPartai={namaPartai}
      noUrut={noUrut}
      fa={favorit}
      />
    </div>
  );
}

export default Hero;
