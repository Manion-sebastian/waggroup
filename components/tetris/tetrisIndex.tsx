///
// src/index.tsx

// Import React and ReactDOM
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Import Tetris component
import Tetris from './tetrisGame'

// Import styles
// import './styles/styles.css'

// Import service worker
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Tetris boardWidth="14" boardHeight="20" />, document.getElementById('root'))