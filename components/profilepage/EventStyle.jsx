import Image from "next/image";
import Link from "next/link";
import React from "react";

function EventStyle(props) {
    const {image, title, source, alt, date, key} = props
  return (
    <>
    <Link href={"/profile/event"}>
    
      <div key={key}  className="flex m-auto mt-10 border-0">
        <div
          className="flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        >
            <Image 
            width={500}
            height={100}
            src={image}
            className="w-[126px]"
            />
        </div>
        <div className="shadow-md border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <div className="overflow-auto">
            <div className="text-gray-900 font-bold text-xl">
            <p className="text-gray-600 text-[10px]">{date}</p>
              <h1 className="text-[18px]">{title}</h1>
            </div>
          </div>
          <div className="flex items-center">
            <Image
                width={200}
                height={200}
                className="w-10 h-10 rounded-full mr-4"
                src={image}
                alt={alt}
            />
            <div className="text-sm">
              <p className="text-gray-900">{source}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}

export default EventStyle;
