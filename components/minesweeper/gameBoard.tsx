// Next
import type { MSBoard } from "../../typingIan";
import styles from '../../styles/minesweeper/GameBoard.module.css'

// React
import React from "react";

// Components
import MSTile from './tile'

type Props = {}

if(typeof window === 'object') {
  window.oncontextmenu = (e) => e.preventDefault()
}

export default function MineSweeperBoard({ width, height, mines }: MSBoard) {
  const makeBoard = () => {
    let gameboard: any = []
    for(let row = 0; row < height; row++) {
      gameboard.push([])
      for(let col = 0; col < width; col++) {
        gameboard[row].push(
          <MSTile
            key={`tile_${row}_${col}`}
            row={row}
            col={col}
            isHidden={true}
            isFlagged={false}
            isMine={false}
            adjMines={0}
          />
        )
      }
    }
    
    let hiddenCount = 0
    let flaggedCount = 0
    return gameboard.map((row: Array<any>) => row.map((tile: any) => {
      if(tile.props.isHidden) hiddenCount++
      if(tile.props.isflagged) flaggedCount++
      return tile
    }))
  }
  
  const CSS_SIZE = { '--width': width, '--height': height } as React.CSSProperties

  return (
    <div className={`GAMEBOARD ${styles.gameBoard}`} style={CSS_SIZE}>
      {makeBoard()}
    </div>
  )
}