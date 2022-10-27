import React, { useState } from 'react'
import Cell from './cell'
import styles from '../../styles/sudoku/Board.module.css'



// sends data to db, if game.current === true refresh current game with changes, else call new game

// testing array
// const boardArray = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,]




type Props = {
  game: number[] | null[]
}

const Board = ({ game, }: Props) => {

  return (
    <div className={styles.boardConstraints}>
      {game.map((num: number | null, i:number) => (
            <Cell
              key={`cell-id-${i}`}
              num={num}
            />
        ))}
    </div>
  )
}

export default Board