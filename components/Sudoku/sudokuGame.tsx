import React from 'react'
import Board from './board'
import ControlBar from './controlBar'
import StatusBar from './statusBar'

type Props = {}

const SudokuGame = (props: Props) => {
  return (
    <div>
      <Board />
      <ControlBar />
      <StatusBar />
    </div>
  )
}

export default SudokuGame