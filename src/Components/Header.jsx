import React from 'react'
import { Link } from 'react-router-dom'
import header from '../images/header.jpg'

function Header() {
  return (
    <div className='header'>
      <div className='header-image'>
      <span className='title-red'>COOL<span className='title-white'>-</span><span className='title-green'>MEX</span></span>
      <div className='menu'>
      <Link to= "/menu"><span>MENU</span></Link>
      <Link to= "/menu"><span>HOURS & LOCATION</span></Link>
      <Link to= "/menu"><span>OUR STORY</span></Link>
      <Link to= "/menu"><span>RESERVATIONS</span></Link>
      </div>
      </div>
    </div>
  )
}

export default Header
