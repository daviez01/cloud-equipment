import './PaginatedHeader.scss'
import Button from '../Button/Button'

const PaginatedHeader = () => {
  return (
    <div className='header'>
        <div className="hero">
            <p className='p1'>INVESTORS</p>
            <h1>Invest in Medical equipment for African Healthcare and get ROI</h1>
            <p className='p2'>We provide African healthcare facilities with cutting-edge medical equipment to provide the best quality of care to their patients - with financing, maintenance and support.</p>
            <div className="btn-group">
                <Button text="Get Started" />
                <Button text="Read More" />
            </div>
        </div>
    </div>
  )
}

export default PaginatedHeader
