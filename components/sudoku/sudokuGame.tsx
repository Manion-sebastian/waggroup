import React, { SetStateAction, SyntheticEvent, useState } from 'react'
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
  const [currentCell, setCurrentCell] = useState()

 // handle selected cell will grab the index of the cell and until another cell is checked it will be acted on.

 // when a button is pressed it will change the string to have that index saved in currentCell be the value of the button. 

 // when a new input is pushed in -- run a check on the string. if the new check is not the correct tally the error in secret. when the board is completed updated tally to show errors. 

const handleStartGame = () => {
  setCurrentPuzzle( makepuzzle() )
  setSolvedPuzzle(solvepuzzle(currentPuzzle))
  setHasGame(true)
}

const handleSelectedCell = (e : any) => {
  setCurrentCell(e.target.innerText)
  console.log('handlesecledcell')
  console.log(currentCell)
  // console.log(e.target.innerText)
  console.log(e)
  
}

const handleStartButton = () => {
  let blurb = ''
  if(hasGame) {
    blurb = 'New Game'
  } else 
   blurb = "Start Game"

  return blurb
}


  return (
    <div className={styles.gameConstraints}>
      <StatusBar />
      <Board game={currentPuzzle} selectedCell={handleSelectedCell} />
      <ControlBar  />
      <StartSection gameStarted={handleStartButton()} handleStartGame={handleStartGame} /> 
    </div>
  )
}

export default SudokuGame