import React from 'react';
import { Exercise } from './Excerise';
const curlVd = "https://drive.google.com/file/d/17MYrrHpCYQWyBE6aJ-DTyeS7R2QEBvEo/preview";

export const Curl = () => {
  return (
    <div>
      <Exercise
        exerciseName="Bicep Curl"
        points={1}
        videoUrl={curlVd}
      />
    </div>
  );
};


