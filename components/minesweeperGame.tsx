// React
import React from 'react'

// Components
import MSBoard from './minesweeper/gameBoard'
import MSGameButtons from './minesweeper/gameBoardButton'
import MSMineDisplay from './minesweeper/mineDisplay'
import MSModal from './minesweeper/modal'
import MSTimer from './minesweeper/timerDisplay'

type Props = {}

const MinesweeperGame = (props: Props) => {
  return (
    <div className=''>
      <div>
        <MSModal />
      </div>

      <div className=''>
        <MSTimer />

        <MSGameButtons />

        <MSMineDisplay />
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