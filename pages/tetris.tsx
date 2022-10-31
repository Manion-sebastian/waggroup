// Next
import styles from '../styles/tetris/TetrisPage.module.css'

// React
import * as React from 'react'
import App from '../components/tetris/App'

type Props = {}

const tetris = (props: Props) => {
  return (
    <div>
      <section className={`TETRIS DISPLAY ${styles.gameDisplay}`}>
        <App />
        <div className={`INSTRUCTIONS ${styles.gameInstructions}`}>
          <p className={styles.gameTitle}>
            <span className={styles.red}>T</span>
            <span className={styles.orange}>E</span>
            <span className={styles.yellow}>T</span>
            <span className={styles.green}>R</span>
            <span className={styles.blue}>I</span>
            <span className={styles.purple}>S</span>
          </p>
          <p className={styles.bold}>HOW TO PLAY</p>
        </div>
      </section>
    </div>

  )
}

export default tetris