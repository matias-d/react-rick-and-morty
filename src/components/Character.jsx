import React from 'react'

export const Character = ({character}) => {
  return (
    <div className='text-center card-body p-5'>
        <h3>{character.name}</h3>
        <img
        className='img-fluid rounded-pill' 
        alt={character.name}
        src={character.image}/>
        <p>{character.origin.name}</p>
     </div>
  )
}
