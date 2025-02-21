import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { WebcamFeed } from "../components/WebcamFeed";
import { Leaderboard } from "../components/Leaderboard";

const getServerPort = (exerciseName) => {
  const exercisePorts = {
    "Bicep Curl": 5000,
    "Press": 5001,
    "Squat": 5002,
  };
  return exercisePorts[exerciseName] || 5000;
};

export const Exercise = ({ exerciseName, points, videoUrl }) => {
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [repCount, setRepCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const serverPort = getServerPort(exerciseName);

  useEffect(() => {
    if (isWebcamActive) {
      const interval = setInterval(() => {
        fetch(`http://localhost:${serverPort}/count`)
          .then((res) => res.json())
          .then((data) => {
            let newCount = data.rep_count || data.curl_count || data.press_count || data.squat_count || 0;
            if (newCount !== prevCount) {
              setRepCount(newCount);
              setPrevCount(newCount);
            }
          })
          .catch((err) => console.error("Fetch Error:", err));
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isWebcamActive, serverPort, prevCount]);

  const handleStart = () => {
    setIsWebcamActive(true);
    setRepCount(0);
    setPrevCount(0);
  };

  const handleStop = () => {
    fetch(`http://localhost:${serverPort}/stop`).then(() => {
      setIsWebcamActive(false);
      setTotalPoints((prev) => prev + repCount * points);
    });
  };

  // Check if the URL is a Google Drive link and convert it
  const isGoogleDriveVideo = videoUrl.includes("drive.google.com");
  const driveEmbedUrl = isGoogleDriveVideo
    ? videoUrl.replace("/view?usp=sharing", "/preview")
    : videoUrl;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow w-full bg-black flex items-center justify-center gap-8 p-4 relative">
        <div className="absolute top-5 right-8 bg-gray-800 text-white px-6 py-3 rounded-lg text-xl font-semibold shadow-md">
          Points Earned: {totalPoints}
        </div>
        <div className="w-[65%] max-w-3xl h-[500px] bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
          {isWebcamActive ? (
            <WebcamFeed exerciseName={exerciseName} serverPort={serverPort} />
          ) : (
            <>
              {isGoogleDriveVideo ? (
                <iframe
                  src={driveEmbedUrl}
                  className="w-full h-full rounded-lg"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              ) : (
                <video src={videoUrl} controls className="w-full h-full rounded-lg" />
              )}
            </>
          )}
        </div>
        <div className="flex flex-col items-center gap-4">
          <Leaderboard exerciseName={exerciseName} />
          {!isWebcamActive ? (
            <button
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-xl font-semibold"
              onClick={handleStart}
            >
              START
            </button>
          ) : (
            <button
              className="bg-gray-500 text-white px-6 py-3 rounded-lg text-xl font-semibold mt-2"
              onClick={handleStop}
            >
              STOP
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
