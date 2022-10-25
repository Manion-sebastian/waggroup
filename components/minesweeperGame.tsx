// React
import React from 'react'

// Components
import MineSweeperBoard from './minesweeper/mineSweeperBoard'

type Props = {}

const MinesweeperGame = (props: Props) => {
  return (
    <div className={''}>
      <MineSweeperBoard 
        row={0} 
        col={0} 
      />
    </div>
  )
}

export default MinesweeperGame