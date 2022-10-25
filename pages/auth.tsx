import React from 'react'
import LoginPage from '../components/loginPage'
import RegisterPage from '../components/registerPage'

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