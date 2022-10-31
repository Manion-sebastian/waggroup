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
  }, [])

  const handleLogout = async () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setCurrentUser(null)
      await router.push('/')
    }
  }


  // w nestled elements
  // const items = [
  //   {label:<Link href={'/'}>Home</Link>, key:'home', icon: <HomeOutlined />},
  //   {label:'Games', key:'games', icon: <MenuOutlined />, children:[
  //     {label:<Link href={'/minesweeper'}>Minesweeper</Link>,key:'Minesweeper', icon: <FlagOutlined />  },
  //     {label:<Link href={'/sudoku'}>Sudoku</Link>,key:'Sudoku', icon:<NumberOutlined />},
  //     {label:<Link href={'/tetris'}>Tetris</Link>,key:'Tetris', icon:<BuildOutlined />},
  //   ]},
  //   {label:<Link href={'/profile'}>Profile</Link>, key:'profile', icon:<UserOutlined />},
  //   {label:'Auth', key:'auth', icon:<UserOutlined />, children: [
  //     {label:<Link href={'/login'}>Login</Link>, key:'login', icon:<UserOutlined />},
  //     {label:<Link href={'/register'}>Register</Link>, key:'register', icon:<UserOutlined />},
  //     {label:<button style={{border: 'none'}} onClick={handleLogout}>Log Out</button>, key:'logout', icon:<UserOutlined />},
  //   ]},
  //   {label:<Link href={'/about'}>About</Link>, key:'about', icon: <QuestionCircleOutlined />},
  // ]

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

  // test
  // const items = [
  //   { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
  //   { label: 'item 2', key: 'item-2' }, // which is required
  //   {
  //     label: 'sub menu',
  //     key: 'submenu',
  //     children: [{ label: 'item 3', key: 'submenu-item-1' }],
  //   },
  // ];

  const items = [
    {label:<Link href={'/'}>Home</Link>, key:'home', icon: <HomeOutlined />},
    
    {label:<Link href={'/minesweeper'}>Minesweeper</Link>,key:'Minesweeper', icon: <FlagOutlined />  },
    {label:<Link href={'/sudoku'}>Sudoku</Link>,key:'Sudoku', icon:<NumberOutlined />},
    {label:<Link href={'/tetris'}>Tetris</Link>,key:'Tetris', icon:<BuildOutlined />},
    {label:<Link href={'/profile'}>Profile</Link>, key:'profile', icon:<UserOutlined />},
    
    {label:<Link href={'/login'}>Login</Link>, key:'login', icon:<UserOutlined />},
    {label:<Link href={'/register'}>Register</Link>, key:'register', icon:<UserOutlined />},
    {label:<button style={{border: 'none'}} onClick={handleLogout}>Log Out</button>, key:'logout', icon:<UserOutlined />},
    
    {label:<Link href={'/about'}>About</Link>, key:'about', icon: <QuestionCircleOutlined />},
  ]

  return (
    <Menu mode='horizontal' items={items} />
  )
}

export default NavBar