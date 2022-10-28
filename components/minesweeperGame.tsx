// Next
import { BOARD_HEIGHT, BOARD_WIDTH, BOARD_MINES } from './minesweeper/constants'
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
import { makeBoard } from './minesweeper/makeBoard'

type Props = {}

export enum Button {
  newGame = 'New Game',
  running = 'running',
  listening = '...',
  gameOver = 'Game Over',
  winner = 'Winner'
}

const MinesweeperGame = (props: Props) => {
  // States
  const [time, setTime] = useState(0)
  const [tiles, setTiles] = useState(makeBoard())
  const [mines, setMines] = useState(BOARD_MINES)
  const [gameState, setGameState] = useState(Button.newGame)
  const [gameRunning, setGameRunning] = useState(false)

  // Hooks
  useEffect(() => {
    const handleMouseDown = (): void => {
      setGameState(Button.listening)
    }

    const handleMouseUp = (): void => {
      setGameState(Button.running)
    }

    window.addEventListener('mousedown', handleMouseDown) 
    window.addEventListener('mouseup', handleMouseUp) 
    
    return () => {
      window.removeEventListener('mousedown', handleMouseDown) 
      window.removeEventListener('mouseup', handleMouseUp) 
    }
  }, [])

  useEffect(() => {
    if(gameRunning) {
      const timerStart = setInterval(() => {
        setTime(time + 1)
      }, 1000)

      return () => clearInterval(timerStart)
    }
  }, [gameRunning, time])

  // Handlers
  const handleTileClick = (e: React.MouseEvent, row: number, col: number) => (): void => {
    console.log(e, row, col)
    // if(!gameRunning && e.type === 'onclick') setGameRunning(true)
  }

  const handleGameButtonClick = (): void => {
    if(gameRunning) {
      setGameRunning(false)
      setTime(0)
      setTiles(makeBoard())
    }
  }

  // Output
  return (
    <div className={styles.gameboardContainer}>
      <div>
        <MSModal />
      </div>

      <div className={styles.topDisplay}>
        <MSTimer 
          time={time}
        />

        <MSGameButtons
          gameState={gameState}
        />

        <MSMineDisplay 
          mines={mines}
        />

      </div>

      <MSBoard 
        tiles={tiles}
        width={BOARD_WIDTH} 
        height={BOARD_HEIGHT}
        mines={mines}
        handleClick={handleTileClick}
      />

    </div>
  )
}

export default MinesweeperGame