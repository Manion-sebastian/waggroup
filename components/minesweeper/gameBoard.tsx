// Next
import type { MSBoard } from "../../typingIan";
import styles from '../../styles/minesweeper/GameBoard.module.css'

// React
import React from "react";
import { useState, useEffect } from 'react'

// Components
import MSTile from './tile'

type Props = {}

if(typeof window === 'object') {
  window.oncontextmenu = (e) => e.preventDefault()
}


export default function MineSweeperBoard({ width, height, mines }: MSBoard) {
  const [gameRunning, setGameRunning] = useState(true)
  const [gameBoard, setGameBoard] = useState([])

  useEffect(() => {
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

      setGameBoard(gameboard.map((row: Array<any>) => row.map((tile: any) => tile)))
    }

    makeBoard()

  }, [])

  useEffect(() => {

  })

  const printBoard = (): Array<Array<any>> => {
    let hiddenCount = 0
    let flaggedCount = 0
    return gameBoard.map((row: Array<any>) => row.map((tile: any) => {
      if(tile.props.isHidden) hiddenCount++
      if(tile.props.isflagged) console.log('flagged')
      return tile
    }))
  }
  
  const CSS_SIZE = { '--width': width, '--height': height } as React.CSSProperties

  console.log(gameBoard)

  return (
    <div className={`GAMEBOARD ${styles.gameBoard}`} style={CSS_SIZE}>
      {gameBoard}
    </div>
  )
}