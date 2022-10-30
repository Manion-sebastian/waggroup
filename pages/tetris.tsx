import * as React from 'react'
import App from '../components/tetris/App'

type Props = {}

const tetris = (props: Props) => {
  return (
    <div>
      <section>
        <App />
        <div>
          HOW TO PLAY
        </div>
      </section>
    </div>

  )
}

export default tetris