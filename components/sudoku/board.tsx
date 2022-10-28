import React, { useState } from 'react'
import Cell from './cell'
import styles from '../../styles/sudoku/Board.module.css'



// sends data to db, if game.current === true refresh current game with changes, else call new game


type Props = {
  game: number[] | null[] | string[]
  grabInfo: any
}

const Board = ({ game,  grabInfo }: Props) => {

  

  return (
    <div className={styles.boardConstraints}>
      {game.map((num: number | null | string, i:number) => (
          <Cell
            key={`cell-id-${i}`}  
            num={num}
            cellNo={i}
            grabInfo={grabInfo}
          />
        ))}
    </div>
  )
}

export default Board