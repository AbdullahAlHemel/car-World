import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init({duration:"900"})
        })
    return (
        <>     
        <div data-aos="zoom-out" >

    <div className='border border-orange-200 p-10 bg-[#fffef5a6] md:pt-[30px]'>
        
        <h1 className='text-orange-400 text-center mb-4 text-[25px] font-medium underline'>WELCOME TO CAR WORLD</h1>
      <div className="carousel w-full md:w-[850px] sm:mx-[30px] md:mx-[135px] md:h-[500px] bg-orange-200">
        <div id="item1" className="carousel-item w-full">
            <img className='w-[100%] h-full' src="https://i.ibb.co/8BRZPyH/pexels-oleksandr-p-376361.jpg" className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
            <img src="https://i.ibb.co/pLPWt8k/pexels-shaan-johari-2405039.jpg" className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
            <img src="https://i.ibb.co/pW4X3Gm/Baner-Car1.webp" className="w-full" />
        </div> 
        <div id="item4" className="carousel-item w-full">
            <img src="https://i.ibb.co/hHBv84R/pexels-s-von-hoerst-2920064.jpg" className="w-full" />
        </div>
        </div> 
        <div className="flex justify-center w-full py-5  gap-4">
        <a href="#item1" className="btn btn-xs md:text-[20px] bg-red-700 text-white hover:bg-blue-600 ">1</a> 
        <a href="#item2" className="btn btn-xs md:text-[20px] bg-red-700 text-white hover:bg-blue-600">2</a> 
        <a href="#item3" className="btn btn-xs md:text-[20px] bg-red-700 text-white hover:bg-blue-600">3</a> 
        <a href="#item4" className="btn btn-xs md:text-[20px] bg-red-700 text-white hover:bg-blue-600">4</a>
        </div>
    </div>
    </div>
     </>
    );
};
export default Banner;