import React from 'react'
import styles from '../../styles/baseSite/Auth.module.css'
import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'



type Props = {
    // currentUser: any
    // setCurrentUser: any
}

const Registration = ({}: Props) => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try {
            const reqBody = {
                name,
                username,
				email, 
				password
			}
            // console.log(reqBody)
			const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/create`, reqBody)
			const { token } = response.data
			localStorage.setItem('jwt', token)
			const decoded = jwt_decode(token)
			// setCurrentUser(decoded)

		} catch (err : any) {
            console.warn(err)
			if (err.response) {
			    setMsg(err.response.data.msg)

            }
        }
    }

    // add navigate
    // if (currentUser) {
	// 	return <Navigate to="/profile" />
	// }

  return (
    <div className={styles.authForms}>

        <h1>Register for an Account:</h1>

        <p>{msg}</p>

        <form onSubmit={handleSubmit}>
            <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor="name">Name:</label>
                <input className={styles.authInput} name='name' id='name' type="text" required placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor='username'>Username:</label>
                <input className={styles.authInput} name='username' id='username' type='text' required placeholder='Enter Username' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor="email">Email:</label>
                <input className={styles.authInput} name='email' id='email' type="email" required placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className={styles.authLabelSection}>
                <label className={styles.authLabel} htmlFor="password">Password:</label>
                <input className={styles.authInput} name='password' id='password' type='password' required placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className={styles.authButton} type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Registration