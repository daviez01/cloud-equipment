import React from 'react'

const Buttons = ({text, color, onClick}) => {
  return (
    <button
      style={{ backgroundColor: color, padding: "10px 20px", borderRadius: "5px" }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Buttons
