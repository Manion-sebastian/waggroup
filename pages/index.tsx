// next imports
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'antd' //component


// helper imports
import HomePage from '../components/homePage'
import NavBar from '../components/navBar'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'




type Props = {}

const Home = ({} : Props) => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        {/* change for deployment */}
        <meta name="description" content="Capstone Project GASEIR808 BW, ID, SM" />
        <link rel="icon" href="/favicon.ico" />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/antd/4.23.6/antd.min.js' defer />
      </Head>
  

      <HomePage />

    </div>
  )
}

export default Home

// this allows us to query the backend on load to lessen the strain on loading time. (bit that broke me over the weekend.)
// export const getStaticProps: GetStaticProps<Props> = async () => {
  // return {
  //   props: {

  //   },
  //   revalidate: // when do we want it to check for an update
  // }

// }