import React from 'react'
import { Button } from 'antd'
import styles from '../../styles/sudoku/Board.module.css'

type Props = {
    handleStartGame: any
    gameStarted : string
    newGame: any
    hasGame: boolean
    handleVal: any
}

const StartSection = ({handleStartGame, gameStarted, newGame, hasGame, handleVal}: Props) => {

  const start = <Button type='primary' onClick={handleStartGame}>{gameStarted}</Button>
  const cont = <Button type='primary' onClick={newGame}>{gameStarted}</Button>
 
  return (
    
    <div className={styles.controlButtonConstraints} >
      {hasGame? cont: start}
        <Button type='primary' onClick={handleVal} >Check Game</Button>
    </div>
  )
}

export default StartSection