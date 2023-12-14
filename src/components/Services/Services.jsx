import './Services.scss'
import houseIcon from '../../Asset/house.png'
import moneyIcon from '../../Asset/money.png'
import mail from '../../Asset/mail.png'
import gallery from '../../Asset/Gallery.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="top">
            <p className='pill'>CE Support</p>
            <h2>We're on a mission to change view of Medical Equipment Financing</h2>
            <p>Our services are designed to cater to your specific needs and goals</p>
        </div>
        <div className="buttom">
            <div className="left">
                <div className='service'>
                    <img src={houseIcon} alt="" />
                    <h3>Investment</h3>
                    <p>When unknown printer took gallery of type and</p>
                </div>
                <div className='service'>
                    <img src={moneyIcon} alt="" />
                    <h3>Secure Payment</h3>
                    <p>When unknown printer took galley of type and scrambled.</p>
                </div>
                <div className='service'>
                    <img src={mail} alt="" />
                    <h3>Messaging</h3>
                    <p>On mobile, customers can send text, or audio messages to agents, like using any messaging app</p>
                </div>
            </div>
            <div className="right">
                <img src={gallery} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Services
