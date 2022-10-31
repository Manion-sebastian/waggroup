import React from 'react'
import styles from '../../styles/baseSite/Auth.module.css'

type Props = {}

const LoginForm = (props: Props) => {
  return (
    <div className={styles.authForms}>
        <form action="/login" method='POST'>
        <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor="email">Email:</label>
                <input className={styles.authInput} name='email' id='email' type="email" required placeholder='Enter Email' />
            </div>
            <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor="password">Password:</label>
                <input className={styles.authInput} name='password' id='password' type='password' required placeholder='Enter Password' />
            </div>
            <button className={styles.authButton} type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm