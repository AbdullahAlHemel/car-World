import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Route = () => {
    return (
        <>
        <div className='max-w-[1200px] m-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet> </div>
            <Footer></Footer>
        </>
    );
};

export default Route;