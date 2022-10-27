import React, { useState } from 'react'
import Board from './board'
import ControlBar from './controlBar'
import StatusBar from './statusBar'
import styles from '../../styles/sudoku/Board.module.css'
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku'


type Props = {}

const SudokuGame = (props: Props) => {
  const tempBoard = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]

  const [currentPuzzle, setCurrentPuzzle] = useState<number[] | null[]>(tempBoard)
  const [solvedPuzzle, setSolvedPuzzle] = useState<number[]>([])

 

const handleStartGame = () => {
  setCurrentPuzzle( makepuzzle() )
  setSolvedPuzzle(solvepuzzle(currentPuzzle))
} 


  return (
    <div className={styles.gameConstraints}>
      <StatusBar />
      <Board game={currentPuzzle} />
      <ControlBar />
    </div>
  )
}

export default SudokuGame