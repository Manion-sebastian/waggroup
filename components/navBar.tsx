import React from 'react'
import Link  from 'next/link'
import { Menu } from 'antd'

type Props = {}

const NavBar = () => {

  const items = [
    {label:<Link href={'/'}>Home</Link>, key:'home'},
    {label:<Link href={'/about'}>About</Link>, key:'about'},
    {label:<Link href={'/auth'}>Login or Register</Link>, key:'authentication'},
    {label:'Games', key:'games',children:[
      {label:<Link href={'/minesweeper'}>Minesweeper</Link>,key:'Minesweeper'},
      {label:<Link href={'/sudoku'}>Sudoku</Link>,key:'Sudoku'},
      {label:<Link href={'/tetris'}>Tetris</Link>,key:'Tetris'},
    ]}
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