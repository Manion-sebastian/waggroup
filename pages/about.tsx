import React from 'react'
import Image from 'next/image'
import { Divider } from 'antd'

import type { AboutUs } from '../typings' 
import styles from '../styles/baseSite/About.module.css'

type Props = {}

const programmers = [
    {
        name: 'Brandon Wu',
        url: 'https://media-exp1.licdn.com/dms/image/D4E03AQG1Aa9OqPkwmQ/profile-displayphoto-shrink_800_800/0/1667144996437?e=1672876800&v=beta&t=-ez8ZLIGE9DwLa7T0EKbiOCCxKfCenMQSa3q78k20v0',
        blurb: "Full-Stack Developer that enjoys a freshly-brewed cup of coffee in the morning. I'm always looking to connect with others and love making humorous/unique programs with great teams. Message me at my links below and other places on the internet :)",
        github: 'https://github.com/brandon-w1205',
        linkedin: 'https://www.linkedin.com/in/brandonjwu/',
        portfolio: 'https://brandonw.vercel.app'

    },
    {
        name: 'Ian Dabinett',
        url: 'https://avatars.githubusercontent.com/u/110520418?v=4',
        blurb: "A software developer with a passion for unique designs and clacky keyboards. Previously worked as a video and music producer, and I'm now on a mission to start cool projects with awesome people. Links below for more info",
        github: 'https://github.com/IanDab47',
        linkedin: 'https://www.linkedin.com/in/ian-dabinett/',
        portfolio: ''

    },
    {
        name: 'Sebastian Manion',
        url: 'https://media-exp1.licdn.com/dms/image/C5603AQFKVY3ljseKuQ/profile-displayphoto-shrink_800_800/0/1660083494530?e=1671667200&v=beta&t=v-Znxg-d_QXgopWPvjNme3ivOvzE_3ezREUD5R0F0j0',
        blurb: 'I am a web developer from Seattle Washington, I love rainy days, and puzzles. if you want to get to get into contact with me feel free to connect with me on Linkedin.',
        github: 'https://github.com/Manion-sebastian',
        linkedin: 'https://www.linkedin.com/in/sebastianmanion/',
        portfolio: 'https://sebastian-manion.vercel.app/'

    },

]

const About = (props: Props) => {
  return (
    <div>
        {programmers.map((person : AboutUs) => (
            <div key={person.name} className={styles.aboutWhole}>
                <div className={styles.aboutPhotoDiv}>
                    <Image  
                        className={styles.aboutPhoto}
                        src={person.url}
                        alt={person.name}
                        width={200}
                        height={200}
                    />
                    <h1>{person.name}</h1>
                </div>
                <div>
                    <p>
                        {person.blurb}
                    </p>
                    <div>
                        <a className={styles.aboutLinks} href={person.github}>Github</a>
                        <a className={styles.aboutLinks} href={person.linkedin}>Linkedin</a>
                        <a className={styles.aboutLinks} href={person.portfolio}>Portfolio</a>

                    </div>
                </div>
            </div>
        ))}



    </div>
  )
}

export default About