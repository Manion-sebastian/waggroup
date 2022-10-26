import React from 'react'
import { useState, useEffect } from 'react'

type Props = {}

const TimerDisplay = (props: Props) => {
  const [time, setTime] = useState(0)
    
  useEffect(() => {
    const timerStart = setInterval(() => {
      setTime(time + 1)
    }, 1000)

    return () => clearInterval(timerStart)
  }, [time])

  return (
    <div>
      {time}
    </div>
  )
}

export default TimerDisplay