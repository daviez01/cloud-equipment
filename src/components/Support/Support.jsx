import React from 'react'
import supportImage from '../../Asset/Col.png'
import Buttons from '../Button/Button'
import check from '../../Asset/check.png'

const Support = () => {
  return (
    <div className='support'>
        <div className="left">
            <img src={supportImage} alt="" />
        </div>
        <div className="right">
            <h1>Cloud Equipment Support</h1>
            <p>Other VAS including maintenance, insurance, repair, marketing/branding etc</p>
            <ul>
                <li> <img src={check} alt="" />Lorem ipsum dolor sit amet consectetur!</li>
                <li> <img src={check} alt="" />Lorem ipsum dolor sit mug.</li>
                <li> <img src={check} alt="" />orem ipsum dolor sit amet conse!</li>
            </ul>
            <div className="button-group">
                <Buttons text="Get Started" />
                <Buttons text="Know More" />
            </div>
        </div>     
    </div>
  )
}

export default Support
