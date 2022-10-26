// Typings
import { MSTile } from '../../typingIan'
import styles from '../../styles/minesweeper/Tile.module.css'

// React
import React from 'react'

type Props = {}

const Tile = ({row, col, isHidden, isFlagged, isMine, adjMines}: MSTile) => {
  return (
    <div className={styles.tile}></div>
  )
}

export default Tile