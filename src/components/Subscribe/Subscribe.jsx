import React from 'react'
import Buttons from '../Button/Button'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className="container">
        <div className="heading">
            <h2>Enter your e-mail address and get started for free</h2>
            <p>Stay up to date with the most relevannt information, our new collection, news and special offer</p>
        </div>
        <div className="form">
            <input type="text" placeholder='Your email address' />
            <Buttons text="Subscribe" />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
