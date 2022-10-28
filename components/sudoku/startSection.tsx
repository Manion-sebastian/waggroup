import React from 'react'
import { Button } from 'antd'
import styles from '../../styles/sudoku/Board.module.css'

type Props = {
    handleStartGame: any
    gameStarted : string
}

const StartSection = ({handleStartGame, gameStarted}: Props) => {

  return (
    
    <div className={styles.controlButtonConstraints} >
        <Button type='primary' onClick={handleStartGame}>{gameStarted}</Button>
        <Button type='primary' >Check Game</Button>
    </div>
  )
}

export default StartSection