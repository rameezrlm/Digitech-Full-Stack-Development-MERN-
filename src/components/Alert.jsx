import React from 'react'
import '../Styles/Alert.css'
const Alert = ({url,title,description,detail}) => {
  return (
    <div className='alert'>
      <img src={url} alt="" />
      <div className="content">
        <h3>Details</h3>
        <p>{description}</p>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
    </div>
  )
}

export default Alert