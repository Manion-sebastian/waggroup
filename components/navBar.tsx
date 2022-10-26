import React from 'react'
import Link  from 'next/link'

type Props = {}

const NavBar = () => {
  return (
    <div>
        <Link href={'/'}>Home</Link>{" "} |
        <Link href={'/about'}>About</Link> {" "} |
        <Link href={'/auth'}>Auth</Link> {" "} |
        <Link href={'/sudokuTest'}>Sudoku</Link>
    </div>
  )
}

export default NavBar