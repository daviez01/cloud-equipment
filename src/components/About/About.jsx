import './About.scss'
import medlab from '../../Asset/med lab.png'
import Arrow from '../../Asset/Arrow 4.png'

const About = () => {
  return (
    <div className='about'>
      <div className="left">
        <img src={medlab} alt="" />
      </div>
      <div className="right">
        <span><img src={Arrow} alt="" /> About Us</span>
        <h1>Changing the View of Medical Equipment Finanzing.</h1>
        <p>We provide African healthcare facilities with cutting-edge medical equipment to provide the best quality of care to their patients - with financing, maintenance and support.</p>
      </div>
    </div>
  )
}

export default About
