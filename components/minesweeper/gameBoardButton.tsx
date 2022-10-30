// Next
import { MSGameButton } from '../../typingIan'
import styles from '../../styles/minesweeper/GameBoardButtons.module.css'

// React
import React from 'react'

const enum Button {
  newGame = 'New Game',
  running = 'Running',
  listening = '...',
  pause = 'Paused',
  gameOver = 'Game Over',
  winner = 'Winner'
}

type Props = {}

const GameBoardButton = ({gameState, handleClick}: MSGameButton) => {
  return (
    <div className={styles.buttonsWrapper}>
      <div 
      className={`NEW GAME ${styles.newGame}`}
      defaultValue='gameButton'
      onClick={handleClick} 
      >
        {
          gameState === Button.listening ?
          Button.running + gameState :
          gameState
        }
      </div>
      
      <div 
      className={`PAUSE ${styles.pause}`}
      defaultValue='pause'
      onClick={handleClick} 
      >
        | |
      </div>
    </div>
  )
}

export default GameBoardButton