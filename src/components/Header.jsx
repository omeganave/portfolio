import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    let text = '';

    switch (location.pathname) {
        case '/':
            text="Evan Davies - Software Developer*";
            break;
        default:
            text="Evan Davies - Software Developer";
    };

  return (
    <header>{text}</header>
  )
}

export default Header