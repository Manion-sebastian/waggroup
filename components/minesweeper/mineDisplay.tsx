// Next
import type { MSMines } from '../../typingIan'
import styles from '../../styles/minesweeper/Mines.module.css'

// React
import React from 'react'

type Props = {}

const MineDisplay = ({mines}: MSMines) => {
  return (
    <div className={styles.minesContainer}>
      <p className={styles.title}>MINES</p>
      <p className={styles.mines}>{mines}</p>
    </div>
  )
}

export default MineDisplay