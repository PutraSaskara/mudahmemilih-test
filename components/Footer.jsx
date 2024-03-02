"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t text-sans bg-primary text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="lg:flex-row md:justify-between flex flex-col items-center">
          <div className="mb-6 md:mb-0 lg:w-[30%] flex flex-col items-center lg:items-start">
            <Link href="/" className="flex items-center">
              <Image
                width={200}
                height={100}
                src="https://ik.imagekit.io/m1akscp5q/E9FE49DE-98C2-4D48-8B5F-0B120970E85C.png?updatedAt=1703065032561"
                alt="MudahMemilih Logo"
              />
            </Link>
            <p className="text-center lg:text-left">
              Platform yang gampangin kamu buat dapet caleg yang cocok!
            </p>
          </div>

          <div className="mt-3 flex flex-col text-left ml-0 font-sans ">
            <h2 className="text-center  text-sm font-semibold text-secondary uppercase lg:ml-3">
              Daerah Pilihanmu
            </h2>
            <div className="flex gap-5">
            <ul className="font-medium text-[14px] p-3 flex flex-col  gap-3">
              <li>
                <Link href="/provinsi/Jakarta" className="hover:underline">
                  Jakarta
                </Link>
              </li>
              <li>
                <Link href="/provinsi/Banten" className="hover:underline">
                  Banten
                </Link>
              </li>
              <li>
                <Link href="/provinsi/Jawa Barat" className="hover:underline">
                  Jawa Barat
                </Link>
              </li>
              <li>
                <Link href="/provinsi/Jawa Tengah" className="hover:underline">
                  Jawa Tengah
                </Link>
              </li>
            </ul>
            <ul className="font-medium text-[14px] p-3 flex flex-col  gap-3">
              <li>
                <Link href="/provinsi/Yogyakarta" className="hover:underline">
                Yogyakarta

                </Link>
              </li>
              <li>
                <Link href="/provinsi/Jawa Timur" className="hover:underline">
                  Jawa Timur
                </Link>
              </li>
              <li className="">
                <Link href="/provinsi/Bali" className="hover:underline">
                  Bali
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className="flex flex-col mt-5 justify-center">
            <span className="text-sm text-white sm:text-center ">
              2023 © Copyright. All Rights Reserved.
            </span>

            <div className="flex mt-4 justify-center sm:mt-0">
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=61553963472122&mibextid=ZbWKwL"
                } target="_blank"
              >
                <div className=" bg-white rounded-full p-1 m-1">
                  <IoLogoFacebook size={20} className="text-black" />
                </div>
              </Link>
              <Link href={"https://www.instagram.com/mudahmemilih?igshid=OGQ5ZDc2ODk2ZA%3D%3D"} target="_blank">
                <div className="bg-white rounded-full p-1 m-1">
                  <FaInstagram size={20} className="text-black" />
                </div>
              </Link>
              <Link href={"https://www.tiktok.com/@mudahmemilih?_t=8iJ6Sk7iRx1&_r=1"} target="_blank">
                <div className="bg-white rounded-full p-1 m-1">
                  <FaTiktok size={20} className="text-black" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
