import React from "react";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import PartaiNasdem from "@/public/PartaiNasDem.png"
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { PiOfficeChairLight } from "react-icons/pi";
import FavoriteButton from "@/components/profilepage/FavoriteButton";

function Detail({name, email, ig, fb, dapil, namaPartai, noUrut, fa}) {
  return (
    <div className="lg:mx-5">
      <div className="lg:hidden">
        <div className="">
          <div className="flex flex-col sm:flex-row items-start mt-4 sm:mt-0 sm:item-center lg:flex-col">
            <h1
              className="font-semibold text-[24px] mr-3 text-left lg:mr-0
            "
            >
              {name}
            </h1>
            <div className="sm:hidden">
            <FavoriteButton params={fa}/>
            </div>
            <div className="flex items-center gap-1 my-3">

            </div>
            <div className=" flex  lg:w-[200px] lg:flex-row justify-center lg:mx-auto">
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
          <div className="w-fit hidden sm:flex">
            <FavoriteButton params={fa}/>
          </div>
          <div className="lg:flex mt-10">
            <div>
              <h3 className="text-[#7B7B7B] lg:text-center">
                Calon Legislatif{" "}
                <span className="font-bold lg:block lg:px-10 ">
                  {dapil}
                </span>
              </h3>
            </div>

            <div className="flex justify-between w-[80%] ">
              <div className="w-[60%] lg:w-[50%] border-r-2 py-2">
                <h3 className="text-[16px]">{namaPartai}</h3>
                <h4 className="text-[14px] text-[#848484]">Partai Politik</h4>
              </div>
              <div className=" flex flex-col justify-center w-[40%] lg:w-[50%] p-2">
                <h3 className="text-center">{noUrut}</h3>
                <h4 className="text-[14px] text-center text-[#848484]">
                  No. Urut
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* web view */}


    </div>
  );
}

export default Detail;
