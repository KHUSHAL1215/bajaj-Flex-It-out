import React, { useEffect, useState } from "react";

export const WebcamFeed = ({ exerciseName, serverPort }) => {
  const [repCount, setRepCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`http://localhost:${serverPort}/count`)
        .then((res) => res.json())
        .then((data) => setRepCount(data.rep_count || data.curl_count || data.press_count || data.squat_count ||0));
    }, 1000);

    return () => clearInterval(interval);
  }, [serverPort]);

  return (
    <div className="flex flex-col items-center">
      <img
        src={`http://localhost:${serverPort}/start`}
        alt="Webcam Feed"
        className="w-[500px] h-[400px] rounded-lg border-2 border-white"
      />
      <h2 className="text-white text-2xl mt-4">{exerciseName}: {repCount}</h2>
    </div>
  );
};