import React from 'react'
import { userInfo } from '../../typingSebastian'
import styles from '../../styles/baseSite/Profile.module.css'
import style from '../../styles/baseSite/Auth.module.css'
type Props = {
    userData : userInfo
}

const UserInfo = ({userData}: Props) => {
  return (
    <div className={style.authForms}>
        <div className={styles.userInfoTop}>
            <h1 className={styles.userName}>{userData.username}</h1>
        </div>
        <div className={styles.userInfoBottom}>
            <p className={styles.name}>Name: {userData.name}</p>
            <p className={styles.name}>Email: {userData.email}</p>
           
        </div>
        <button>Edit Profile</button>
    </div>
  )
}

export default UserInfo