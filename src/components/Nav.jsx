import React from 'react'
import NavButton from './NavButton'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><NavButton text="Home" link="/"/></li>
            <li><NavButton text="Works" link="/works"/></li>
            <li><NavButton text="Contact" link="/contact"/></li>
        </ul>
    </nav>
  )
}

export default Nav