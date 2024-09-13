import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Menu() {
  return (
    <>
      <Header />
      <div className='menu-poster'>
        <span className='menu-text'>MENU</span>
      </div>
      <div className='menus'>
      <div className='menu'>
        <div className='menu-container'>
        <h3>ENTRANTES</h3>
        <ul className='menu-info'>
            <li>AAAAAAAAAAA</li>
            <li>AAAAAAAAAAA</li>
            <li>AAAAAAAAAAA</li>
            <li>AAAAAAAAAAA</li>
        </ul>
        </div>
        <div className='menu-container'>
        <h3>PLATO PRINCIPAL</h3>
        <ul className='menu-info-main'>
            <li>AAAAAAAAAAA</li>
            <li>AAAAAAAAAAA</li>
            <li>AAAAAAAAAAA</li>
            <li>AAAAAAAAAAA</li>
        </ul>
        </div>
        <div className='menu-container'>
        <h3>POSTRES</h3>
        <ul className='menu-info-main'>
            <li>AAAAAAAAAAA</li>
            <li>Aaaaaaaaaaa</li>
            <li>AAAAAAAAAAA</li>
            <li>AAAAAAAAAAA</li>
        </ul>
        </div>
        </div>
        <span className='price'>PVP: $24</span>
      </div>
      <Footer />
    </>
  )
}

export default Menu