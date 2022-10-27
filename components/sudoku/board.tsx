import React, { useState } from 'react'
import Cell from './cell'
import styles from '../../styles/sudoku/Board.module.css'



// sends data to db, if game.current === true refresh current game with changes, else call new game

// testing array
// const boardArray = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,]




type Props = {
  game: number[] | null[]
  selectedCell : any // find better type
}

const Board = ({ game, selectedCell }: Props) => {

  

  return (
    <div className={styles.boardConstraints}>
      {game.map((num: number | null, i:number) => (
          <Cell
            key={`cell-id-${i}`}  
            selectedCell={selectedCell}
            num={num}
            cellNo={i}
          />
        ))}
    </div>
  )
}

export default Board