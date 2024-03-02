import Image from "next/image";
import Link from "next/link";


const ImageCarousel2 = ({
  src,
  name,
  dapil,
  partai,
  logoPartai,
  key,
  href,
  alt,
}) => {
  return (
    <Link href={href} key={key} >
    <div
    key={key}
      className="m-auto w-[auto] overflow-hidden rounded-3xl mx-4 relative group shadow-md shadow-black"
    >
      <h4 className="absolute top-0 right-0 bg-primary text-[7px] md:[10px] text-white px-3 py-1 rounded-bl-lg overflow-auto">
        {dapil}
      </h4>
      <img className="w-auto   object-cover" src={src} alt={alt} onError={(e) => e.target.src="https://ik.imagekit.io/m1akscp5q/Pasang%20profilemu%20disni.png?updatedAt=1705684733652"} />
      <div className="absolute top-4 left-0 right-0 p-1">
        <h4 className="text-[7px]  md:text-[14px] font-sans font-bold text-white mb-2 text-center text-stroke-thin text-stroke-color-primary">
          {name}
        </h4>
      </div>
      <div className="absolute bottom-0 left-0 right-0 pb-2 ">
        <span className="flex flex-row justify-start items-center align-middle pl-2">
          <img
            src={logoPartai}
            alt="Party Logo"
            className="w-[24px] h-auto rounded-sm"
          />
          <h5 className="text-white  text-[6px] sm:text-[9px] md:text-[9px] font-extrabold font-sans mx-2 ">
            {partai}
          </h5>
        </span>
      </div>

      <div className="flex-col absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clipRule="evenodd"
          ></path>
        </svg>
          <h1>Kepoin gue yuk</h1>
      </div>
    </div>
        </Link>
  );
};

export default ImageCarousel2;