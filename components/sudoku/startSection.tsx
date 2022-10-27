import React from 'react'
import { Button } from 'antd'

type Props = {
    handleStartGame: any
}

const StartSection = ({handleStartGame}: Props) => {
  return (
    <div>
        <Button type='primary' onClick={handleStartGame}>Start Game</Button>
    </div>
  )
}

export default StartSection