import { useEffect, useState } from "react";

export const Leaderboard = ({exerciseName}) => {
    // const leaderboardData = [
    //   { name: "user1", score: 230 },
    //   { name: "user3", score: 220 },
    //   { name: "user2", score: 210 },
    //   { name: "user10", score: 150 },
    // ];
    const[leaderboardData, setLeaderboardData] = useState([]);
    useEffect(()=>{
      async function fetchAccountData() {
        try {
  
          // console.log("++++++++++++++ We did it+++++++++++++++");
          if(exerciseName === "Bicep Curl"){
            const response = await fetch("http://127.0.0.1:9000/api/user/leaderBoardCurls", {
              method: "GET",
              credentials: "include",
            });
            const data = await response.json(); 
            console.log(data.data.board);
            setLeaderboardData(data.data.board);
          } 
          else if(exerciseName === "Press"){
            const response = await fetch("http://127.0.0.1:9000/api/user/leaderBoardPress", {
              method: "GET",
              credentials: "include",
            });
            const data = await response.json();
            console.log(data.data.board);
            setLeaderboardData(data.data.board);
          } 
          else if(exerciseName === "Squat"){
            const response = await fetch("http://127.0.0.1:9000/api/user/leaderBoardSquats", {
              method: "GET",
              credentials: "include",
            });
            const data = await response.json();
            console.log(data.data.board);
            setLeaderboardData(data.data.board);
          } 
          else{
            const response = await fetch("http://127.0.0.1:9000/api/user/leaderBoardGlobal", {
              method: "GET",
              credentials: "include",
            });
            const data = await response.json();
            // console.log(data.data.board);
            setLeaderboardData(data.data.board);
          } 
        } catch (err) {
        }   
      }
      fetchAccountData();
    },[exerciseName])
  
    return (
      <div className="w-64 bg-gray-900 text-white p-4 rounded-xl border-2 border-red-500 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <span className="text-xl font-bold text-red-400">🏆 Leaderboard</span>
        </div>
        <div className="flex flex-col gap-3">
          {leaderboardData.map((user, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-800 p-2 rounded-lg shadow-md"
            >
              <span className="text-lg font-semibold"> {index + 1}. {user.username} </span>
              <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm">
              {exerciseName === "Bicep Curl"
                  ? user.curls
                  : exerciseName === "Press"
                  ? user.pushups
                  : exerciseName === "Squat"
                  ? user.squats
                  : user.total}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  