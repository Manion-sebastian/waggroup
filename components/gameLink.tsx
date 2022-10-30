import React from 'react'
import Link from 'next/link'
import styles from '../styles/baseSite/GamesLink.module.css'

type Props = {}

const GameLink = (props: Props) => {
  return (
    <div className={styles.bottomBar}>
        
            <Link className={styles.items} href={'/minesweeper'}>Minesweeper</Link>
        
        
            <Link className={styles.items} href={'/sudoku'}>Sudoku</Link>
        
        
            <Link className={styles.item} href={'/tetris'}>Tetris</Link>
        
    </div>
  )
}

export default GameLink