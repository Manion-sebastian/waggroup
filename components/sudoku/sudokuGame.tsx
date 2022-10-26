import React from 'react'
import Board from './board'
import ControlBar from './controlBar'
import StatusBar from './statusBar'
import styles from '../../styles/sudoku/Board.module.css'

type Props = {}

const SudokuGame = (props: Props) => {
  return (
    <div className={styles.gameConstraints}>
      <StatusBar />
      <Board />
      <ControlBar />
    </div>
  )
}

export default SudokuGame