import React from 'react'
import styles from '../../styles/baseSite/Auth.module.css'


type Props = {}

const Registration = (props: Props) => {
  return (
    <div className={styles.authForms}>
        <form action="/register" method='POST'>
            <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor="name">Name:</label>
                <input className={styles.authInput} name='name' id='name' type="text" required placeholder='Enter Name'/>
            </div>
            <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor='username'>Username:</label>
                <input className={styles.authInput} name='username' id='username' type='text' required placeholder='Enter Username' />
            </div>
            <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor="email">Email:</label>
                <input className={styles.authInput} name='email' id='email' type="email" required placeholder='Enter Email' />
            </div>
            <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor="password">Password:</label>
                <input className={styles.authInput} name='password' id='password' type='password' required placeholder='Enter Password' />
            </div>
            <button className={styles.authButton} type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Registration