import React from 'react'
import { scoresSudoku } from '../../typingSebastian'
import styles from '../../styles/baseSite/Profile.module.css'
import style from '../../styles/baseSite/Auth.module.css'

type Props = {
    scoreData: scoresSudoku
}

const Scores = ({scoreData}: Props) => {

    const scoresMap = scoreData.scores.map(score => {

        return (
            <div
                className={style.authForms}
                key={score._id}
            >

                <div className={styles.userInfoTop}>
                    <div>
                        <h1 className={styles.userName}>{score.game}</h1>
                    </div>
                    <div>
                    <p className={styles.name}>date of score</p>
                    <p className={styles.name}>{score.score.time}</p>

                    </div>
                    
                </div>
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