import React from 'react'
import './header.scss'
import logo from '../assets/logo.svg'

const Header = () => {
  return <header className='header'>
    <div className='logoCont'>
      <a className='logo' href='./'><img src={logo} alt='logo' /></a>
    </div>
    <a className='links' href='./'>About</a>
    <a className='links' href='./'>Contact Us</a>
    <a className='links active' href='./'>Login/Signup</a>
  </header>
}

export default Header;