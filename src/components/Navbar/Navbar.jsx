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
            <a href="">Company</a>
            <a href="">Resources</a>
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
