import React, {useState, useEffect} from 'react'
import { scoresSudoku } from '../../typingSebastian'
import styles from '../../styles/baseSite/Profile.module.css'
import style from '../../styles/baseSite/Auth.module.css'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

type Props = {
    scoreData: scoresSudoku
}

const Scores = ({scoreData}: Props) => {

    // set currentUser stuff
    const [currentUser, setCurrentUser] = useState<any>(null)

    // grab a user's info
    useEffect(() => {
        const  token  = localStorage.getItem('jwt')
        if(token) {
            setCurrentUser(jwt_decode(token))
        } else {
            setCurrentUser(null)
        }
        }, [])
    


    // Needs working on
    let scoresMap = null
    const aUser = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${currentUser?.id}`)
            // scoresMap = response.data.scores.map((score: { _id: React.Key | null | undefined; game: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; score: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {

            //     return (
            //         <div
            //             className={style.authForms}
            //             key={score._id}
            //         >
        
            //             <div className={styles.userInfoTop}>
            //                 <div>
            //                     <h1 className={styles.userName}>{score.game}</h1>
            //                 </div>
            //                 <div>
            //                 <p className={styles.name}>Points/Time</p>
            //                 <p className={styles.name}>{score.score}</p>
        
            //                 </div>
                            
            //             </div>
            //         </div>
            //     )
            // })
            // console.log(response.data.scores)
            // console.log(response.data)
        } catch(err) {
            console.log(err)
        }
        
    }

    aUser()

    

  return (
    <div>
        {scoresMap}
    </div>
  )
}

export default Scores