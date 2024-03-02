import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function TeamCard({name, img, job, linkedIn, github}) {
  return (
    <div className="flex flex-col justify-center w-[150px] sm:w-[170px] md:w-[200px] lg:w-[250px] p-6 shadow-xl bg-gray-200 rounded-xl text-black">
      <img
        src={img}
        alt={name}
        className="w-[55%] h-[60%] mx-auto dark:bg-gray-500 rounded-xl"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
          <p className=" text-xs sm:text-base text-black">
            {job}
          </p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          <a
            rel="noopener noreferrer"
            href={github}
            target="_blank"
            aria-label="GitHub"
            className="p-2 rounded-md dark:text-black hover:dark:text-violet-400"
          >
            <FaGithub/>
          </a>
          <a
            rel="noopener noreferrer"
            href={linkedIn}
            target="_blank"
            aria-label="LinkedIn"
            className="p-2 rounded-md dark:text-black hover:dark:text-violet-400"
          >
            <FaLinkedin/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
