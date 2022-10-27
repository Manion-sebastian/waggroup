import React from 'react'
import { Button } from 'antd'
import styles from '../../styles/sudoku/Board.module.css'

type Props = {
  // starting: boolean
  // handleGame: any
}

const ControlBar = ({}: Props) => {



  return (
    <div className={styles.controlConstraints}>
      <Button className={styles.controlButton} type='primary'>0</Button>
      <Button className={styles.controlButton} type='primary'>1</Button>
      <Button className={styles.controlButton} type='primary'>2</Button>
      <Button className={styles.controlButton} type='primary'>3</Button>
      <Button className={styles.controlButton} type='primary'>4</Button>
      <Button className={styles.controlButton} type='primary'>5</Button>
      <Button className={styles.controlButton} type='primary'>6</Button>
      <Button className={styles.controlButton} type='primary'>7</Button>
      <Button className={styles.controlButton} type='primary'>8</Button>
      <Button className={styles.controlButton} type='primary'>9</Button>
    </div>
    
  )
}

export default ControlBar