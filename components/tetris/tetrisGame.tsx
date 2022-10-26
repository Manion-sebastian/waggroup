import React from 'react'

import { createStage } from './gameHelper'

// Components
import Stage from './stage'
import Display from './display';
import StartButton from './startButton';


const tetrisGame = () => {
  return (
    <div>
      <Stage stage={createStage()}/>
      <aside>
        <div>
          <Display text='Score' />
          <Display text='Rows' />
          <Display text='Level' />
        </div>
        <StartButton />
      </aside>
    </div>
  )
}

export default tetrisGame