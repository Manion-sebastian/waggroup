import React, { useState } from 'react'
import styles from '../../styles/baseSite/Auth.module.css'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import NavBar from '../navBar'

type Props = { 
  // currentUser : any
  //  setCurrentUser : any
}

const LoginForm = ({}: Props) => {

  const [userNameOrEmail, setuserNameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e:any) => {
		e.preventDefault()
		try {

			// post form data to the backend
			const reqBody = {
				userNameOrEmail, 
				password
			}
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`, reqBody)
      

			// save the token in localstorage
			const  token  = response.data
			localStorage.setItem('jwt', token)

			// decode the token
			const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			// setCurrentUser(decoded)

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

    <div className={styles.authForms}>

        <h1>Login to Your Account:</h1>

        <p>{msg}</p>


        <form onSubmit={handleSubmit}>
          <div className={styles.authLabelSection}>
                  <label className={styles.authLabel} htmlFor="userNameOrEmail">Username/Email:</label>
                  <input className={styles.authInput} name='userNameOrEmail' id='userNameOrEmail' type="userNameOrEmail" required placeholder='Enter a username or email'
                  value={userNameOrEmail} onChange={e => setuserNameOrEmail(e.target.value)} />
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
  )
}

export default LoginForm