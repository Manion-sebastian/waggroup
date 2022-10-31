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
          <p className={styles.content}>a Capstone Project from the developers that brought you Global Keebs, CheapEGames, and d&apos;ora</p>
          <h2 className={styles.headers}>Why did we make WAG?</h2>
          <p className={styles.content}>We all enjoy these types of games so we made WAG to see if we could implement a site that we&apos;ve all visited before from scratch.</p>
          <h3 className={styles.headers}>Do I need an account?</h3>
          <p className={styles.content}>No!, we made this site so you can play all these games freely, however if you want to track your scores feel free to make an account. scores are easily viewed on your profile.</p>
        </div>
        <h4 className={styles.headers}>Instructions</h4>
        <Collapse expandIconPosition='end' bordered={false} accordion={true}>
          <Panel className={styles.headers} header={"Minesweeper"} key='1'>
            <p className={styles.content}>
              Click on the tiles to reveal what's underneath. <br />
              Use the revealed numbers to determine whether your next click is a number...or not. <br />
              Reveal all the tiles that aren't mines 💣 to win the game! 🎉
            </p>
          </Panel>
          <Panel className={styles.headers} header={"Sudoku"} key='2'>
          <p className={styles.content}>
            Fill each cell with a number between 1 - 9. <br />
            You cannot use the same digit if it exists in the same row, column or box. <br />
            Fill all 81 cells as fast as possible for the highest score.
          </p>
          </Panel>
          <Panel className={styles.headers} header={"Tetris"} key='3'>
          <p className={styles.content}>
            Move the falling Tetronimos to the bottom of the screen. <br />
            Clear blocks by filling rows and play for longer. <br />
            Stay alive for as long as possible to get the high score.
          </p>
          </Panel>
        </Collapse>

        <Divider />

      </div>
    </div>
  )
}

export default HomePage