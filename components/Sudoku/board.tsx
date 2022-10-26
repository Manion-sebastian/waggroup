import React from 'react'
import Cell from './cell'
import styles from '../../styles/sudoku/Board.module.css'

const boardArray = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]

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