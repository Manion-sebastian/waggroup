import React from 'react'
import Link from 'next/link'

type Props = {}

const GameLink = (props: Props) => {
  return (
    <div>
        <Link href={'/minesweeper'}>Minesweeper</Link>
        <Link href={'/sudoku'}>Sudoku</Link>
        <Link href={'/tetris'}>Tetris</Link>
    </div>
  )
}

export default GameLink