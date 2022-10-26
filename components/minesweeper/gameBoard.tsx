// Typings
import type { MSBoard } from "../../typingIan";

// React
import React from "react";

// Components
import MSTile from './tile'

type Props = {}

export default function MineSweeperBoard({ width, height, mines }: MSBoard) {
  const makeBoard = () => {
    for(let row = 0; row < height; row++) {
      for(let col = 0; col < width; col++) {
        return (
          <MSTile
            row={row}
            col={col}
            isHidden={true}
            isFlagged={false}
            isMine={false}
            adjMines={0}
          />
        )
      }
    }
  }

  return (
    <div>
      {makeBoard()}
    </div>
  )
}