import React, { useState } from 'react'
import Board from './board'
import ControlBar from './controlBar'
import StatusBar from './statusBar'
import styles from '../../styles/sudoku/Board.module.css'
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku'
import StartSection from './startSection'


type Props = {}

const SudokuGame = (props: Props) => {
  const tempBoard = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]

  const [currentPuzzle, setCurrentPuzzle] = useState<number[] | null[]>(tempBoard)
  const [solvedPuzzle, setSolvedPuzzle] = useState<number[]>([])
  const [hasGame, setHasGame] = useState<boolean>(false)

 

const handleStartGame = () => {
  setCurrentPuzzle( makepuzzle() )
  setSolvedPuzzle(solvepuzzle(currentPuzzle))
  setHasGame(true)
} 


  return (
    <div className={styles.gameConstraints}>
      <StatusBar />
      <Board game={currentPuzzle} />
      {hasGame? <ControlBar  /> : <StartSection handleStartGame={handleStartGame} />}
      
    </div>
  )
}

export default SudokuGame