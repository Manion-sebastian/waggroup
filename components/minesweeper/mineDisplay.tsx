// Next
import type { MSMines } from '../../typingIan'

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