import './Invest.scss'
import React from 'react'
import medicaldoctor from '../../Asset/medical-doctor.png'
import Buttons from '../Button/Button'

const Invest = () => {
  return (
    <div className='invest'>
      <div className="left">
        <h1>Invest in Medical equipment for African healthcare</h1>
        <p>We provide African healthcare facilities with cutting-edge medical equipment to provide the best quality of care to their patients - with financing, maintenance and support.</p>
        <Buttons text="Get Started" />
        <Buttons text="Know More" />
      </div>
      <div className="right">
        <img src={medicaldoctor} alt="" />
      </div>
    </div>
  )
}

export default Invest
