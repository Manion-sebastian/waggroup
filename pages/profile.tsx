import React, {useState, useEffect} from 'react'
import Scores from '../components/authentication/scores'
import UserInfo from '../components/authentication/userInfo'
import { scoresSudoku, userInfo } from '../typingSebastian'
import styles from '../styles/baseSite/Profile.module.css'
import NavBar from '../components/navBar'
import jwt_decode from 'jwt-decode'

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

const [currentUser, setCurrentUser] = useState<any>(null)
useEffect(() => {
    const  token  = localStorage.getItem('jwt')
    if(token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])
  return (
    <div>
    <div className={styles.userInfoCont}>
        <div className={styles.profileTop}>
            {/* userInfo */}
            {/* either pass in userInfo, or call it inside */}
            <UserInfo userData={testUser} />

        </div>

        <div className={styles.profileBot}>
            {/* scores */}
            {/* same as above */}
            <Scores scoreData={testUserScores} />

        </div>


    </div>

    </div>
  )
}

export default Profile