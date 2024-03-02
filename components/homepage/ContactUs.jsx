import React from 'react'
import Testimonial from './Testimonial'
import TestimonialCarousel from "./TestimoniCarousel"

const ContactUs = () => {
  return (
    <div className='flex flex-col justify-center text-center font-sans bg-accent2 pt-20 pb-16 lg:pb-0 lg:mx-36 mx-4 rounded-xl rounded-tl-[52px] lg:mb-40 '>
        <div>
        <h1 className='mb-4 font-medium text-4xl '>Ingin Profil Kamu Lebih dikenal?</h1>
        <p className='mb-4'>Daftarkan profilmu ke mudamemilih.com </p>
        <button className=' bg-primary w-fit mx-auto px-6 py-3 rounded-2xl text-white '>Contact Us</button>
        </div>
        <Testimonial/>
        <TestimonialCarousel/>
    </div>
  )
}

export default ContactUs
