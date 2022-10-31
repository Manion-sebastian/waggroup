import React, {useState, useEffect} from 'react'
import styles from '../../styles/baseSite/Auth.module.css'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'


type Props = {
    // currentUser: any
    // setCurrentUser: any
}

const ProfileDelete = ({}: Props) => {
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

    //   deleting function
    const deleteFunction = async () => {
        try {
			await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${currentUser?.id}`)
      router.push('/')
           

		} catch (err : any) {
            console.warn(err)
			if (err.response) {
			    setMsg(err.response.data.msg)

            }
        }
    }

    // calls function to delete
    deleteFunction()

    // router push to redirect to the profile after deletion
    

}

export default ProfileDelete

