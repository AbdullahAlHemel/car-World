import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from 'react';
const ErrorPage = () => {
    useEffect(() => {
        AOS.init({duration:"2500"})})
    return (
        <div data-aos="zoom-out" className="hero ">
        <div className='my-64 text-center '>
            <h2 className=' text-red-500 font-semibold text-[36px] mb-2 '>Error 404</h2>
            <p> The page is not found</p>
            <Link className='btn mt-3' to='/'>Home</Link>
        </div>
        </div>
    );
    
};

export default ErrorPage;