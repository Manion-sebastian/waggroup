export interface AboutUs {
  name: string
  url: string
  blurb: string
  github: string
  linkedin: string
  portfolio: string
}

export interface MSBoard {
  width: number
  height: number
  mines: number
}

export interface Difficulty extends MSBoard {
  preset: number
  name: string
}

export interface MSTile {
  value: TileValue
  state: TileState
}

export interface MSTileButton extends MSTile {
  row: number
  col: number
}

export interface MSTimer {
  gameRunning: boolean
}

export interface MSMines {
  isFlagged: number
  mines: number
}