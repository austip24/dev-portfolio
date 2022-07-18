import React from 'react'
import Link from 'next/link'

interface NavbarProps {
  path: string
}

const Navbar: React.FC<NavbarProps> = ({ path }) => {
  return (
    <nav><Link href='/works'>Works</Link></nav>
  )
}

export default Navbar
