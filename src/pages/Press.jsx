import React from 'react'
import { Exercise } from './Excerise'

const pushupVd = "https://drive.google.com/file/d/19GeQUqf6tOicu6e6Tt-XnIRmnzRfFnSj/preview";

export const Press = () => {
  return (
    <div>
          <Exercise
            exerciseName="Press"
            points={3}
            videoUrl= {pushupVd}
          />
        </div>
  )
}
