import React, { useState } from 'react'
import Cell from './cell'
import styles from '../../styles/sudoku/Board.module.css'
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku'

const newPuzzle = makepuzzle()
const solvedNPuzz = solvepuzzle(newPuzzle)
const harderPuzzle = ratepuzzle(newPuzzle, 4)

console.log(newPuzzle)
console.log(solvedNPuzz)
console.log(harderPuzzle)

// sends data to db, if game.current === true refresh current game with changes, else call new game


const boardArray = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,]


type Props = {}

const Board = (props: Props) => {
  return (
    <div className={styles.boardConstraints}>
      {boardArray.map((num: number, i:number) => (
            <Cell
              key={`cell-id-${i}`}
              num={num}
            />
        ))}
    </div>
  )
}

export default Board