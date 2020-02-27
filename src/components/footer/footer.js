import React from 'react'
import './footer.scss'

import Logo from '../assets/logoTrans.svg'
const Footer = () => {
  return <footer className='footer'>
    <div className='center'><img src={Logo} alt='logo'/></div>
    <nav className='nav'>

      <ul className='ul'>
        <li><a href='./'>Information</a></li>
        <li><a href='./'>About Us</a></li>
        <li><a href='./'>Blog</a></li>
        <li><a href='./'>Contact US</a></li>
        <li><a href='./'>Press</a></li>
      </ul>

      <ul className='ul'>
        <li><a href='./'>Follow Us</a></li>
        <li><a href='./'>Facebook</a></li>
        <li><a href='./'>Instagram</a></li>
        <li><a href='./'>LinkedIn</a></li>
        <li><a href='./'>Twitter</a></li>
      </ul>

      <ul className='ul'>
        <li><a href='./'>Helpful Links</a></li>
        <li><a href='./'>Services</a></li>
        <li><a href='./'>Terms and Conditions</a></li>
        <li><a href='./'>Privacy Policy</a></li>
        <li><a href='./'>FAQ</a></li>
      </ul>

    </nav>
    <p className='copyRights center'>
      &#9400; 2020 ActivKido <br /> All Rights Reserved
    </p>
  </footer>
}

export default Footer;