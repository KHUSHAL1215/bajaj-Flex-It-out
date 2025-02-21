import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const rankingsData = {
  Global: [
    { rank: 1, name: 'Alice', score: 95, calories: 300 },
    { rank: 2, name: 'Bob', score: 90, calories: 280 },
    { rank: 3, name: 'Charlie', score: 85, calories: 260 },
    { rank: 4, name: 'David', score: 80, calories: 250 },
    { rank: 5, name: 'Eve', score: 75, calories: 230 },
  ],
  Curls: [
    { rank: 1, name: 'Frank', score: 60, calories: 200 },
    { rank: 2, name: 'Grace', score: 58, calories: 190 },
    { rank: 3, name: 'Hank', score: 55, calories: 180 },
    { rank: 4, name: 'Ivy', score: 50, calories: 170 },
    { rank: 5, name: 'Jack', score: 45, calories: 160 },
  ],
  Press: [
    { rank: 1, name: 'Kevin', score: 70, calories: 250 },
    { rank: 2, name: 'Laura', score: 68, calories: 240 },
    { rank: 3, name: 'Mike', score: 65, calories: 230 },
    { rank: 4, name: 'Nina', score: 60, calories: 220 },
    { rank: 5, name: 'Oscar', score: 58, calories: 210 },
  ],
  Squats: [
    { rank: 1, name: 'Paul', score: 80, calories: 280 },
    { rank: 2, name: 'Quinn', score: 78, calories: 270 },
    { rank: 3, name: 'Rachel', score: 75, calories: 260 },
    { rank: 4, name: 'Steve', score: 70, calories: 250 },
    { rank: 5, name: 'Tom', score: 68, calories: 240 },
  ],
};

export const Ranking = () => {
  const [selectedCategory, setSelectedCategory] = useState('Global');

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center py-8 flex-grow">
        <div className="flex gap-6 mb-8">
          {Object.keys(rankingsData).map((category) => (
            <button
              key={category}
              className={`px-8 py-4 text-xl font-semibold rounded-full transition-all shadow-lg ${
                selectedCategory === category
                  ? 'bg-gray-700 text-white scale-110'
                  : 'bg-gray-600 text-gray-300 hover:bg-gray-500 hover:scale-105'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-8 w-full max-w-2xl shadow-2xl transform transition-all scale-105">
          <table className="w-full text-center text-lg">
            <thead>
              <tr className="border-b-4 border-gray-700 text-2xl">
                <th className="py-4">Rank</th>
                <th>Name</th>
                <th>Score</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {rankingsData[selectedCategory].map((user) => (
                <tr key={user.rank} className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-4 font-bold">{user.rank}.</td>
                  <td className="capitalize">{user.name}</td>
                  <td className="text-green-400 font-semibold">{user.score}</td>
                  <td className="text-yellow-400 font-semibold">{user.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};
