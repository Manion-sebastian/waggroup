import React, { SetStateAction, SyntheticEvent, useEffect, useState } from 'react'
import Board from './board'
import ControlBar from './controlBar'
import StatusBar from './statusBar'
import styles from '../../styles/sudoku/Board.module.css'
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku'
import StartSection from './startSection'
import sudoku from 'sudoku'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { faCropSimple } from '@fortawesome/free-solid-svg-icons'
// import { setTimeout } from 'timers'
// import { setTimeout } from 'timers/promises'



type Props = {}

const SudokuGame = (props: Props) => {
  const tempBoardTwo = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',]
  const youWinBoard : any[] = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','Y','O','U','','','','','','','','','','','','','','','','W','I','N','','','','','','','','','','','','','','','','','','','','', '','','','','','','','','','',]
  const notYetBoard : any[] = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','N','O','T','','','','','','','','','','','','','','','','Y','E','T','','','','','','','','','','','','','','','','','','','','', '','','','','','','','','','',]

  
  const [currentPuzzle, setCurrentPuzzle] = useState<number[] | string[]>(tempBoardTwo)
  const [hasGame, setHasGame] = useState<boolean>(false)
  const [currentCell, setCurrentCell] = useState()
  const [solvedPuzzle, setSolvedPuzzle] = useState<number[] | string[]>([])
  const [currentTimer, setCurrentTimer] = useState<number>(0)
  const [paused, setPaused] = useState<boolean>(false)
  let [transferPuzzle, setTransferPuzzle] = useState<number[] | string[]>([])
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    if(hasGame) {
      const timeStart = setInterval(()=> {
        setCurrentTimer(currentTimer + 1)
      }, 1000)
      return () => clearInterval(timeStart)
    }
  }, [hasGame, currentTimer])

  useEffect(() => {
    const  token  = localStorage.getItem('jwt')
    if(token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])

 // handle selected cell will grab the index of the cell and until another cell is checked it will be acted on.

 // when a button is pressed it will change the string to have that index saved in currentCell be the value of the button. 

 // when a new input is pushed in -- run a check on the string. if the new check is not the correct tally the error in secret. when the board is completed updated tally to show errors. 

 function changePuzzle(nput : string[] | number[]) {
  let fixedPuzzle = nput
  for (let i = 0; i < 81; i++) {
    if (fixedPuzzle[i] === 0) {
      fixedPuzzle[i] = 9 
    }
  }
  return fixedPuzzle
 }


const handleStartGame = () => {
  const newPuzz = sudoku.makepuzzle()
  const solvedPuzz = sudoku.solvepuzzle(newPuzz)
  const fixedPuzz = changePuzzle(newPuzz)
  const fixedSolve = changePuzzle(solvedPuzz)
  setCurrentPuzzle(fixedPuzz)
  // setCurrentPuzzle(fixedSolve)
  setSolvedPuzzle(fixedSolve)
  setHasGame(true)
  
}

const handleNewGame = () => {
  const newPuzz = sudoku.makepuzzle()
  const solvedPuzz = sudoku.solvepuzzle(newPuzz)
  const fixedPuzz = changePuzzle(newPuzz)
  const fixedSolve = changePuzzle(solvedPuzz)
  setCurrentPuzzle(fixedPuzz)
  setSolvedPuzzle(fixedSolve)
  setCurrentTimer(0)

}

const handlePauseGame = () => {

  setTransferPuzzle(currentPuzzle)

  if(hasGame) {
    setCurrentPuzzle(tempBoardTwo)
    setHasGame(false)
    setPaused(true)
  } else if (!hasGame) {
    setCurrentPuzzle(transferPuzzle)
    setHasGame(true)
    setPaused(false)
  }
}

const handleValidate = () => {
  let correct = false
  let count = 0
  for ( let i = 0; i < 81; i++) {
    if (currentPuzzle[i] !== '') {
      if (currentPuzzle[i] == solvedPuzzle![i]) {
        count += 1
        correct = true
      } else {
        correct = false
      }
    } else {
      continue
    }
  }
  if (count === 81 && correct === true) {
    setHasGame(false)
    setCurrentPuzzle(youWinBoard)

   


    
  // } else if (count < 81) {
  //   setTransferPuzzle(currentPuzzle)
  //   setCurrentPuzzle(notYetBoard)
    
    
    


  }
}

function switchBoards(currentBoard : any, changeBoard : any) {
  setTransferPuzzle(currentBoard)
  setCurrentPuzzle(changeBoard)
  console.log('working switch')
}

async function postScore(time:number) {
  const reqBody = {
    game: 'Sudoku',
    score: time
  }
  if (currentUser) {
    await axios.patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${currentUser?.id}/score`, reqBody)
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
      <div className={styles.boardConstUse}>
        <StartSection gameStarted={handleStartButton()} newGame={handleNewGame} handleVal={handleValidate} hasGame={hasGame} handleStartGame={handleStartGame} /> 
        <ControlBar handleInput={handleInput}  />
      </div>
    </div>
  )
}

export default SudokuGame