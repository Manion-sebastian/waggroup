// Next
import styles from '../styles/minesweeper/minesweeper.module.css'

// React
import React from 'react'
import { useState, useEffect } from 'react'

// Components
import MSBoard from './minesweeper/gameBoard'
import MSGameButtons from './minesweeper/gameBoardButton'
import MSMineDisplay from './minesweeper/mineDisplay'
import MSModal from './minesweeper/modal'
import MSTimer from './minesweeper/timerDisplay'

type Props = {}

const MinesweeperGame = (props: Props) => {
  const [gameRunning, setGameRunning] = useState(true)
  const [isHidden, setIsHidden] = useState(0)
  const [isFlagged, setIsFlagged] = useState(0)
  const [mines, setMines] = useState(10)

  return (
    <div className={styles.gameboardContainer}>
      <div>
        <MSModal />
      </div>

      <div className={styles.topDisplay}>
        <MSTimer 
          gameRunning={gameRunning}
        />

        <MSGameButtons
        />

        <MSMineDisplay 
          isFlagged={isFlagged}
          mines={mines}
        />

      </div>

      <MSBoard 
        width={9} 
        height={9}
        mines={10}
      />

    </div>
  )
}

export default MinesweeperGame