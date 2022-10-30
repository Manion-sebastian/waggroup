import React from 'react'
import  Link  from 'next/link'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <h1>About WAG</h1>
      <div>
        <h2>Welcome to WAG, a Capstone Project from the developers that brought you... stuff.</h2>
        <p>We all really like these games and so we wanted to make a place where we could easily play them.</p>
      </div>
      <div>
        <h3>Do I need an account?</h3>
        <p>No!, we made this site so you can play all these games freely, however if you want to track your scores feel free to make an account. scores are easily viewed on your profile.</p>

      </div>



    </div>
  )
}

export default HomePage