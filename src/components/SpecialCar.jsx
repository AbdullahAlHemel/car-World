import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from 'react'
const SpecialCar = () => {
    useEffect(() => {
        AOS.init({duration:"900"})
        })
    return ( <div data-aos="zoom-out">
        <div className='md:my-10 md:mb-16'>
            <h2 className=' text-center text-[30px] font-semibold my-6'>SPECIAL LIMITED EDITION</h2>
        < div className='grid grid-cols-1 md:grid-cols-3'>
    <div className="card w-96  bg-base-100 shadow-xl">
        <figure><img className='' src="https://i.ibb.co/nrNCfmQ/sp11.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-slate-600">Rolls-Royce <p className='text-[15px] my-3'>sp-99</p></h2>
          <p className='text-slate-500'>Rolls-Royce has unveiled one of the world's most expensive and exclusive cars, with a price tag exceeding $30 million. The company has named this one-of-a-kind masterpiece 'La Rose Noire Droptail,' which means black rose and represents the first of four distinct Rolls-Royce Droptail commissions</p>
            <h2 className='text-center text-red-600 font-semibold'> Budget: <p className='text-[24px]'>$ 20000000000</p></h2>
        </div>
    </div>
    <div className="card w-96  bg-base-100 shadow-xl">
        <figure><img className='' src="https://i.ibb.co/CVLxfsy/sp34.webp" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-slate-600">Bugatti <p className='text-[15px] my-3'>Ghost-101</p></h2>
          <p className='text-slate-500'>This low-drag model, which is based on the Jesko, has an extended body, no rear wing, and a more powerful 1,600bhp 5.0-litre turbocharged V8. Koenigsegg can achieve the top speed of 192 kmph, and the previous record they have set motivates them to outperform Bugatti.</p>
          <h2 className='text-center text-blue-600 font-semibold'> Budget: <p className='text-[24px]'>$ 300000000</p></h2>
          
        </div>
    </div>
    <div className="card w-96  bg-base-100 shadow-xl">
        <figure><img className=' md:h-[220px] md:w-full' src="https://i.ibb.co/0YLBhT4/sp283.webp" alt="Shoes" /></figure>
       <div className='md:mt-5 p-5'> <h2 className=" card-title text-slate-600">Rolls-Royce <p className='text-[15px] my-3'>9-X9</p></h2>
          <p className='text-slate-500'>Rolls-Royce Motor Cars Limited is a British luxury automobile maker which has operated as a wholly owned subsidiary of BMW AG since 2023 which means black rose and represents the first of four distinct Rolls-Royce Droptail commissions</p>
          </div>  
            <h2 className=' mt-4 text-center text-green-600 font-semibold'> Budget: <p className='text-[24px]'>$ 1000500000</p></h2>
    </div></div>
    </div></div>
    )
};

export default SpecialCar;