// Next
import { MSGameButton } from '../../typingIan'
import styles from '../../styles/minesweeper/GameBoardButtons.module.css'

// React
import React from 'react'

// export enum Button {
//   newGame = 'New Game',
//   running = 'running',
//   listening = '...',
//   gameOver = 'Game Over',
//   winner = 'Winner'
// }

type Props = {}

const GameBoardButton = ({gameState}: MSGameButton) => {
  return (
    <div className={styles.buttonsWrapper}>
      <div onClick={(e: React.MouseEvent) => {}} className={styles.newGame}>{gameState}</div>
    </div>
  )
}

export default GameBoardButton