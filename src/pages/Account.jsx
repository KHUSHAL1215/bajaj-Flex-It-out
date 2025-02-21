import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import squatIcon from "../assets/Squat_icon-removebg-preview.png";
import pushupIcon from "../assets/pushup_icon-removebg-preview.png";
import curlIcon from "../assets/bicep_curl_icon-removebg-preview.png";
import { useNavigate } from 'react-router-dom';
import { Leaderboard } from '../components/Leaderboard';
// import { response } from '../../backend/App';
// import axios from 'axios';

export const Account = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  // const [currentPassword, setCurrentPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [position, setPosition] = useState();
  // console.log("start");

  useEffect(() =>{
    async function fetchPosition(){
      const response = await fetch("http://127.0.0.1:9000/api/user/leaderBoardGlobal", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      console.log(data.data);
      setPosition(data.data.myPosition);
    }
    fetchPosition();
  },[])

  useEffect(() => {
    async function fetchAccountData() {
      try {

        // console.log("++++++++++++++ We did it+++++++++++++++");
        const response = await fetch("http://127.0.0.1:9000/api/user/myaccount", {
          method: "GET",
          credentials: "include", // Same as withCredentials: true
        });
        const data = await response.json();
        console.log(data.data.user);
        setUserData(data.data.user);
        // console.log("++++++++++++++ We did it+++++++++++++++");
      } catch (err) {
        navigate('/login');
      }   
    }
    fetchAccountData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/user/logout", {
        method: "GET",
        credentials: "include", // Important to send and receive cookies
      });
  
      if (response.ok) {
        alert("Logout successful!");
        // Redirect or update UI
        navigate("/login");
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };  

  // const handleResetPassword = async () => {
  //   try{ 
  //     if(newPassword !== confirmNewPassword){
  //       throw new Error("Passwords do not match");
  //     }
  //     await fetch("http://localhost:9000/api/user/resetPassword", {
  //       method: "POST",
  //       credentials: "include", 
  //       body: JSON.stringify({ currentPassword, newPassword }),
  //     });
  //     alert("Password changed");

  //   }catch(err){ 
  //     alert(err.message || "Try Again");
  //   }
  // }
  

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-5">
      <Navbar />

      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-center p-10 rounded-xl shadow-2xl min-h-[600px] md:space-x-10 md:space-y-0 space-y-10">
        {/* User Details Section */}
        <div className="flex flex-col w-full md:w-1/2 space-y-6 p-6 rounded-lg shadow-lg">
          {userData ? (
            <>
              <h2 className="text-3xl font-bold text-red-500">Name: {userData.username}</h2>
              <h3 className="text-lg">Email: {userData.email}</h3>
              <h3 className="text-xl font-semibold">Total Score: {userData.total}</h3>

              <div className="space-y-4">
                <div className="flex items-center bg-gray-700 px-6 py-4 rounded-lg w-full shadow-md">
                  <img src={squatIcon} alt="Squats" className="w-6 h-6 mr-4" />
                  <span className="flex-grow">Squats</span>
                  <span className="font-bold">{userData.squats}</span>
                </div>
                <div className="flex items-center bg-gray-700 px-6 py-4 rounded-lg w-full shadow-md">
                  <img src={pushupIcon} alt="Push ups" className="w-6 h-6 mr-4" />
                  <span className="flex-grow">Press</span>
                  <span className="font-bold">{userData.pushups}</span>
                </div>
                <div className="flex items-center bg-gray-700 px-6 py-4 rounded-lg w-full shadow-md">
                  <img src={curlIcon} alt="Curls" className="w-6 h-6 mr-4" />
                  <span className="flex-grow">Curls</span>
                  <span className="font-bold">{userData.curls}</span>
                </div>
              </div>

              <button className="bg-red-600 p-4 rounded-lg text-white font-bold w-full hover:bg-red-700 transition" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="flex flex-col space-y-4 w-full md:w-1/2 p-6 rounded-lg shadow-lg">
          {/* <input type="password" onChange={(e) => setCurrentPassword(e.target.value)} value={currentPassword} placeholder="Current password" className="bg-gray-700 p-4 rounded-lg text-white w-full focus:ring-2 focus:ring-red-500" />
          <input type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} placeholder="New Password" className="bg-gray-700 p-4 rounded-lg text-white w-full focus:ring-2 focus:ring-red-500" />
          <input type="password" onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} placeholder="Password confirm" className="bg-gray-700 p-4 rounded-lg text-white w-full focus:ring-2 focus:ring-red-500" />
          <button className="bg-red-600 p-4 rounded-lg text-white font-bold w-full hover:bg-red-700 transition" onClick={handleResetPassword}>
          Reset Password
          </button> */}
          <Leaderboard exerciseName={""}/>
          <h2 className="text-3xl font-bold text-red-500">Your Position: {position}</h2>
        </div>
      </div>

      <Footer />
    </div>
  );
};
