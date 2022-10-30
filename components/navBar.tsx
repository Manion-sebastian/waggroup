import React from 'react'
import Link  from 'next/link'
import { Menu } from 'antd'
import { HomeOutlined, UserOutlined, QuestionCircleOutlined, MenuOutlined } from '@ant-design/icons'


type Props = {}

const NavBar = () => {

  // const user = <FontAwesomeIcon icon={"fa-regular fa-user" as IconProp} />

  const items = [
    {label:<Link href={'/'}>Home</Link>, key:'home', icon: <HomeOutlined />},
    {label:'Games', key:'games', icon: <MenuOutlined />, children:[
      {label:<Link href={'/minesweeper'}>Minesweeper</Link>,key:'Minesweeper', },
      {label:<Link href={'/sudoku'}>Sudoku</Link>,key:'Sudoku'},
      {label:<Link href={'/tetris'}>Tetris</Link>,key:'Tetris'},
    ]},
    {label:<Link href={'/auth'}>Login or Register</Link>, key:'authentication', icon:<UserOutlined />},
    {label:<Link href={'/about'}>About</Link>, key:'about', icon: <QuestionCircleOutlined />},
  ]
    // <div>
    //     <Link href={'/'}>Home</Link>{" "} |
    //     {" "} <Link href={'/about'}>About</Link> {" "} |
    //     {" "} <Link href={'/auth'}>Login or Register</Link> {" "} |
    //     {" "} <Link href={'/profile'}>profile</Link>
    // </div>

  return (
    <Menu mode='horizontal' items={items} />
  )
}

export default NavBar