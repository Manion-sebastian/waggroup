// Next
import styles from '../styles/tetris/TetrisPage.module.css'

// React
import React from 'react'
import MineSweeperGame from '../components/minesweeperGame'

type Props = {}

const mineSweeperGame = (props: Props) => {
  return (
    <div>
      <section className={`TETRIS DISPLAY ${styles.gameDisplay}`}>
        <MineSweeperGame />
        <div className={`INSTRUCTIONS WRAPPER ${styles.gameDetails}`}>
          <p className={`TITLE ${styles.gameTitle}`}>
            <span className={styles.red}>Mine</span>
            <span className=''>sweeper</span>
          </p>

          <div className={`INSTRUCTIONS INNER WRAPPER ${styles.textInner}`}>
            <p className={`HOW TO PLAY ${styles.bold}`}>HOW TO PLAY</p>

            <article className={`INSTRUCTIONS ${styles.tutorial}`}>
              Move the falling Tetronimos to the bottom of the screen.
              Clear blocks by filling rows and play for longer.
              Stay alive for as long as possible to get the high score.

              <br />
              <br />

              Touch Controls:
              <ul> 
                <li>Move by tapping the <em>Left</em> or <em>Right</em> half of the game</li>
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
              
              Press "New Game" to begin playing!
            </article>

          </div>

        </div>
      </section>
    </div>
  )
}

export default mineSweeperGame