import React from 'react'
import '../Styles/Seprator.css'
const Seprator = ({content}) => {
  return (
    <div className='seprator'>
        <h2>{content}</h2>
        <div className="underline"></div>
    </div>
  )
}

export default Seprator