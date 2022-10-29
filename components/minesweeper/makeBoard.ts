// Next
import type { MSTile } from "../../typingIan"
import { BOARD_WIDTH, BOARD_HEIGHT, BOARD_MINES } from "./constants"

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

const grabAllAdjacentTiles = (
  tiles: MSTile[][],
  rowParam: number,
  colParam: number
): {
  topLeftTile: MSTile | null
  topTile: MSTile | null
  topRightTile: MSTile | null
  leftTile: MSTile | null
  rightTile: MSTile | null
  bottomLeftTile: MSTile | null
  bottomTile: MSTile | null
  bottomRightTile: MSTile | null
} => {
  const topLeftTile = rowParam > 0 && colParam > 0 ? tiles[rowParam - 1][colParam - 1] : null
  const topTile = rowParam > 0 ? tiles[rowParam - 1][colParam] : null
  const topRightTile =
    rowParam > 0 && colParam < BOARD_WIDTH - 1
      ? tiles[rowParam - 1][colParam + 1]
      : null
  const leftTile = colParam > 0 ? tiles[rowParam][colParam - 1] : null
  const rightTile = colParam < BOARD_WIDTH - 1 ? tiles[rowParam][colParam + 1] : null
  const bottomLeftTile =
    rowParam < BOARD_HEIGHT - 1 && colParam > 0
      ? tiles[rowParam + 1][colParam - 1]
      : null
  const bottomTile = rowParam < BOARD_HEIGHT - 1 ? tiles[rowParam + 1][colParam] : null
  const bottomRightTile =
    rowParam < BOARD_HEIGHT - 1 && colParam < BOARD_WIDTH - 1
      ? tiles[rowParam + 1][colParam + 1]
      : null

  return {
    topLeftTile,
    topTile,
    topRightTile,
    leftTile,
    rightTile,
    bottomLeftTile,
    bottomTile,
    bottomRightTile
  }
}

export const makeBoard = (): MSTile[][] => {
  let tiles: MSTile[][] = []

  for(let row = 0; row < BOARD_HEIGHT; row++) {
    tiles.push([])
    for(let col = 0; col < BOARD_WIDTH; col++) {
      tiles[row].push({
        value: TileValue.none,
        state: TileState.hidden
      })
    }
  }

  // Generate Mines
  let currMines = BOARD_MINES
  while(currMines > 0) {
    const rndRow = Math.floor(Math.random() * BOARD_HEIGHT)
    const rndCol = Math.floor(Math.random() * BOARD_WIDTH)
    const currTile = tiles[rndRow][rndCol]

    if(currTile.value !== TileValue.mine) {
      tiles = tiles.map((row, iRow) => 
      row.map((tile, iCol) => {
        if(rndRow === iRow && rndCol === iCol) {
          return {
            ...tile,
            value: TileValue.mine
          }
        }

        return tile
      }))
      
      currMines--
    
    }
  }

  for (let rowIndex = 0; rowIndex < BOARD_HEIGHT; rowIndex++) {
    for (let colIndex = 0; colIndex < BOARD_WIDTH; colIndex++) {
      const currTile = tiles[rowIndex][colIndex]
      if (currTile.value === TileValue.mine) {
        continue
      }

      let mineCounter = 0
      const {
        topLeftTile,
        topTile,
        topRightTile,
        leftTile,
        rightTile,
        bottomLeftTile,
        bottomTile,
        bottomRightTile
      } = grabAllAdjacentTiles(tiles, rowIndex, colIndex)

      if (topLeftTile?.value === TileValue.mine) {
        mineCounter++
      }
      if (topTile?.value === TileValue.mine) {
        mineCounter++
      }
      if (topRightTile?.value === TileValue.mine) {
        mineCounter++
      }
      if (leftTile?.value === TileValue.mine) {
        mineCounter++
      }
      if (rightTile?.value === TileValue.mine) {
        mineCounter++
      }
      if (bottomLeftTile?.value === TileValue.mine) {
        mineCounter++
      }
      if (bottomTile?.value === TileValue.mine) {
        mineCounter++
      }
      if (bottomRightTile?.value === TileValue.mine) {
        mineCounter++
      }

      if (mineCounter > 0) {
        tiles[rowIndex][colIndex] = {
          ...currTile,
          value: mineCounter
        }
      }
    }
  }

  return tiles
}

export const openEmptyTiles = (
  tiles: MSTile[][],
  rowParam: number,
  colParam: number
): MSTile[][] => {
  const currTile = tiles[rowParam][colParam]

  if (
    currTile.state === TileState.visible ||
    currTile.state === TileState.flagged
  ) {
    return tiles
  }

  let newTiles = tiles.slice()
  newTiles[rowParam][colParam].state = TileState.visible

  const {
    topLeftTile,
    topTile,
    topRightTile,
    leftTile,
    rightTile,
    bottomLeftTile,
    bottomTile,
    bottomRightTile
  } = grabAllAdjacentTiles(tiles, rowParam, colParam)

  if (
    topLeftTile?.state === TileState.hidden &&
    topLeftTile.value !== TileValue.mine
  ) {
    if (topLeftTile.value === TileValue.none) {
      newTiles = openEmptyTiles(newTiles, rowParam - 1, colParam - 1)
    } else {
      newTiles[rowParam - 1][colParam - 1].state = TileState.visible
    }
  }

  if (topTile?.state === TileState.hidden && topTile.value !== TileValue.mine) {
    if (topTile.value === TileValue.none) {
      newTiles = openEmptyTiles(newTiles, rowParam - 1, colParam)
    } else {
      newTiles[rowParam - 1][colParam].state = TileState.visible
    }
  }

  if (
    topRightTile?.state === TileState.hidden &&
    topRightTile.value !== TileValue.mine
  ) {
    if (topRightTile.value === TileValue.none) {
      newTiles = openEmptyTiles(newTiles, rowParam - 1, colParam + 1)
    } else {
      newTiles[rowParam - 1][colParam + 1].state = TileState.visible
    }
  }

  if (leftTile?.state === TileState.hidden && leftTile.value !== TileValue.mine) {
    if (leftTile.value === TileValue.none) {
      newTiles = openEmptyTiles(newTiles, rowParam, colParam - 1)
    } else {
      newTiles[rowParam][colParam - 1].state = TileState.visible
    }
  }

  if (
    rightTile?.state === TileState.hidden &&
    rightTile.value !== TileValue.mine
  ) {
    if (rightTile.value === TileValue.none) {
      newTiles = openEmptyTiles(newTiles, rowParam, colParam + 1)
    } else {
      newTiles[rowParam][colParam + 1].state = TileState.visible
    }
  }

  if (
    bottomLeftTile?.state === TileState.hidden &&
    bottomLeftTile.value !== TileValue.mine
  ) {
    if (bottomLeftTile.value === TileValue.none) {
      newTiles = openEmptyTiles(newTiles, rowParam + 1, colParam - 1)
    } else {
      newTiles[rowParam + 1][colParam - 1].state = TileState.visible
    }
  }

  if (
    bottomTile?.state === TileState.hidden &&
    bottomTile.value !== TileValue.mine
  ) {
    if (bottomTile.value === TileValue.none) {
      newTiles = openEmptyTiles(newTiles, rowParam + 1, colParam)
    } else {
      newTiles[rowParam + 1][colParam].state = TileState.visible
    }
  }

  if (
    bottomRightTile?.state === TileState.hidden &&
    bottomRightTile.value !== TileValue.mine
  ) {
    if (bottomRightTile.value === TileValue.none) {
      newTiles = openEmptyTiles(newTiles, rowParam + 1, colParam + 1)
    } else {
      newTiles[rowParam + 1][colParam + 1].state = TileState.visible
    }
  }

  return newTiles
}