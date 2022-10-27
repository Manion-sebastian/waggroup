// Next
import type { MSTimer } from '../../typingIan'
import styles from '../../styles/minesweeper/Timer.module.css'

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
    <div className={styles.timerContainer}>
      <p className={styles.title}>TIME</p>
      <p className={styles.timer}>{time.toString().padStart(3, '0')}</p>
    </div>
  )
}

export default TimerDisplay