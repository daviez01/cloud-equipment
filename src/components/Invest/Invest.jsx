import './Invest.scss'
import React from 'react'
import medicaldoctor from '../../Asset/medical-doctor.png'
import Buttons from '../Button/Button'

const Invest = () => {
  return (
    <div className='invest'>
      <div className="left">
        <div className="content">
          <h1><span className='green'>Invest in Medical equipment</span> for African healthcare</h1>
          <p>We provide African healthcare facilities with cutting-edge medical equipment to provide the best quality of care to their patients - with financing, maintenance and support.</p>
          <div className="btn-group">
            <Buttons text="Get Started" color="#54D4BD" />
            <Buttons text="Know More" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={medicaldoctor} alt="" />
      </div>
    </div>
  )
}

export default Invest
