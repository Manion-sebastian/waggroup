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
  row: number
  col: number
  isHidden: boolean
  isFlagged: boolean
  isMine: boolean
  adjMines: number
}