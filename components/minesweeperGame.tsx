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
  killer = 9,
  mine = -1
}

const enum TileState {
  hidden = 0,
  visible = 1,
  flagged = 2
}

const enum GameCondition {
  none = -1,
  lose = 0,
  win = 1
}

const MinesweeperGame = (props: Props) => {
  // States
  const [time, setTime] = useState<number>(0)
  const [tiles, setTiles] = useState<MSTile[][]>(makeBoard())
  const [mines, setMines] = useState<number>(BOARD_MINES)
  const [gameEnd, setGameEnd] = useState<GameCondition>(GameCondition.none)
  const [gameState, setGameState] = useState<Button>(Button.newGame)
  const [gameRunning, setGameRunning] = useState<boolean>(false)

  // Hooks
  useEffect(() => {
    const handleMouseDown = (): void => {
      if(gameRunning) setGameState(Button.listening)
    }

    const handleMouseUp = (): void => {
      if(gameRunning) setGameState(Button.running)
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

  useEffect(() => {
    if(gameEnd === GameCondition.lose) {
      setGameState(Button.gameOver)
    }

    if(gameEnd === GameCondition.win) {
      setMines(0)
      setGameState(Button.winner)
    }

    if(gameEnd !== GameCondition.none) {
      setGameRunning(false)
    }

  }, [gameEnd])

  // Handlers
  const handleTileClick = (row: number, col: number) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault()
    
    let tempTiles = tiles.slice()

    if(gameEnd !== GameCondition.none) return

    if(!gameRunning && e.type === 'click') {
      let isEmpty = tempTiles[row][col].value === TileValue.none
      while(!isEmpty) {
        tempTiles = makeBoard()
        if (tempTiles[row][col].value === TileValue.none) {
          isEmpty = true
          tempTiles = openEmptyTiles(tempTiles, row, col)
          break
        }
      }
      setGameRunning(true)
    }
    
    const currTile = tiles[row][col]
    
    // Prevents click on invalid squares
    if(currTile.state === TileState.visible && e.type === 'contextmenu'|| 
      currTile.state === TileState.flagged && e.type === 'click') {
      return
    } // Flags a hidden tile
    else if(currTile.state === TileState.hidden && e.type === 'contextmenu') {
      tempTiles[row][col].state = TileState.flagged
      setTiles(tempTiles)
      setMines(mines - 1)
    } // Removes flag from tile
    else if(currTile.state === TileState.flagged && e.type === 'contextmenu') {
      tempTiles[row][col].state = TileState.hidden
      setTiles(tempTiles)
      setMines(mines + 1)
    } // Clicks a mine
    else if(currTile.value === TileValue.mine) {
      setGameEnd(GameCondition.lose)
      tempTiles[row][col].value = TileValue.killer
      tempTiles = revealMines()
      setTiles(tempTiles)
      return
    } // Clicks an empty tile
    else if(currTile.value === TileValue.none) {
      tempTiles = openEmptyTiles(tempTiles, row, col)
      // Clicks an numbered tile
    } else {
      tempTiles[row][col].state = TileState.visible
    }

    // // Check Win Conidition
    let hasHiddenTile = false
    for(let iRow = 0; iRow < BOARD_HEIGHT; iRow++) {
      for(let iCol = 0; iCol < BOARD_WIDTH; iCol++) {
        const currTile = tempTiles[iRow][iCol]

        if(currTile.value !== TileValue.mine && currTile.state === TileState.hidden) {
          hasHiddenTile = true
          break
        }
      }
    }

    // Flags all mines
    if(!hasHiddenTile) {
      tempTiles = tempTiles.map(row => row. map(cell => {
        if(cell.value === TileValue.mine) {
          return {
            ...cell,
            state: TileState.flagged
          }
        }
        return cell
      }))
      setGameEnd(GameCondition.win)
    }

    setTiles(tempTiles)
  }


  const handleGameButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    console.log(e)
    setTime(0)
    setMines(BOARD_MINES)
    setTiles(makeBoard())
    setGameEnd(GameCondition.none)
    setGameState(Button.newGame)
    setGameRunning(false)
  }

  const revealMines = (): MSTile[][] => {
    const tempTiles = tiles.slice()
    return tempTiles.map(row => row.map(tile => {
      if(tile.value === TileValue.mine) {
        return {
          ...tile,
          state: TileState.visible
        }
      }

      return tile
    }))
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