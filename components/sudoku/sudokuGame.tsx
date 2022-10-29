import React, { SetStateAction, SyntheticEvent, useEffect, useState } from 'react'
import Board from './board'
import ControlBar from './controlBar'
import StatusBar from './statusBar'
import styles from '../../styles/sudoku/Board.module.css'
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku'
import StartSection from './startSection'



type Props = {}

const SudokuGame = (props: Props) => {
  // const tempBoard = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]

  const tempBoardTwo = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',]
  
  const [currentPuzzle, setCurrentPuzzle] = useState<number[] | string[]>(tempBoardTwo)
  const [hasGame, setHasGame] = useState<boolean>(false)
  const [currentCell, setCurrentCell] = useState()
  const [solvedPuzzle, setSolvedPuzzle] = useState<number[]>([])
  const [currentTimer, setCurrentTimer] = useState<number>(0)
  const [paused, setPaused] = useState<boolean>(false)
  let [tranferPuzzle, setTransferPuzzle] = useState<number[] | string[]>([])

  useEffect(() => {
    if(hasGame) {
      const timeStart = setInterval(()=> {
        setCurrentTimer(currentTimer + 1)
      }, 1000)
      return () => clearInterval(timeStart)
    }
  }, [hasGame, currentTimer])

 // handle selected cell will grab the index of the cell and until another cell is checked it will be acted on.

 // when a button is pressed it will change the string to have that index saved in currentCell be the value of the button. 

 // when a new input is pushed in -- run a check on the string. if the new check is not the correct tally the error in secret. when the board is completed updated tally to show errors. 

const handleStartGame = () => {
  setCurrentPuzzle( makepuzzle() )
  setSolvedPuzzle(solvepuzzle(currentPuzzle))
  setHasGame(true)
  
}

const handleNewGame = () => {
  setCurrentPuzzle( makepuzzle() )
  setSolvedPuzzle(solvepuzzle(currentPuzzle))
  setCurrentTimer(0)

}

const handlePauseGame = () => {

  setTransferPuzzle(currentPuzzle)

  if(hasGame) {
    setCurrentPuzzle(tempBoardTwo)
    setHasGame(false)
    setPaused(true)
  } else if (!hasGame) {
    setCurrentPuzzle(tranferPuzzle)
    setHasGame(true)
    setPaused(false)
  }
}

const handleValidate = () => {
  for(let i = 0; i < 81; i++) {
    if (currentPuzzle[i] === solvedPuzzle[i]) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
}


const handleGrabObj = (obj : any) => {
  console.log(obj)
  setCurrentCell(obj.index)
}


const handleInput = (e:any) => {
  let inp = e.target.innerText
  let temp = currentPuzzle
  if (currentCell === 0) {
    temp[0] = inp
  }
  else if (currentCell) {
    temp[currentCell] = inp
  }
  setCurrentPuzzle(temp)
}

const handleInputKeypress = (e : KeyboardEvent) => {
  console.log(e)
}

const handleStartButton = () => {
  let blurb = ''
  if(hasGame) {
    blurb = 'New Game'
    // handleTimer()
    
  } else 
   blurb = "Start Game"
  //  handleTimer()
  

  return blurb
}



  return (
    <div className={styles.gameConstraints}>
      <StatusBar time={currentTimer} handlePause={handlePauseGame} paused={paused} />
      <Board game={currentPuzzle}  grabInfo={handleGrabObj} />
      <ControlBar handleInput={handleInput}  />
      <StartSection gameStarted={handleStartButton()} newGame={handleNewGame} hasGame={hasGame} handleStartGame={handleStartGame} /> 
    </div>
  )
}

export default SudokuGame