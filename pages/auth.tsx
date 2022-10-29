import React from 'react'
import LoginPage from '../components/authentication/loginPage'
import RegisterPage from '../components/authentication/registerPage'

type Props = {}

const auth = (props: Props) => {
  return (
    <div>
        {/* login */}
        <LoginPage />

        {/* registration */}
        <RegisterPage />

    </div>
  )
}

export default auth