import React from 'react'
import Scores from '../components/authentication/scores'
import UserInfo from '../components/authentication/userInfo'
import { scoresSudoku, userInfo } from '../typingSebastian'

type Props = {}
// get users -- display info here. 

const testUser : userInfo = {
    name: 'Tom',
    username: 'TappinTurnip',
    email: 't@email.com',
    password: 'tpass'
}

const testUserScores : scoresSudoku = {
    scores : [
        {
            _id: '12absas123',
            game: 'sudoku',
            score: {
                time: 342
            }
        },
        {
            _id: 'adsad12asdasd',
            game: 'minesweeper',
            score: {
                time: 342
            }
        },
        {
            _id: 'asdasd123asdadaas',
            game: 'tetris',
            score: {
                time: 342
            }
        },

    ]
}

const Profile = ({}: Props) => {
  return (
    <div>

        {/* userInfo */}
        {/* either pass in userInfo, or call it inside */}
        <UserInfo userData={testUser} />

        {/* scores */}
        {/* same as above */}
        <Scores scoreData={testUserScores} />

    </div>
  )
}

export default Profile