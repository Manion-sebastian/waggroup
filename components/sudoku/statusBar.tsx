import React from 'react'
import { useState } from 'react'
import styles from '../../styles/sudoku/StatusBar.module.css'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



type Props = {
  time : number
  handlePause : any
  paused : boolean
}

const play = <FontAwesomeIcon icon={faPlay} />
const pause = <FontAwesomeIcon icon={faPause} />


const ParseTime = (time: number ) => {
  let stringSeconds;
  let stringMinutes;
  let stringHours;
  let seconds = time % 60
  if (seconds < 10) {
    stringSeconds =  `0${seconds}`
  } else {
    stringSeconds = seconds
  }
  let minutes = Math.floor(time / 60)
  if (minutes < 10) {
    stringMinutes = `0${minutes}`
  } else {
    stringMinutes = minutes
  }
  let hours = Math.floor(minutes / 60)
  if (hours < 10) {
    stringHours = `0${hours}`
  } else {
    stringHours = hours
  }
  return `${stringHours}:${stringMinutes}:${stringSeconds}`
}

const StatusBar = ({time, handlePause, paused}: Props) => {

  return (
    <div className={styles.container}>
      <div>
        SUDOKU
      </div>

        <div className={styles.timeCont}>
          <div className={styles.time} onClick={handlePause}>
            {paused ? play: pause }
          </div>
          <div className={styles.time}>
            {ParseTime(time)}
          </div>
        </div>

    </div>
  )
}

export default StatusBar