import React from 'react'
import logo from '../../Asset/Logo 1.png'
import Buttons from '../Button/Button'

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <div>
        <div className='links'>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </div>
        <div className="login">
            <a href="">Login</a>
            <Buttons text="Become an Investor" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
