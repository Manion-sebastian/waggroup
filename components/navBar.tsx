import React, {useState, useEffect} from 'react'
import Link  from 'next/link'
import { Menu } from 'antd'
import { HomeOutlined, UserOutlined, QuestionCircleOutlined, MenuOutlined, FlagOutlined, NumberOutlined, BuildOutlined } from '@ant-design/icons'
import jwt_decode from 'jwt-decode'
import Router, { useRouter } from 'next/router'


type Props = {
  currentUser: any
  setCurrentUser: any
}

const NavBar = () => {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const router = useRouter()
  useEffect(() => {
    const  token  = localStorage.getItem('jwt')
    if(token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [currentUser])

  const handleLogout = async () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setCurrentUser(null)
      await router.push('/')
    }
  }


  // w nestled elements
  const loggedInItems = [
    {label:<Link href={'/'}>Home</Link>, key:'home', icon: <HomeOutlined />},
    {label:'Games', key:'games', icon: <MenuOutlined />, children:[
      {label:<Link href={'/minesweeper'}>Minesweeper</Link>,key:'Minesweeper', icon: <FlagOutlined />  },
      {label:<Link href={'/sudoku'}>Sudoku</Link>,key:'Sudoku', icon:<NumberOutlined />},
      {label:<Link href={'/tetris'}>Tetris</Link>,key:'Tetris', icon:<BuildOutlined />},
    ]},
    {label:<Link href={'/profile'}>Profile</Link>, key:'profile', icon:<UserOutlined />},
    {label:'Auth', key:'auth', icon:<UserOutlined />, children: [
      // {label:<Link href={'/login'}>Login</Link>, key:'login', icon:<UserOutlined />},
      // {label:<Link href={'/register'}>Register</Link>, key:'register', icon:<UserOutlined />},
      {label:<button style={{border: 'none'}} onClick={handleLogout}>Log Out</button>, key:'logout', icon:<UserOutlined />},
    ]},
    {label:<Link href={'/about'}>About</Link>, key:'about', icon: <QuestionCircleOutlined />},
    {label: currentUser !== null ? `${currentUser.username}` : null}
  ]

  const loggedOutItems = [
    {label:<Link href={'/'}>Home</Link>, key:'home', icon: <HomeOutlined />},
    {label:'Games', key:'games', icon: <MenuOutlined />, children:[
      {label:<Link href={'/minesweeper'}>Minesweeper</Link>,key:'Minesweeper', icon: <FlagOutlined />  },
      {label:<Link href={'/sudoku'}>Sudoku</Link>,key:'Sudoku', icon:<NumberOutlined />},
      {label:<Link href={'/tetris'}>Tetris</Link>,key:'Tetris', icon:<BuildOutlined />},
    ]},
    {label:<Link href={'/profile'}>Profile</Link>, key:'profile', icon:<UserOutlined />},
    {label:'Auth', key:'auth', icon:<UserOutlined />, children: [
      {label:<Link href={'/login'}>Login</Link>, key:'login', icon:<UserOutlined />},
      {label:<Link href={'/register'}>Register</Link>, key:'register', icon:<UserOutlined />},
      // {label:<button style={{border: 'none'}} onClick={handleLogout}>Log Out</button>, key:'logout', icon:<UserOutlined />},
    ]},
    {label:<Link href={'/about'}>About</Link>, key:'about', icon: <QuestionCircleOutlined />},
  ]

  // const items = [
  //   {label:<Link href={'/'}>Home</Link>, key:'home', icon: <HomeOutlined />},
    
  //   {label:<Link href={'/minesweeper'}>Minesweeper</Link>,key:'Minesweeper', icon: <FlagOutlined />  },
  //   {label:<Link href={'/sudoku'}>Sudoku</Link>,key:'Sudoku', icon:<NumberOutlined />},
  //   {label:<Link href={'/tetris'}>Tetris</Link>,key:'Tetris', icon:<BuildOutlined />},
  //   {label:<Link href={'/profile'}>Profile</Link>, key:'profile', icon:<UserOutlined />},
    
  //   // {label:<Link href={'/login'}>Login</Link>, key:'login', icon:<UserOutlined />},
  //   // {label:<Link href={'/register'}>Register</Link>, key:'register', icon:<UserOutlined />},
  //   // {label:<button style={{border: 'none'}} onClick={handleLogout}>Log Out</button>, key:'logout', icon:<UserOutlined />},
    
  //   {label:<Link href={'/about'}>About</Link>, key:'about', icon: <QuestionCircleOutlined />},
  // ]

  return (
    <Menu mode='horizontal' items={currentUser !== null ? loggedInItems : loggedOutItems} />
  )
}

export default NavBar