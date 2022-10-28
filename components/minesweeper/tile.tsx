// Typings
import type { MSTileButton } from '../../typingIan'
import styles from '../../styles/minesweeper/Tile.module.css'

// React
import React from 'react'
import { useState, useEffect } from 'react'

type Props = {}

const enum TileValue {
  none = 0,
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5, 
  six = 6, 
  seven = 7,
  eight = 8,
  mine = -1
}

const enum TileState {
  hidden = 0,
  visible = 1,
  flagged = 2
}

const Tile: React.FC<MSTileButton> = ({ row, col, value, state }) => {
  // States

  // Hooks

  // Output
  const renderContent = (): React.ReactNode => {
    if(state === TileState.visible) {
      if(value === TileValue.mine) {
        console.log('💣')
        return (
          <span>
            💣
          </span>
        )
      } else if(value === TileValue.none) {
        return null
      }

      return value
    } else if (state === TileState.flagged) {
      console.log('🚩')
      return (
        <span>
          🚩
        </span>
      )
    }
  }

  console.log('value', value, 'state', state)

  return (
    <div className={`
      ${state === TileState.hidden ? styles.tile : null}
      ${state === TileState.visible ? styles.reveal : null}
    `}
      // onClick={setTile}
      // onContextMenu={setTile}
    >
      {renderContent()}
    </div>
  )
}

export default Tile