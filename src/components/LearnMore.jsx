import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from 'react';
const LearnMore = () => {
  useEffect(() => {
    AOS.init({duration:"1100"})
    })
    return (
      <div data-aos="zoom-in-up" className="hero ">

        <div className='flex max-w-[1000px] rounded mx-auto border p-10 py-32 mb-10 bg-[#ffcece]'>

        <div className='md:max-w-[450px] m-auto'>
          <video  width="300" height="200"  controls playsinline loop muted autoplay>
          <source src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Automotive%20Life/bmw-explained-logo/exl-01-stage-hd9.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
       </div>
         <div className='font-serif sm:ml-8'>
            <h2 className='md:text-[25px] text-[20px] font-bold'>World Top Brand Now</h2>
            <h1 className='md:text-[40px] text-[30px] font-semibold'> 1. <span className='text-[#055cc6]'>BMW</span></h1>
            <h1 className='md:text-[40px] text-[25px] font-semibold'> 2. <span className='text-[#474f5a]'>Mercitiz-Benz</span></h1>
            <h1 className='md:text-[40px] text-[25px] font-semibold'> 3. <span className='text-[#e25125]'>Rolls-Royce Motor Cars</span></h1>
         </div>
   
       </div>
        </div>
    );
};

export default LearnMore;