// Next
import type { MSBoard } from "../../typingIan";
import styles from '../../styles/minesweeper/GameBoard.module.css'

// React
import React from "react";
import { useState, useEffect } from 'react'

// Components
import MSTile from './tile'

type Props = {}

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

if(typeof window === 'object') {
  window.oncontextmenu = (e) => e.preventDefault()
}

export default function MineSweeperBoard({ tiles, width, height, mines, handleClick }: MSBoard) {
  const [gameRunning, setGameRunning] = useState(true)

  const renderGameBoard = (): React.ReactNode => {
    return tiles.map((row, iRow) => 
      row.map((tile, iCol) => {
      return (
        <MSTile 
          key={`tile_r${iRow}_c${iCol}`} 
          row={iRow}
          col={iCol}
          value={tile.value}
          state={tile.state}
          handleClick={handleClick}
        />
      )
    }))
  }

  // console.log('tiles:', tiles)
  
  const CSS_SIZE = { '--width': width, '--height': height } as React.CSSProperties

  return (
    <div className={`GAMEBOARD ${styles.gameBoard}`} style={CSS_SIZE}>
      {renderGameBoard()}
    </div>
  )
}