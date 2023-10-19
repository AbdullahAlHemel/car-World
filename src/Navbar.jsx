import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './Auth/AuthProvider';
import logo from '/carLogoU.png'

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
         .then()
         .catch()
  }


    const navLinks = <>
            <li className='md:mx-1 md:text-xl md:font-semibold border rounded-md'><NavLink to='/'>Home</NavLink></li>
            <li className='md:mx-2 md:text-xl md:font-semibold border rounded-md'><NavLink to='/addcar'>Add Car</NavLink></li>
            <li className='md:mx-1 md:text-xl md:font-semibold border rounded-md'><NavLink to='/special'>Special</NavLink></li>
            <li className='md:mx-1 md:text-xl md:font-semibold border rounded-md'><NavLink to='/mycard'>My Card</NavLink></li>
            <li className='md:mx-2 md:text-xl md:font-semibold border rounded-md'><NavLink to='/signin'>Sign In</NavLink></li>
            <li className='md:mx-1 md:text-xl md:font-semibold border rounded-md'><NavLink to='/contract'>Contract</NavLink></li>
       
    </>
    return (
        <div class="navbar bg-base-100">
<div class="navbar-start">
<img className='md:w-[160px] md:h-[80px] md:mr-0 mr-16 w-[75px] h-[35px]'  src={logo} alt="" />

  <div class="dropdown">
    <label tabindex="0" class="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-200 rounded-box w-52">
     {navLinks}
    </ul>
  </div>
</div>
<div class="md:navbar-center hidden lg:flex">
  <ul class="menu menu-horizontal px-1">
    {navLinks}
  </ul>
</div>
<div class="navbar-end">
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        {/* <img src={userDefaultPic} /> */}
      </div>
    </label>
    {
      user ?  
      
    <>  
       <button onClick={handleSignOut} className=" flex">
       <p className="btn md:w-[100px] w-[40px] border border-y-red-900 bg-red-100">Sign Out</p></button>

       <div className="">
        {/* {user.email} */}
       <img style={{borderRadius:'50%',marginLeft:'40%', width:'40%'}} src= {user.photoURL} alt="" />
        <h2 className="text-[10px] ml-3">{user.displayName}</h2>
        </div>
    </> : 
     <Link to='/signin' className="ml-3" class="btn bg-blue-200">Login</Link>
    }
</div>
</div>
    );
};

export default Navbar;