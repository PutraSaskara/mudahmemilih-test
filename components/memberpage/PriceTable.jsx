import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

function PriceTable() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 mt-[50px]">
        <h1 className="md:text-center font-bold text-3xl">
        Temukan pilihan yang tepat disini
      </h1>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Dapatkan penampilan profesional dengan pas foto dan biodata dasar, memberikan eksposur tanpa biaya.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#eefbf6] hover:bg-[#f6d7df] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8  relative">
            <h3 className="mb-4 text-2xl font-semibold">Maju</h3>
            <p className="font-light text-gray-500 sm:text-sm dark:text-gray-400">
            Dapatkan penampilan profesional dengan pas foto dan biodata dasar, memberikan eksposur tanpa biaya.

            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">Free</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {/* List  */}
            <ul role="list" className="mb-8 space-y-4 text-left">
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
            <Link  href={'https://wa.me/6282339929257?text=Saya%20tertarik%20dengan%20Mudah%20Memiulih'} target="_blank">
            <button className="bg-primary w-full h-[64px] rounded-xl mt-3 lg:mt-[38px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Get Started</button>
            </Link>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#eefbf6] hover:bg-[#f6d7df] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8  relative">
            <h3 className="mb-4 text-2xl font-semibold">YAKIN</h3>
            <p className="font-light text-gray-500 sm:text-sm dark:text-gray-400">
            Ungkapkan visi dan kreativitasmu dengan foto bebas update, dukungan AI, dan laporan interaksi pemilih serta kegiatan terkini.

            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold"><span className="text-lg">Rp.</span>   999K</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {/*  List  */}
            <ul role="list" className="mb-8 space-y-4 text-left">
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
            <Link href={'https://wa.me/6282339929257?text=Saya%20tertarik%20dengan%20Mudah%20Memiulih'} target="_blank">
            <button className="bg-primary w-full h-[64px] rounded-xl mt-3 lg:mt-[38px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Get Started</button>
            </Link>
          </div>
          {/*  Pricing Card  */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#eefbf6] hover:bg-[#f6d7df] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8  relative">
            <h3 className="mb-4 text-2xl font-semibold">PASTI</h3>
            <p className="font-light text-gray-500 sm:text-sm dark:text-gray-400">
            Personalisasikan profilmu dengan pemilihan frame, tampil di halaman utama, dan dukungan relawan melalui formulir registrasi khusus untuk kampanye yang lebih efektif.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold"><span className="text-lg">Rp.</span> 1.499K</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {/*  List  */}
            <ul role="list" className="mb-8 space-y-4 text-left">
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
            {/* <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 absolute inset-x-0 bottom-5"
            >
              Get started
            </a> */}
            <Link href={'https://wa.me/6282339929257?text=Saya%20tertarik%20dengan%20Mudah%20Memiulih'} target="_blank">
            <button className="bg-primary w-full h-[64px] rounded-xl mt-3 lg:mt-[20px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceTable;
