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
  killer = 9,
  mine = -1
}

const enum TileState {
  hidden = 0,
  visible = 1,
  flagged = 2
}

const CSS_ZERO  = { '--tile' : 'transparent' } as React.CSSProperties
const CSS_ONE   = { '--tile' : 'blue'        } as React.CSSProperties
const CSS_TWO   = { '--tile' : 'green'       } as React.CSSProperties
const CSS_THREE = { '--tile' : 'red'         } as React.CSSProperties
const CSS_FOUR  = { '--tile' : 'purple'      } as React.CSSProperties
const CSS_FIVE  = { '--tile' : 'maroon'      } as React.CSSProperties
const CSS_SIX   = { '--tile' : 'turquoise'   } as React.CSSProperties
const CSS_SEVEN = { '--tile' : 'black'       } as React.CSSProperties
const CSS_EIGHT = { '--tile' : 'gray'        } as React.CSSProperties

const Tile: React.FC<MSTileButton> = ({ row, col, value, state, handleClick }) => {
  // States
  

  // Hooks

  // Output
  const renderContent = (): React.ReactNode => {
    if(state === TileState.visible) {
      if(value === TileValue.mine || value === TileValue.killer) {
        return (
          <span className={styles.bomb}>
            💣
          </span>
        )
      } else if(value === TileValue.none) {
        return null
      }

      return value
    } else if (state === TileState.flagged) {
      return (
        <span>
          🚩
        </span>
      )
    }
  }

  const color = 
    value === 0 ? CSS_ZERO  :
    value === 1 ? CSS_ONE   :
    value === 2 ? CSS_TWO   :
    value === 3 ? CSS_THREE :
    value === 4 ? CSS_FOUR  :
    value === 5 ? CSS_FIVE  :
    value === 6 ? CSS_SIX   :
    value === 7 ? CSS_SEVEN :
    value === 8 ? CSS_EIGHT : undefined

  return (
    <div className={`
      ${state === TileState.hidden  ? styles.tile : null}
      ${state === TileState.visible ? styles.reveal : null}
      ${state === TileState.flagged ? styles.flag : null}
      ${value === TileValue.killer  ? styles.flag : null}
    `}
      style={color}
      onClick={handleClick(row, col)}
      onContextMenu={handleClick(row, col)}
      // value={value}
    >
      {/* {console.log(value, color)} */}
      {renderContent()}
    </div>
  )
}

export default Tile