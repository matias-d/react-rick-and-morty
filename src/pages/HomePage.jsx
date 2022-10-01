import React from 'react'
import { CharacterList } from '../components/CharacterList'

export const HomePage = () => {
  return (
    <div>
         <h1 className='text-center py-4'>Ricky and Morty - Characters</h1>
        <CharacterList/>
    </div>
  )
}
