import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-black w-full py-5">
      <div className="border-t border-white w-full mb-4"></div>
      <div className="flex justify-between items-center px-10 text-white">
        <p className="text-lg">
          <span className="text-red-500 font-bold">FLEX-IT-OUT</span> | Powered by Passion
        </p>
        <div className="flex space-x-4 items-center">
          <p className="text-lg">Follow us on -</p>
          <NavLink to="/home">
            <FaFacebookF className="text-gray-400 text-2xl hover:text-white cursor-pointer" />
          </NavLink>
          <NavLink to="https://www.instagram.com/flexitout2025">
            <FaInstagram className="text-gray-400 text-2xl hover:text-white cursor-pointer" />
          </NavLink>
          <NavLink to="/home">
            <FaTwitter className="text-gray-400 text-2xl hover:text-white cursor-pointer" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
