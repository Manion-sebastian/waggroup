// Next
import type { MSMines } from '../../typingIan'
import styles from '../../styles/minesweeper/Mines.module.css'

// React
import React from 'react'

type Props = {}

const MineDisplay = ({isFlagged, mines}: MSMines) => {
  return (
    <div>
      {mines - isFlagged}
    </div>
  )
}

export default MineDisplay