import React from 'react'
import winner from '../assets/about-2.jpg';
import '../styles/card.css'

const Card = ({name,image,roll,dept}) => {
  return (
    <div className='card'>
      <div className="card-body">
        <img src={image}/>
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <h5>{roll}</h5>
        <h5>{dept}</h5>
      </div>
    </div>
  )
}

export default Card
