// Next
import type { MSTimer } from '../../typingIan'

// React
import React from 'react'
import { useState, useEffect } from 'react'

type Props = {}

const TimerDisplay = ({gameRunning}: MSTimer) => {
  const [time, setTime] = useState(0)
    
  if(gameRunning) {
    useEffect(() => {
      
      const timerStart = setInterval(() => {
        setTime(time + 1)
      }, 1000)
  
      return () => clearInterval(timerStart)
    }, [time])
  }

  return (
    <div>
      {time}
    </div>
  )
}

export default TimerDisplay