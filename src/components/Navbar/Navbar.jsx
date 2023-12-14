import './Navbar.scss'
import logo from '../../Asset/Logo 1.png'
import Buttons from '../Button/Button'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <div className='right'>
        <div className='links'>
            <a href="">Product</a>
            <a href="" className='green'>Company</a>
            <a href="">Resources</a>
        </div>
        <div className="login">
            <a href="">Login</a> 
            <Buttons text="Become an Investor" width="200px" height="40px" color="#54D4BD"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
