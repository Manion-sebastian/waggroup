// React
import React from 'react'

// Components
import MineSweeperBoard from './minesweeper/mineSweeperBoard'

type Props = {}

const MinesweeperGame = (props: Props) => {
  return (
    <div className={''}>
      <MineSweeperBoard 
        width={0} 
        height={0}
        mines={0}
      />
    </div>
  )
}

export default MinesweeperGame