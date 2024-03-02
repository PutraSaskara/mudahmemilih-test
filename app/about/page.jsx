import React from "react";
import Image from "next/image";
import Team from "../../components/Team"

export default function page() {
  return (
    <section className="mt-32 flex-col flex justify-center ">
      <div className="lg:mb-[50px]">
        <h1 className="text-center font-sans font-semibold text-2xl">
          About Us
        </h1>
      </div>

      <div className="my-4 grid grid-col-1 lg:grid-cols-3 lg:mx-40">
        {/* image */}
        <div className=" flex flex-col items-center  justify-center">
          <div className="relative w-4/5  lg:w-full  ">
            <Image
              src={
                "https://ik.imagekit.io/m1akscp5q/Untitled%20design%20(3).png?updatedAt=1703781474087"
              }
              width={320}
              height={376}
              className="w-full object-cover border rounded-[13px] "
            ></Image>
            <div className="rounded-tr-[13px] rounded-bl-[13px] px-5 py-2 object-cover bg-[#EEFBF6] absolute bottom-0 font-sans left-0 z-0">
              <h4 className=" lg:text-[18px]"> A.A Gde Rai Adi </h4>
              <h4 className=" lg:text-[18px] font-bold font-sans">CEO</h4>
            </div>
          </div>
        </div>
        {/* image */}
        <div className=" mt-2  lg:ml-32 lg:col-span-2 mx-6  flex flex-col justify-center h-full">
          <p className=" leading-9 text-justify font-sans">
            &emsp; &emsp;
            <span className=" text-primary font-bold">
              mudahmemilih.com
            </span>{" "}
            &emsp; adalah suara pemuda Indonesia yang didedikasikan untuk
            memberdayakan dan menginformasikan pemilih muda.
            <br /> <br /> &emsp; &emsp; Kami memahami bahwa setiap suara
            memiliki kekuatan untuk menciptakan perubahan, dan kami hadir untuk
            memastikan bahwa generasi muda lebih mudah dan akurat mendapatkan
            informasi terkait profil dan program masing masing kandidat pemilu
            2024
          </p>
        </div>
      </div>

      <div className=" flex flex-col justify-center mx-2 my-2">
        <h4 className="text-center font-la-belle text-accent ">Tentang Kami</h4>
        <h1 className=" font-sans text-center font-bold text-2xl">Visi</h1>
        <p className="leading-9 font-sans text-center">
          Menjadi gerbang utama bagi pemuda Indonesia dalam mencari informasi
          terpercaya dan interaktif mengenai calon pemimpin mereka.
        </p>
      </div>
      {/* section 2 visi misi */}
      <div className=" bg-[#FCFCFC] grid grid-cols-1 lg:mx-40 py-4 lg:space-x-6">
        <div className=" font-sans mx-4 text-justify flex flex-col justify-center lg:flex-row lg:space-x-10 mb-4  ">
          <div className="mb-4 flex flex-col lg:justify-center lg:h-full  ">
            <h1 className=" font-bold text-2xl text-center">Misi</h1>
            <ol className="list-decimal pl-5 leading-9">
              <li className="mb-2">
                Mendorong partisipasi aktif pemuda dalam diskusi politik dan
                pengambilan keputusan.
              </li>
              <li className="mb-2">
                Memberikan kemudahan bagi kandidat untuk menyebarluaskan
                program, serta visi dan misi kepada generasi muda.
              </li>
              <li className="mb-2">
                Menyediakan platform yang mudah digunakan dan interaktif untuk
                mendukung keterlibatan masyarakat.
              </li>
            </ol>
          </div>
          <div className="lg:my-auto lg:w-full md:mx-auto">
          <Image
            src={
              "https://ik.imagekit.io/m1akscp5q/Image%20Misi%20(1).png?updatedAt=1703787569870"
            }
            width={481}
            height={355}
            className=" rounded-xl  "
          ></Image></div>
        </div>
      </div>

      {/* section keunggulan */}

      <div className=" lg:mx-40">
        <div className="mx-2 flex flex-col justify-center mx-2 font-sans">
          <h1 className="font-bold text-2xl text-center">
            Apa Keunggulan Kami?
          </h1>
          <p className="leading-9 text-center">
            Dengan fokus pada kualitas, kehandalan, dan pelayanan pelanggan yang
            unggul, kami memastikan pengalaman yang tak terlupakan untuk setiap
            mitra dan pelanggan kami.
          </p>
        </div>


        <div className="flex flex-col lg:flex-row justify-center lg:space-x-10 my-10 my-4">
          {/* 1 */}
          <div className="flex lg:flex-row justify-center flex-col items-center space-x-2 ">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.6689H18C15.8 11.6689 14 13.4689 14 15.6689V33.6689C14 34.7298 14.4214 35.7472 15.1716 36.4974C15.9217 37.2475 16.9391 37.6689 18 37.6689H44C46.22 37.6689 48 35.8889 48 33.6689V15.6689C48 14.6081 47.5786 13.5907 46.8284 12.8405C46.0783 12.0904 45.0609 11.6689 44 11.6689ZM44 19.0089L31 25.6689L18 19.0089V15.6689L31 22.2889L44 15.6689V19.0089ZM10 33.6689C10 34.0089 10.06 34.3289 10.1 34.6689H2C0.896 34.6689 0 33.7689 0 32.6689C0 31.5689 0.896 30.6689 2 30.6689H10V33.6689ZM6 14.6689H10.1C10.06 15.0089 10 15.3289 10 15.6689V18.6689H6C4.9 18.6689 4 17.7689 4 16.6689C4 15.5689 4.9 14.6689 6 14.6689ZM2 24.6689C2 23.5689 2.9 22.6689 4 22.6689H10V26.6689H4C2.9 26.6689 2 25.7689 2 24.6689Z"
                fill="#D2355F"
              />
            </svg>
            <h4 className="text-center">Kecepatan Penyebaran <br></br> Informasi</h4>
          </div>

  
          {/* 2 */}

          

          <div className="flex lg:flex-row justify-center flex-col items-center space-x-2 my-4 ">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.52 43.445H12C10.114 43.445 9.172 43.445 8.586 42.859C8 42.277 8 41.333 8 39.447V37.223C8 36.187 8 35.669 8.266 35.205C8.532 34.743 8.934 34.509 9.738 34.041C15.03 30.963 22.544 29.231 27.558 32.221C27.894 32.423 28.198 32.667 28.458 32.957C28.7266 33.2514 28.9335 33.5966 29.0665 33.9722C29.1996 34.3479 29.256 34.7464 29.2325 35.1442C29.209 35.542 29.1061 35.9311 28.9298 36.2884C28.7535 36.6458 28.5074 36.9643 28.206 37.225C27.9656 37.4535 27.6721 37.6184 27.352 37.705C27.592 37.677 27.822 37.645 28.042 37.611C29.864 37.321 31.394 36.345 32.794 35.287L36.41 32.557C37.0551 32.0878 37.8323 31.835 38.63 31.835C39.4277 31.835 40.2049 32.0878 40.85 32.557C41.996 33.423 42.348 34.849 41.622 36.013C40.776 37.369 39.584 39.103 38.44 40.163C37.294 41.223 35.588 42.171 34.196 42.843C32.652 43.589 30.948 44.017 29.214 44.299C25.698 44.867 22.034 44.779 18.554 44.063C16.5686 43.6548 14.547 43.4464 12.52 43.445ZM13.172 5.841C12.438 6.575 12.164 7.587 12.062 9.169C13.2344 9.15295 14.3542 8.67995 15.1831 7.85069C16.012 7.02143 16.4845 5.90139 16.5 4.729C14.92 4.833 13.906 5.107 13.172 5.841ZM34.828 5.841C34.094 5.107 33.082 4.833 31.5 4.731C31.5161 5.90338 31.989 7.02321 32.8183 7.8521C33.6476 8.68098 34.7676 9.15348 35.94 9.169C35.836 7.589 35.562 6.575 34.828 5.841ZM34.828 19.497C34.094 20.231 33.082 20.505 31.5 20.607C31.5161 19.4346 31.989 18.3148 32.8183 17.4859C33.6476 16.657 34.7676 16.1845 35.94 16.169C35.836 17.749 35.562 18.763 34.828 19.497ZM13.172 19.497C13.906 20.231 14.918 20.505 16.5 20.607C16.4839 19.4346 16.0109 18.3148 15.1817 17.4859C14.3524 16.657 13.2324 16.1845 12.06 16.169C12.164 17.749 12.438 18.763 13.172 19.497Z"
                fill="#D2355F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 12.1689C13.9891 12.1689 15.8968 11.3788 17.3033 9.97225C18.7098 8.56572 19.5 6.65807 19.5 4.66895H28.5C28.5 6.65807 29.2902 8.56572 30.6967 9.97225C32.1032 11.3788 34.0109 12.1689 36 12.1689V13.1689C34.0109 13.1689 32.1032 13.9591 30.6967 15.3656C29.2902 16.7722 28.5 18.6798 28.5 20.6689H19.5C19.5 18.6798 18.7098 16.7722 17.3033 15.3656C15.8968 13.9591 13.9891 13.1689 12 13.1689V12.1689ZM24 14.6689C24.5304 14.6689 25.0391 14.4582 25.4142 14.0832C25.7893 13.7081 26 13.1994 26 12.6689C26 12.1385 25.7893 11.6298 25.4142 11.2547C25.0391 10.8797 24.5304 10.6689 24 10.6689C23.4696 10.6689 22.9609 10.8797 22.5858 11.2547C22.2107 11.6298 22 12.1385 22 12.6689C22 13.1994 22.2107 13.7081 22.5858 14.0832C22.9609 14.4582 23.4696 14.6689 24 14.6689Z"
                fill="#D2355F"
              />
            </svg>
            <h4 className=" items-center">Biaya Efektif</h4>
          </div>

          <div className="flex lg:flex-row justify-center flex-col items-center space-x-2 my-4 ">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1061_1168)">
                <path
                  d="M13.44 33.9489C13.9492 33.8004 14.4966 33.8603 14.9617 34.1153C15.4268 34.3704 15.7715 34.7997 15.92 35.3089C16.0685 35.8182 16.0087 36.3655 15.7536 36.8306C15.4986 37.2957 15.0692 37.6404 14.56 37.7889C13.56 38.0809 12.84 38.3889 12.378 38.6689C12.854 38.9549 13.606 39.2749 14.65 39.5729C16.96 40.2329 20.266 40.6689 24 40.6689C27.734 40.6689 31.04 40.2329 33.35 39.5729C34.396 39.2749 35.146 38.9549 35.622 38.6689C35.162 38.3889 34.442 38.0809 33.442 37.7889C32.9408 37.6339 32.5206 37.2881 32.272 36.8261C32.0233 36.3641 31.9662 35.8229 32.1129 35.3192C32.2595 34.8155 32.5982 34.3896 33.056 34.1332C33.5137 33.8769 34.0539 33.8107 34.56 33.9489C35.896 34.3389 37.12 34.8389 38.06 35.4809C38.93 36.0789 40 37.1209 40 38.6689C40 40.2349 38.904 41.2849 38.02 41.8829C37.064 42.5269 35.814 43.0289 34.448 43.4189C31.692 44.2089 28 44.6689 24 44.6689C20 44.6689 16.308 44.2089 13.552 43.4189C12.186 43.0289 10.936 42.5269 9.98 41.8829C9.096 41.2829 8 40.2349 8 38.6689C8 37.1209 9.07 36.0789 9.94 35.4809C10.88 34.8389 12.104 34.3389 13.44 33.9489ZM24 4.66895C27.9782 4.66895 31.7936 6.2493 34.6066 9.06234C37.4196 11.8754 39 15.6907 39 19.6689C39 24.8049 36.2 28.9809 33.3 31.9489C32.1472 33.1168 30.9084 34.1965 29.594 35.1789C28.406 36.0709 25.69 37.7429 25.69 37.7429C25.1749 38.0357 24.5925 38.1897 24 38.1897C23.4075 38.1897 22.8251 38.0357 22.31 37.7429C20.9615 36.9623 19.6581 36.1063 18.406 35.1789C17.0911 34.1971 15.8522 33.1174 14.7 31.9489C11.8 28.9809 9 24.8049 9 19.6689C9 15.6907 10.5804 11.8754 13.3934 9.06234C16.2064 6.2493 20.0218 4.66895 24 4.66895ZM24 15.6689C22.9391 15.6689 21.9217 16.0904 21.1716 16.8405C20.4214 17.5907 20 18.6081 20 19.6689C20 20.7298 20.4214 21.7472 21.1716 22.4974C21.9217 23.2475 22.9391 23.6689 24 23.6689C25.0609 23.6689 26.0783 23.2475 26.8284 22.4974C27.5786 21.7472 28 20.7298 28 19.6689C28 18.6081 27.5786 17.5907 26.8284 16.8405C26.0783 16.0904 25.0609 15.6689 24 15.6689Z"
                  fill="#D2355F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1061_1168">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0 0.668945)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h4 className="text-center"> Isi-isu Lokal</h4>
          </div>
        </div>
      </div>

      {/* section team */}
      <div className="mt-10">
        <h1 className="text-[35px] font-bold text-center">Team</h1>
        <Team/>
      </div>
    </section>
  );
}
