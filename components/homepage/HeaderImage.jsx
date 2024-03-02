"use client"

import React from 'react'
import CountdownComponent from "./CountdownComponent";

const HeaderImage = () => {
  return (
    <div>
        <div className="relative flex justify-center ">
            <img
              src="https://ik.imagekit.io/m1akscp5q/Group%201328.png?updatedAt=1702042098665"
              alt="mockup"
            />
            <CountdownComponent style="hidden lg:flex absolute bottom-0 bg-white rounded-xl lg:right-18 shadow-lg"/>
          </div>
      
    </div>
  )
}

export default HeaderImage
