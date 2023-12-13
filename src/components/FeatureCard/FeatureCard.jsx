import React from 'react'
import rightArrow from '../../Asset/ArrowRight.png'

const FeatureCard = ({image, title, content}) => {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{content}</p>
      <a href=""><span>Know More <img src={rightArrow} alt="" /></span></a>
    </div>
  )
}

export default FeatureCard
