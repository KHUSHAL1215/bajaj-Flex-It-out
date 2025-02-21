import React from "react";
import { Footer } from "../components/Footer";
import bgImage from "../assets/Home.png";
import logo from "../assets/body_building-removebg-preview(2).png";
import { NavLink } from "react-router-dom";
import pushup from "../assets/push-up.png";
import squat from "../assets/squats.png";
import curls from "../assets/curls.png";

export const Home = () => {
  return (
    <div className="bg-black text-white">
      <div className="fixed top-0 left-0 w-full h-[80px] bg-black bg-opacity-90 flex items-center px-6 sm:px-10 shadow-lg z-50">
        <div className="flex-1">
          <img src={logo} alt="Logo" className="h-14 sm:h-16" />
        </div>
        <div className="flex items-center space-x-6 sm:space-x-10">
          {["Home","Rankings","About Us", "Feedback" ,"Account"].map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="text-white text-sm sm:text-lg uppercase font-semibold transition duration-300 hover:text-red-500 hover:scale-110"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center px-6 sm:px-16"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-left max-w-2xl">
          <h1 className="text-5xl sm:text-7xl font-extrabold">
            <span className="text-red-600">GYM</span> FITNESS
          </h1>
          <h2 className="text-2xl sm:text-4xl font-semibold mt-2 text-red-500">
            NO PAIN NO GAIN
          </h2>
          <p className="mt-6 text-md sm:text-lg leading-relaxed">
            Compete. Track. Improve.
            <br />
            Challenge yourself and others by tracking your push-ups, squats, and crunches.
            Earn your spot on the leaderboard and push your limits every day!
          </p>
        </div>
      </div>

      <div className="py-20">
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          CLIMB THE LEADERBOARD
        </h2>

        <div className="flex flex-wrap justify-center gap-8 px-6">
          {[
            { name: "Squats", img: squat, link: "/Squat", points: 2 },
            { name: "Press", img: pushup, link: "/Press", points: 3 },
            { name: "Curls", img: curls, link: "/Curl", points: 1 },
          ].map((exercise, index) => (
            <NavLink
              key={index}
              to={exercise.link}
              className="relative w-80 h-96 rounded-lg overflow-hidden group transform transition-all duration-500 hover:scale-105 border border-red-500"
            >
              <img
                src={exercise.img}
                alt={exercise.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
                <h3 className="text-2xl font-semibold">{exercise.name}</h3>
                <p className="text-lg mt-2">
                  Earn {exercise.points} points for every {exercise.name}.
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
