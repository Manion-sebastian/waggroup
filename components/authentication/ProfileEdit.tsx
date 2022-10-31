import React, {useState, useEffect} from 'react'
import styles from '../../styles/baseSite/Auth.module.css'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'


type Props = {
    // currentUser: any
    // setCurrentUser: any
}

const ProfileEdit = ({}: Props) => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const router = useRouter()
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


    // needs working on
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
			const response = await axios.patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${currentUser?.id}`, reqBody)
			const token  = response.data
			localStorage.setItem('jwt', token)

            // router push to redirect to the profile after registration
            // await router.push('/profile')

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

        <h1>Edit Account:</h1>

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
            <button className={styles.authButton} type='submit'>Edit</button>
        </form>
    </div>
  )
}

export default ProfileEdit