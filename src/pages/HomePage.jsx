import React from 'react'
import { Link } from 'react-router-dom'
import { CharacterList } from '../components/CharacterList'
import { Search } from '../components/Search'

export const HomePage = () => {
  return (
    <div>
      <Link to='/react-rick-and-morty/'>
         <h1 className='text-center py-4'>Ricky and Morty - Characters</h1>
      </Link>
         <Search/>
        <CharacterList/>
    </div>
  )
}
