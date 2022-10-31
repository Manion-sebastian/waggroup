// Next
import { MSGameButton } from '../../typingIan'
import styles from '../../styles/minesweeper/GameBoardButtons.module.css'

// React
import React from 'react'

// Font Awesome
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const play = <FontAwesomeIcon icon={faPlay} />

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
            Button.running + gameState
            :
            gameState
        }
      </div>
      
      <div 
        className={`PAUSE ${styles.pause}`}
        defaultValue='pause'
        onClick={handleClick} 
      >
        {
          gameState === Button.pause ?
            play
            :
            '| |'
        }
      </div>
    </div>
  )
}

export default GameBoardButton