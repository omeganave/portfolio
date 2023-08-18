import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({ text, link }) => {
  return (
    // <a href={link} className="navButton">{text}</a>
    <Link to={link} className='navButton'>{text}</Link>
  )
}

export default NavButton