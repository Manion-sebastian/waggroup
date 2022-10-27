import React from 'react'
import { Button } from 'antd'

type Props = {
    handleStartGame: any
    gameStarted : string
}

const StartSection = ({handleStartGame, gameStarted}: Props) => {

  return (
    
    <div>
        <Button type='primary' onClick={handleStartGame}>{gameStarted}</Button>
    </div>
  )
}

export default StartSection