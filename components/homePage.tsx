import React from 'react'
import { Divider, Collapse } from 'antd'
import styles from '../styles/baseSite/About.module.css'

type Props = {}

const { Panel } = Collapse

const HomePage = (props: Props) => {
  return (
    <div className={styles.container}>

      <div className={styles.aboutWhole}>
        <div>
          <h1 className={styles.headers}>Welcome to WAG!</h1>
          <p className={styles.content}>a Capstone Project from the developers that brought you Global Keebs, CheapEGames, and d'ora</p>
          <h2 className={styles.headers}>Why did we make WAG?</h2>
          <p className={styles.content}>We all enjoy these types of games so we made WAG to see if we could implement a site that we've all visited before from scratch.</p>
          <h3 className={styles.headers}>Do I need an account?</h3>
          <p className={styles.content}>No!, we made this site so you can play all these games freely, however if you want to track your scores feel free to make an account. scores are easily viewed on your profile.</p>
        </div>
        <h4 className={styles.headers}>Instructions</h4>
        <Collapse expandIconPosition='end' bordered={false} accordion={true}>
          <Panel className={styles.headers} header={"Minesweeper"} key='1'>
            <p className={styles.content}>
              Click on the squares to ...
            </p>
          </Panel>
          <Panel className={styles.headers} header={"Sudoku"} key='2'>
          <p className={styles.content}>
            A standard game of Sudoku, Click on cells to select it, and then click a button to insert the number into the cell.
          </p>
          </Panel>
          <Panel className={styles.headers} header={"Tetris"} key='3'>
          <p className={styles.content}>
            A standard game of Tetris
          </p>
          </Panel>
        </Collapse>

        <Divider />

      </div>
    </div>
  )
}

export default HomePage