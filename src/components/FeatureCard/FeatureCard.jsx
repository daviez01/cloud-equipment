import './FeatureCard.scss'
import rightArrow from '../../Asset/ArrowRight.png'

const FeatureCard = ({image, title, content}) => {
  return (
    <div className='featureCard'>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{content}</p>
      <a href=""><span>Know More </span><img src={rightArrow} alt="" /></a>
    </div>
  )
}

export default FeatureCard
