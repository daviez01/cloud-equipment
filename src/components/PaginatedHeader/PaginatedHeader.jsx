import React from 'react'
import image1 from '../../Asset/Image.png'
import Button from '../Button/Button'

const PaginatedHeader = () => {
  return (
    <>
        <div className='paginatedHeader'>
        <img src={image1} alt="" />
        </div>
        <div className="hero">
            <p>INVESTORS</p>
            <h1>Invest in Medical equipment for African Healthcare and get ROI</h1>
            <p>We provide African healthcare facilities with cutting-edge medical equipment to provide the best quality of care to their patients - with financing, maintenance and support.</p>
            <div className="btn-group">
                <Button text="Get Started" />
                <Button text="Read More" />
            </div>
        </div>
    </>
  )
}

export default PaginatedHeader
