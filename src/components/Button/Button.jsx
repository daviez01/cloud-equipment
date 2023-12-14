import './Button.scss'

const Buttons = ({text, color, onClick, width, height}) => {
  return (
    <button
      style={{ backgroundColor: color, padding: "10px 20px", borderRadius: "5px", width: width, height: height}}
      onClick={onClick}
      className='btn'
    >
      {text}
    </button>
  )
}

export default Buttons
