import React from 'react'
import winner from '../assets/about-2.jpg';
import '../styles/card.css'

const Card = () => {
  return (
    <div className='card'>
      <div className="card-body">
        <img src={winner}/>
      </div>
      <div className="card-content">
        <h2>Vamsi Praveen</h2>
        <h5>21A91A05G5</h5>
        <h5>CSE</h5>
      </div>
    </div>
  )
}

export default Card
