import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
// import {  } from "react-router-dom";

import axios from "axios";
import logo from "../assets/body_building-removebg-preview(2).png";

export const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Validate inputs
    if (name.length > 10) {
      setError("Name must be 10 characters or less.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:9000/api/user/signup", {
        name,
        email,
        password,
      });
      // console.log("Signup successful:", response.data);

      navigate('/login');
      setError(""); // Clear error if successful
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 p-4">
      <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 max-w-full">
        <h2 className="text-white text-4xl font-bold text-center mb-6">SignUp</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="flex flex-col" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 text-white mb-4 border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition duration-300"
          />
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 text-white mb-4 border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition duration-300"
          />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 text-white mb-4 border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition duration-300"
          />
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition duration-300"
          >
            SignUp
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <NavLink to="/" className="text-red-500 cursor-pointer hover:underline">
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};
