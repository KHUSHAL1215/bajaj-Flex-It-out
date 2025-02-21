import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const About = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen overflow-hidden flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center text-center px-8 md:px-16 lg:px-24 xl:px-32 py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-100">About Us</h1>
        <p className="text-xl md:text-2xl max-w-4xl leading-relaxed text-gray-300">
          Welcome to <span className="font-semibold text-white">Flex-It-Out</span>, where fitness meets fun! <br />
          We are a passionate team of five fitness enthusiasts and tech geeks who believe that working out 
          should be exciting, not boring! That’s why we built this platform—to transform your reps into rewards 
          and make workouts a fun, competitive experience!
        </p>
        <p className="text-xl md:text-2xl max-w-4xl mt-8 leading-relaxed text-gray-300">
          Our goal is simple: Make fitness engaging, competitive, and motivating. Whether you're smashing 
          push-ups, squats, or crunches, we track your reps and award points to keep you motivated. Climb 
          the leaderboard, challenge your friends, and make every workout count!
        </p>
        <p className="text-xl md:text-2xl font-semibold mt-10 text-white">
          Our Team: Ketan Modgil, Khushal Goyal ,Kumar Garg ,Harshit & Kush
        </p>
      </div>

      <Footer />
    </div>
  );
};
