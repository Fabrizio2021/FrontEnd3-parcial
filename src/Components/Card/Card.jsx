import React from 'react'
import './Card.css'

const Card = ({mascota}) => {
  return (
    <div className='card'>
      <h1>Mi nombre  {mascota.nombre} </h1>
      <h2>Mi raza  {mascota.raza}</h2>
      <h2>Tengo {mascota.edad} años</h2>
    </div>
  )  
}

export default Card;
