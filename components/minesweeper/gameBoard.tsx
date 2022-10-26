// Next
import type { MSBoard } from "../../typingIan";
import styles from '../../styles/minesweeper/GameBoard.module.css'

// React
import React from "react";

// Components
import MSTile from './tile'
import { Row } from "antd";

type Props = {}

export default function MineSweeperBoard({ width, height, mines }: MSBoard) {
  const makeBoard = () => {
    let gameboard: any = []
    for(let row = 0; row < height; row++) {
      gameboard.push([])
      for(let col = 0; col < width; col++) {
        gameboard[row].push (
          <MSTile
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
    return gameboard.map((row: Array<typeof MSTile>) => row.map((tile: typeof MSTile) => tile))
  }
  
  const CSS_SIZE = { '--width': width, '--height': height } as React.CSSProperties

  return (
    <div style={CSS_SIZE} className={styles.gameBoard}>
      {makeBoard()}
    </div>
  )
}