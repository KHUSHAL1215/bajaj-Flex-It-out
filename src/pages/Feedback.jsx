import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Feedback = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-500">Feedback Form</h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Subject..."
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none placeholder-gray-400 focus:ring-4 focus:ring-red-500 transition-all border border-gray-600 hover:border-red-500"
            />
            <textarea
              placeholder="Your Feedback..."
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none placeholder-gray-400 h-24 focus:ring-4 focus:ring-red-500 transition-all border border-gray-600 hover:border-red-500"
            />
            <input
              type="text"
              placeholder="Suggestions..."
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none placeholder-gray-400 focus:ring-4 focus:ring-red-500 transition-all border border-gray-600 hover:border-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
