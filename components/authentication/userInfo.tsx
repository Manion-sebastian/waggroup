import React, {useState, useEffect} from 'react'
import { userInfo } from '../../typingSebastian'
import styles from '../../styles/baseSite/Profile.module.css'
import style from '../../styles/baseSite/Auth.module.css'
import Link from 'next/link'
import jwt_decode from 'jwt-decode'

type Props = {
    userData : userInfo
}

const UserInfo = ({userData}: Props) => {
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

  return (
    <div className={style.authForms}>
        <div className={styles.userInfoTop}>
            <h1 className={styles.userName}>{currentUser !== null ? currentUser.username : null}</h1>
        </div>
        <div className={styles.userInfoBottom}>
            <p className={styles.name}>Name: {currentUser !== null ? currentUser.name : null}</p>
            <p className={styles.name}>Email: {currentUser !== null ? currentUser.email : null}</p>
           
        </div>
        <button><Link href={'/editProfile'}>Edit Profile</Link></button>
        <button><Link href={'/deleteProfile'}>Delete Profile</Link></button>
    </div>
  )
}

export default UserInfo