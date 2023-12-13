import './Button.scss'

const Buttons = ({text, color, onClick}) => {
  return (
    <button
      style={{ backgroundColor: color, padding: "10px 20px", borderRadius: "5px" }}
      onClick={onClick}
      className='btn'
    >
      {text}
    </button>
  )
}

export default Buttons
