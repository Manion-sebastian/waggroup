import React from 'react'
import { Divider, Collapse } from 'antd'
import styles from '../styles/baseSite/About.module.css'
import styl from '../styles/tetris/gameDisplay.module.css'

import { faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const pause = <FontAwesomeIcon icon={faPause} />

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
          {/* <h3 className={styles.headers}>Do I need an account?</h3> */}
          {/* <p className={styles.content}>No!, we made this site so you can play all these games freely, however if you want to track your scores feel free to make an account. scores are easily viewed on your profile.</p> */}
        </div>
        <h4 className={styles.headers}>Instructions</h4>
        <Collapse expandIconPosition='end' bordered={false} accordion={true}>
          <Panel className={styles.headers} header={"Minesweeper"} key='1'>
            <p className={styles.content}>
            <div className={`INSTRUCTIONS WRAPPER ${styl.gameDetails}`}>
          <p className={`TITLE ${styl.gameTitle} ${styl.MSFont}`}>
            <span className={`${styl.red} ${styl.MINE}`}>Mine</span>
            <span className=''>sweeper</span>
          </p>

          <div className={`INSTRUCTIONS INNER WRAPPER ${styl.textInner}`}>
            <p className={`HOW TO PLAY ${styl.bold}`}>HOW TO PLAY</p>

            <article className={`INSTRUCTIONS ${styl.tutorial}`}>
              Click on the tiles to reveal what&apos;s underneath.
              Use the revealed numbers to determine whether your next click is a number...or not.
              Reveal all the tiles that aren&apos;t mines 💣 to win the game! 🎉

              <br />
              <br />

              Touch Controls:
              <ul> 
                <li>Tap a tile to reveal its value</li>
                <li>Tap and <em>hold</em> to flag an untapped tile</li>
              </ul>
              
              <br />

              Keyboard Controls:
              <ul> 
                <li>Left Click a tile to reveal its value</li>
                <li>Right Click to flag an untapped tile</li>
              </ul>

              <br />
              
              Press &quot;New Game&quot; to begin playing!
            </article>

          </div>

        </div>
            </p>
          </Panel>
          <Panel className={styles.headers} header={"Sudoku"} key='2'>
          <p className={styles.content}>
          <div className={`INSTRUCTIONS WRAPPER ${styl.gameDetails}`}>
          <p className={`TITLE ${styl.gameTitle} ${styl.sudoku}`}>
            <span>Sudoku</span>
          </p>

          <div className={`INSTRUCTIONS INNER WRAPPER ${styl.textInner}`}>
            <p className={`HOW TO PLAY ${styl.bold}`}>HOW TO PLAY</p>

            <article className={`INSTRUCTIONS ${styl.tutorial}`}>
              Fill each cell with a number between 1 - 9.
              You cannot use the same digit if it exists in the same row, column or box.
              Fill all 81 cells as fast as possible for the highest score.

              <br />
              <br />

              Controls:
              <ul> 
                <li>Press the cell you wish to guess on</li>
                <li>Press/Enter the digit you want to mark</li>
              </ul>

              <br />
              
              Press &quot;New Game&quot; to make a new puzzle! <br />
              Press &quot; {pause} &quot; to pause the timer <br />
              Press &quot;Check Game&quot; when you finish to see if you won!
            </article>

          </div>

        </div>
          </p>
          </Panel>
          <Panel className={styles.headers} header={"Tetris"} key='3'>
          <p className={styl.content}>
          <div className={`INSTRUCTIONS WRAPPER ${styl.gameDetails}`}>
          <p className={`TITLE ${styl.gameTitle}`}>
            <span className={styl.red}>T</span>
            <span className={styl.orange}>E</span>
            <span className={styl.yellow}>T</span>
            <span className={styl.green}>R</span>
            <span className={styl.blue}>I</span>
            <span className={styl.purple}>S</span>
          </p>

          <div className={`INSTRUCTIONS INNER WRAPPER ${styl.textInner}`}>
            <p className={`HOW TO PLAY ${styl.bold}`}>HOW TO PLAY</p>

            <article className={`INSTRUCTIONS ${styl.tutorial}`}>
              Move the falling Tetronimos to the bottom of the screen.
              Clear blocks by filling rows and play for longer.
              Stay alive for as long as possible to get the high score.

              <br />
              <br />

              Touch Controls:
              <ul> 
                <li>Move by tapping the <em>Left</em> or <em>Right</em> half of the screen</li>
                <li>Rotate by swipping <em>Left</em> or <em>Right</em></li>
                <li>Pull <em>Down</em> on the game to fall faster</li>
              </ul>
              
              <br />

              Keyboard Controls:
              <ul> 
                <li>Move with the A/D or ⬅/➡ keys</li>
                <li>Rotate with the J/K or Z/X keys</li>
                <li>Use the S or ⬇ keys to fall faster</li>
              </ul>

              <br />
              
              Press &quot;START GAME&quot; to begin playing!
            </article>

          </div>

        </div>
          </p>
          </Panel>
        </Collapse>

        <Divider />

      </div>
    </div>
  )
}

export default HomePage