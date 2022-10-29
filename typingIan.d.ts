import React from "react"

export interface AboutUs {
  name: string
  url: string
  blurb: string
  github: string
  linkedin: string
  portfolio: string
}

export interface MSBoard {
  tiles: MSTile[][]
  width: number
  height: number
  mines: number
  handleClick(row: number, col: number): (...args: any[]) => void
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
  handleClick(row: number, col: number): (...args: any[]) => void
}

export interface MSTimer {
  time: number
}

export interface MSMines {
  mines: number
}

export interface MSGameButton {
  gameState: string
  handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}