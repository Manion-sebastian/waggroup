// Next
import styles from '../styles/tetris/gameDisplay.module.css'

// React
import React from 'react'
import SudokuGame from '../components/sudoku/sudokuGame'

// Font Awesome
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const pause = <FontAwesomeIcon icon={faPause} />

type Props = {}

const SudokuTest = (props: Props) => {
  return (
    <div>
      <section className={`MS DISPLAY ${styles.gameDisplay}`}>
        <SudokuGame />
        <div className={`INSTRUCTIONS WRAPPER ${styles.gameDetails}`}>
          <p className={`TITLE ${styles.gameTitle} ${styles.sudoku}`}>
            <span>Sudoku</span>
          </p>

          <div className={`INSTRUCTIONS INNER WRAPPER ${styles.textInner}`}>
            <p className={`HOW TO PLAY ${styles.bold}`}>HOW TO PLAY</p>

            <article className={`INSTRUCTIONS ${styles.tutorial}`}>
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
              
              Press "New Game" to make a new puzzle! <br />
              Press " {pause} " to pause the timer <br />
              Press "Check Game" when you finish to see if you won!
            </article>

          </div>

        </div>
      </section>
    </div>
  )
}

export default SudokuTest