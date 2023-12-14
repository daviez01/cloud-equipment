import './Testimonial.scss'
import arrow from '../../Asset/Arrow 4.png'
import quotes from '../../Asset/left-quote 1.png'
import line from '../../Asset/Line 6.png'
import director1 from '../../Asset/Ellipse 18.png'
import director2 from '../../Asset/Ellipse 19.png'
import director3 from '../../Asset/Ellipse 20.png'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className='testy'>
        <p><img src={arrow} alt="" /> Our Client</p>
        <h1>Testimonial</h1>    
        <div className='quotes'>
          <img src={quotes} alt="" />
          <p>When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website. By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team.</p>
        </div>
      </div>
      <div>
        <img src={line} alt="" />
      </div>
      <div className="directors">
        <div className='director'>
            <img src={director1} alt="" />
            <div>
                <h3>Cha Ji-Hun</h3>
                <p>Co-founder of Forpeople</p>
            </div>
        </div>
        <div className='director'>
            <img src={director2} alt="" />
            <div>
                <h3>Rutherford Brannan</h3>
                <p>Design director of Perfect Illustration</p>
            </div>
        </div>
        <div className='director'>
            <img src={director3} alt="" />
            <div>
                <h3>Henry Itondo</h3>
                <p>Co-founder of Source DS</p>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Testimonial
