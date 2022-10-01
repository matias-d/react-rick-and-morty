import React from 'react'
import { Link } from 'react-router-dom'

export const Character = ({character}) => {
  return (
    <div className='text-center card-body p-5'>
    <Link to={'/react-rick-and-morty/characters/' + character.id}>
        <img
        className='img-fluid rounded-pill imgConteiner' 
        alt={character.name}
        src={character.image}/>
        <h3>{character.name}</h3>
        <p>{character.origin.name}</p>
    </Link>
     </div>
  )
}
