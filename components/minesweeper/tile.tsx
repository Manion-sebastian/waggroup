// Typings
import type { MSTile } from '../../typingIan'
import styles from '../../styles/minesweeper/Tile.module.css'

// React
import React from 'react'
import { useState, useEffect } from 'react'

type Props = {}

const Tile = (props: MSTile) => {
  // States
  const [isHidden, setIsHidden] = useState(props.isHidden)

  // Hooks
  const revealTile = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHidden(false)
  }

  // Output
  return (
    <div 
      className={`
        ${styles.tile}
        ${isHidden ? null : styles.reveal}
      `}
      onClick={revealTile}
    >
      {/* <p>Fill</p> */}
    </div>
  )
}

export default Tile