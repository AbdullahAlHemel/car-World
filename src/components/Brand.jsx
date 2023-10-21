import React from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
    return (
        <> <h2 className='text-center md:text-[40px] font-bold underline mt-10'>Choice Your brand</h2>
        <div className='grid grid-cols-2 m-auto gap-9 md:px-[180px] border my-16'>

           <Link to='/bmw'> <img className='hover:bg-blue-100 p-4 h-[100px] mt-10 md:w-[100px] md:h-[300px] md:w-[300px]' src={'https://i.ibb.co/CK7kMTG/1686386597bmw-logo-png.png'} alt="" /></Link>
           <Link to='/tesla'> <img className='hover:bg-red-100  md:p-7 my-10 h-[100px] md:w-[100px] md:h-[300px] md:w-[300px]' src={'https://i.ibb.co/sRHjDx0/1686389292tesla-logo-png.png'} alt="" /></Link>
           <Link to='/bugatti'><img className='hover:bg-pink-100 h-[100px] md:w-[100px]  md:h-[300px] md:w-[300px]' src={'https://i.ibb.co/Bz37NYv/bugatti-logo.png'} alt="" /></Link>      
           <Link to='/toyota'><img className='hover:bg-gray-100 md:p-5 my-5 h-[90px] w-[120px] md:h-[300px] md:w-[400px]' src={'https://i.ibb.co/ZG7Kq7f/580b57fcd9996e24bc43c4a3.png'} alt="" /></Link>
           <Link to='/mbenz'> <img className='md:mb-8  hover:bg-gray-200 h-[100px] md:w-[100px] md:h-[300px] md:w-[300px]' src={'https://i.ibb.co/NpSxVts/mercedes-benz-logo-512x512.png'} alt="" /></Link>
           <Link to='/honda'><img className='hover:bg-gray-200 p-5 md:mt-4 h-[100px] md:w-[100px] md:ml-[50px] md:h-[250px] md:w-[300px]' src={'https://i.ibb.co/d49fGJM/1686369776honda-logo-png.png'} alt="" /></Link>
        </div></>
    );
};

export default Brand;