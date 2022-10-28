import React from 'react'
import { Button } from 'antd'
import styles from '../../styles/sudoku/Board.module.css'

type Props = {
  // starting: boolean
  // handleGame: any
  handleInput: any
}

const ControlBar = ({ handleInput }: Props) => {



  return (
    <div className={styles.controlConstraints}>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>0</Button>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>1</Button>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>2</Button>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>3</Button>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>4</Button>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>5</Button>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>6</Button>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>7</Button>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>8</Button>
      <Button onClick={handleInput} className={styles.controlButton} type='primary'>9</Button>
    </div>
    
  )
}

export default ControlBar