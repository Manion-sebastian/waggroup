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
  const [isFlagged, setIsFlagged] = useState(props.isFlagged)

  // Hooks
  const setTile = (e: React.MouseEvent<HTMLElement>) => {
    // Reveal Tile
    if(e.type === 'click' && !isFlagged) setIsHidden(false)
    if(e.type === 'contextmenu' && isHidden) setIsFlagged(!isFlagged)
    console.log(`Pos: [${props.row},${props.col}]\nHidden: ${isHidden}\nFlagged: ${isFlagged}`)
  }

  // Output
  return (
    <div 
      className={`
        ${isHidden ? styles.tile : styles.reveal}
        ${isFlagged ? styles.flag : null}
      `}
      onClick={setTile}
      onContextMenu={setTile}
    >
      {/* <p>Fill</p> */}
    </div>
  )
}

export default Tile