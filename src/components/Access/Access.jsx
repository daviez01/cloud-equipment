import React from 'react'
import check from '../../Asset/check.png'
import doctor from '../../Asset/doctor 1 (1).png'
import Buttons from '../Button/Button'

const Access = () => {
  return (
    <div className='access'>
        <div className="left">
            <h1>Increasing Access To Quality Life Saving Machine</h1>
            <p>We assist with financing to minimize upfront cost as well as operational and maintenance support. This helps you get the most out of the equipment and ensure the best quality care to your patients and the public </p>
            <ul>
                <li><img src={check} alt="" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio!</li>
                <li><img src={check} alt="" />Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li><img src={check} alt="" />orem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio!</li>
            </ul>
            <div className="butoon-group">
            <Buttons text="Get Started" />
            <Buttons text="Know More" />
            </div>
        </div>
        <div className="right">
            <img src={doctor} alt="" />
        </div>
      
    </div>
  )
}

export default Access
