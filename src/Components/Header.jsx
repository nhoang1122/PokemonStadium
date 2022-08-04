import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header>
        <h2>Pokemon Stadium</h2>
        <div>
            <Link to='/'>
              <button className='nav-btn'>HOME</button>
            </Link>
            <Link to='/library'>
              <button className='nav-btn'>LIBRARY</button>
            </Link>
            <Link to='/battle'>
              <button className='nav-btn'>BATTLE</button>
            </Link>
        </div>


        {/* <button className='nav-btn'>PROFILE</button> */}
    </header>
  )
}

export default Header