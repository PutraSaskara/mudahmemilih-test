import React from 'react';
import Image from 'next/image';
import profileFoto from '../../public/profileFoto.jpg'
import heroBg2 from '../../public/heroBg2.png'

function Hero() {
  return (
    <div className='mt-[100px] lg:mx-5'>
      <div className='mb-20 relative w-full flex items-end'>
        {/* Background image */}
        <Image
          src={heroBg2}
          alt="Background Image"
          width={300}
          height={300}
          className='w-full h-[183px] lg:h-[631px]'
        />


          {/* Add other content or buttons as needed */}
        <div className='absolute ml-5 -bottom-10'>
            <Image
            src={profileFoto}
            alt='profile'
            width={84}
            height={140}
            className='lg:w-[200px]'
            />
        </div>
      </div>
    </div>
  );
}

export default Hero;
