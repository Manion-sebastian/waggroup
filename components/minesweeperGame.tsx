// React
import React from 'react'

// Components
import MSBoard from './minesweeper/gameBoard'
import Timer from './minesweeper/timerDisplay'
import Modal from './minesweeper/modal'
import GameButtons from './minesweeper/gameBoardButton'

type Props = {}

const MinesweeperGame = (props: Props) => {
  return (
    <div className={''}>
      <div>
        <Timer />


      </div>

      <MSBoard 
        width={0} 
        height={0}
        mines={0}
      />

    </div>
  )
}

export default MinesweeperGame