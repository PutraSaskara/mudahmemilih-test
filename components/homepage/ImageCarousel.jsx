import Link from "next/link";

const ImageCarousel = ({ src, name, dapil, partai, logoPartai, key, href, alt }) => {
  return (
    <Link href={href} key={key}>
      <div className="m-auto max-w-sm overflow-hidden rounded-lg mx-4 bg-slate-400 relative group">
        <h4 className="absolute top-0 right-0 bg-primary text-[7px] sm:text-[10px] text-white px-3 py-1 rounded-bl-lg">
          {dapil}
        </h4>
        <img className="w-full object-cover" src={src} alt={alt} onError={(e) => e.target.src="https://ik.imagekit.io/m1akscp5q/Pasang%20profilemu%20disni.png?updatedAt=1705684733652"}/>
        <h4 className="text-[7px] sm:text-[9px] md:text-[11px] font-sans text-white bg-black bg-opacity-25 text-center mb-2 absolute top-5 left-0 right-0">
          {name}
        </h4>
        <div className="absolute bottom-0 left-0 right-0 pb-2 ">
          <span className="flex flex-row justify-start items-center align-middle">
            <img
              src={logoPartai}
              alt="Party Logo"
              className="w-[24px] h-[24] rounded-sm ml-1"
            />
            <h5 className="text-white text-[6px] sm:text-[9px] md:text-[12px] font-sans mx-2 ">
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

export default ImageCarousel;
