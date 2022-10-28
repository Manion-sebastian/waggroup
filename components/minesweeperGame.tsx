// Next
import type { MSTile } from '../typingIan'
import { BOARD_HEIGHT, BOARD_WIDTH, BOARD_MINES } from './minesweeper/constants'
import { openEmptyTiles } from './minesweeper/makeBoard'
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

const enum Button {
  newGame = 'New Game',
  running = 'running',
  listening = '...',
  gameOver = 'Game Over',
  winner = 'Winner'
}

const enum TileValue {
  none = 0,
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5, 
  six = 6, 
  seven = 7,
  eight = 8,
  mine = -1
}

const enum TileState {
  hidden = 0,
  visible = 1,
  flagged = 2
}

const MinesweeperGame = (props: Props) => {
  // States
  const [time, setTime] = useState<number>(0)
  const [tiles, setTiles] = useState<MSTile[][]>(makeBoard())
  const [mines, setMines] = useState<number>(BOARD_MINES)
  const [gameState, setGameState] = useState<Button>(Button.newGame)
  const [gameRunning, setGameRunning] = useState<boolean>(false)

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
  }, [gameRunning])

  // Handlers
  const handleTileClick = (row: number, col: number) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault()

    if(!gameRunning && e.type === 'click') setGameRunning(true)

    let tempTiles = tiles.slice()
    const currTile = tiles[row][col]
    
    if(currTile.state === TileState.visible || currTile.state === TileState.flagged && e.type === 'click') {
      return
    } else if(currTile.state === TileState.hidden && e.type === 'contextmenu') {
      tempTiles[row][col].state = TileState.flagged
      setTiles(tempTiles)
      setMines(mines - 1)
    } else if(currTile.state === TileState.flagged && e.type === 'contextmenu') {
      tempTiles[row][col].state = TileState.hidden
      setTiles(tempTiles)
      setMines(mines + 1)
    } else if(currTile.value === TileValue.mine) {
      // gameOver()
    } else if(currTile.value === TileValue.none) {
      tempTiles = openEmptyTiles(tempTiles, row, col)
    } else {
      tempTiles[row][col].state = TileState.visible
      setTiles(tempTiles)
    }
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
          handleClick={handleGameButtonClick}
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