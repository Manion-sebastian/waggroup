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

const CSS_ONE   = { '--one'  : 'blue'       } as React.CSSProperties
const CSS_TWO   = { '--two'  : 'green'      } as React.CSSProperties
const CSS_THREE = { '--three': 'red'        } as React.CSSProperties
const CSS_FOUR  = { '--four' : 'purple'     } as React.CSSProperties
const CSS_FIVE  = { '--five' : 'maroon'     } as React.CSSProperties
const CSS_SIX   = { '--six'  : 'turquoise'  } as React.CSSProperties
const CSS_SEVEN = { '--seven': 'black'      } as React.CSSProperties
const CSS_EIGHT = { '--eight': 'gray'       } as React.CSSProperties

const Tile: React.FC<MSTileButton> = ({ row, col, value, state, handleClick }) => {
  // States

  // Hooks
  useEffect(() => {

    
  }, [])

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

  const color = 
    value === 1 ? CSS_ONE   :
    value === 2 ? CSS_TWO   :
    value === 3 ? CSS_THREE :
    value === 4 ? CSS_FOUR  :
    value === 5 ? CSS_FIVE  :
    value === 6 ? CSS_SIX   :
    value === 7 ? CSS_SEVEN :
    value === 8 ? CSS_EIGHT : null

  return (
    <div className={`
      ${state === TileState.hidden ? styles.tile : null}
      ${state === TileState.visible ? styles.reveal : null}
      ${color}
    `}
      onClick={(e: React.MouseEvent) => handleClick(e, row, col)}
      onContextMenu={(e: React.MouseEvent) => handleClick(e, row, col)}
    >
      {renderContent()}
    </div>
  )
}

export default Tile