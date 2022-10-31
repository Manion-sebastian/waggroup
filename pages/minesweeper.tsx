// Next
import styles from '../styles/tetris/gameDisplay.module.css'

// React
import React from 'react'
import MineSweeperGame from '../components/minesweeperGame'

type Props = {}

const mineSweeperGame = (props: Props) => {
  return (
    <div>
      <section className={`MS DISPLAY ${styles.gameDisplay}`}>
        <MineSweeperGame />
        <div className={`INSTRUCTIONS WRAPPER ${styles.gameDetails}`}>
          <p className={`TITLE ${styles.gameTitle} ${styles.MSFont}`}>
            <span className={`${styles.red} ${styles.MINE}`}>Mine</span>
            <span className=''>sweeper</span>
          </p>

          <div className={`INSTRUCTIONS INNER WRAPPER ${styles.textInner}`}>
            <p className={`HOW TO PLAY ${styles.bold}`}>HOW TO PLAY</p>

            <article className={`INSTRUCTIONS ${styles.tutorial}`}>
              Click on the tiles to reveal what's underneath.
              Use the revealed numbers to determine whether your next click is a number...or not.
              Reveal all the tiles that aren't mines 💣 to win the game! 🎉

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
              
              Press "New Game" to begin playing! <br />
              Press "| |" to pause and unpause the game
            </article>

          </div>

        </div>
      </section>
    </div>
  )
}

export default mineSweeperGame