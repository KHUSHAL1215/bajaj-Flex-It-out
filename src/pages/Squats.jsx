import React from 'react'
import { Exercise } from './Excerise'

const  squatVd = "https://drive.google.com/file/d/1IdJNW90vnetPI4sz2FQXOeeVLvRK3HmJ/preview";


export const Squats = () => {
  return (
    <div>
          <Exercise
            exerciseName="Squat"
            points={2}
            videoUrl={squatVd}
          />
        </div>
  )
}
