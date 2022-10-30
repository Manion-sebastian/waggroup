import React from 'react'
import Link from 'next/link'
import styles from '../styles/baseSite/GamesLink.module.css'

type Props = {}

const GameLink = (props: Props) => {
  return (
    <div className={styles.bottomBar}>
        
          <div className={styles.item}>
            <Link  href={'/minesweeper'}>Minesweeper</Link>
          </div>
          <div className={styles.item}>
            <Link  href={'/sudoku'}>Sudoku</Link>
          </div>
          <div className={styles.item}>
            <Link href={'/tetris'}>Tetris</Link>
        
          </div>
    </div>
  )
}

export default GameLink