import React from 'react';
import logo from "../assets/body_building-removebg-preview(2).png";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='bg-black w-full h-[70px] px-10 flex justify-between items-center'>
      <img src={logo} alt="Logo" className='h-16' />
      <div className='flex space-x-10 text-white text-lg uppercase'>
        <NavLink to="/home" className='text-white text-sm sm:text-lg uppercase font-semibold transition duration-300 hover:text-red-500 hover:scale-110'>Home</NavLink>
        <NavLink to="/aboutus" className='text-white text-sm sm:text-lg uppercase font-semibold transition duration-300 hover:text-red-500 hover:scale-110'>About Us</NavLink>
        <NavLink to="/account" className='text-white text-sm sm:text-lg uppercase font-semibold transition duration-300 hover:text-red-500 hover:scale-110'>Account</NavLink>
      </div>
    </div>
  );
};
