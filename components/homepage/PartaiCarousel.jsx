import React from 'react'

const PartaiCarousel = ({ src,alt }) => {
  return (
    <div className=' '>
        <div className=' border  w-fit rounded-2xl shadow-lg mx-2 my-4'>
        <img src={src} alt={alt} className='rounded-2xl'/>
        </div>
    </div>
  )
}

export default PartaiCarousel
