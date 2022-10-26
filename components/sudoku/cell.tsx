import React from 'react'
import styles from '../../styles/sudoku/Cell.module.css'

type Props = {
    num: number
}

const Cell = ({num}: Props) => {
  return (
    <div className={styles.size}>{num}</div>
  )
}

export default Cell