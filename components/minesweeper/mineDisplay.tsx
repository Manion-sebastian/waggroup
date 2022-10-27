// Next
import type { MSMines } from '../../typingIan'
import styles from '../../styles/minesweeper/Mines.module.css'

// React
import React from 'react'

type Props = {}

const MineDisplay = ({isFlagged, mines}: MSMines) => {
  let currMines = mines - isFlagged
  if(currMines < 0) currMines = 0
  return (
    <div className={styles.minesContainer}>
      <p className={styles.title}>MINES</p>
      <p className={styles.mines}>{currMines}</p>
    </div>
  )
}

export default MineDisplay