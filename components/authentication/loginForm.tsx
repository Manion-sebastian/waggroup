import React, { useState } from 'react'
import styles from '../../styles/baseSite/Auth.module.css'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import NavBar from '../navBar'

type Props = { 
  currentUser : any
   setCurrentUser : any
}

const LoginForm = ({currentUser, setCurrentUser}: Props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e:any) => {
		e.preventDefault()
		try {
			// post fortm data to the backend
			const reqBody = {
				email, 
				password
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, reqBody)

			// save the token in localstorage
			const { token } = response.data
			localStorage.setItem('jwt', token)

			// decode the token
			const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			setCurrentUser(decoded)

		} catch (err : any) {
			console.warn(err)
			if (err.response) {
				setMsg(err.response.data.msg)
			}
		}
 	}


  //  if (currentUser) {
	// 	return <Navigate to="/profile" />
	// }


  return (
    <div>
      {/* <NavBar /> */}
      <div className={styles.authForms}>

          <h1>Login to Your Account:</h1>

          <p>{msg}</p>


          <form onSubmit={handleSubmit}>
            <div className={styles.authLabelSection}>
                    <label className={styles.authLabel} htmlFor="email">Email:</label>
                    <input className={styles.authInput} name='email' id='email' type="email" required placeholder='Enter Email'
                    value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className={styles.authLabelSection}>
                    <label className={styles.authLabel} htmlFor="password">Password:</label>
                    <input className={styles.authInput} name='password' id='password' type='password' required placeholder='Enter Password' 
                    value={password} onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className={styles.authButton} type='submit'>Login</button>
          </form>
      </div>
    </div>
  )
}

export default LoginForm