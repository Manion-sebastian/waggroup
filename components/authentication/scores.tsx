import React from 'react'
import { scoresSudoku } from '../../typingSebastian'

type Props = {
    scoreData: scoresSudoku
}

const Scores = ({scoreData}: Props) => {

    const scoresMap = scoreData.scores.map(score => {

        return (
            <div
                key={score._id}
            >
                <h1>{score.game}</h1>
                <p>{score.score.time}</p>
                
            </div>
        )
    })

  return (
    <div>
        {scoresMap}
    </div>
  )
}

export default Scores