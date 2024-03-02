
"use client"
import React, { useEffect, useState } from "react";



const Completionist = () => (
  <span className="text-lg text-green-500">The countdown is complete!</span>
);

const CountdownComponent = (props) => {
  // Set the target countdown date
  const targetDate = new Date("2024-02-14");
  // State to store countdown values
  const [countdownValues, setCountdownValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    completed: false,
  });

  useEffect(() => {
    const calculateCountdownValues = () => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setCountdownValues({
          days,
          hours,
          minutes,
          seconds,
          completed: false,
        });
      } else {
        setCountdownValues({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          completed: true,
        });
      }
    };

    // Calculate initial countdown values
    calculateCountdownValues();

    // Update countdown values every second
    const countdownInterval = setInterval(calculateCountdownValues, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []); // Empty dependency array means it runs once on mount

  // Renderer function
  const { days, hours, minutes, seconds, completed } = countdownValues;

  return completed ? (
    <Completionist />
  ) : (
    <div
      className={`justify-centre space-x-[36px] py-4 px-2 md:px-6 rounded font-sans w-fit ${props.style}`}
    >
      <div className="text-4xl text-center text-amber-600 font-bold ">
        {days}
        <div className=" text-black text-lg font-thin">days</div>
      </div>
      <div className="text-4xl text-center text-amber-600 font-bold">
        {hours}
        <div className="text-black text-lg font-medium">hours</div>
      </div>
      <div className="text-4xl text-center text-amber-600 font-bold">
        {minutes}
        <div className="text-black text-lg font-thin"> minutes </div>
      </div>
      <div className="text-4xl text-center text-amber-600 font-bold ">
        {seconds}
        <div className="text-black text-lg font-thin"> seconds </div>
      </div>
    </div>
  );
};

export default CountdownComponent;
