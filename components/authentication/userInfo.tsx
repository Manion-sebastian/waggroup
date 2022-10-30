import React from 'react'
import { userInfo } from '../../typingSebastian'
import styles from '../../styles/baseSite/Profile.module.css'

type Props = {
    userData : userInfo
}

const UserInfo = ({userData}: Props) => {
  return (
    <div>
        <div className={styles.userInfoTop}>
            <h1 className={styles.userName}>{userData.username}</h1>
            <p className={styles.name}>{userData.name}</p>
        </div>
        <div className={styles.userInfoBottom}>
            <p className={styles.name}>{userData.email}</p>
            <p className={styles.name}>{userData.password}</p>
        </div>

    </div>
  )
}

export default UserInfo