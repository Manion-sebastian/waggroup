import React from 'react'
import NavBar from '../components/navBar'
import SudokuGame from '../components/sudoku/sudokuGame'

type Props = {}

const SudokuTest = (props: Props) => {
  return (
    <div>
        <SudokuGame />
    </div>
  )
}

export default SudokuTest