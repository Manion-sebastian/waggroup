// Next
import styles from '../styles/tetris/gameDisplay.module.css'

// React
import * as React from 'react'
import App from '../components/tetris/App'
import NavBar from '../components/navBar'

type Props = {}

const tetris = (props: Props) => {
  return (
    <div>
      <section className={`TETRIS DISPLAY ${styles.gameDisplay}`}>
        <App />
        <div className={`INSTRUCTIONS WRAPPER ${styles.gameDetails}`}>
          <p className={`TITLE ${styles.gameTitle}`}>
            <span className={styles.red}>T</span>
            <span className={styles.orange}>E</span>
            <span className={styles.yellow}>T</span>
            <span className={styles.green}>R</span>
            <span className={styles.blue}>I</span>
            <span className={styles.purple}>S</span>
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
              
              Press &qot;START GAME&qot; to begin playing!
            </article>

          </div>

        </div>
      </section>
    </div>
  )
}

export default tetris