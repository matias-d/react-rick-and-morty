
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CharacterDetails } from './pages/CharacterDetails'
import { HomePage } from './pages/HomePage'
import './App.css'

export const App = () => {
  return (
    <div className='text-white bg-dark'>
      <Routes>
        <Route path='/react-rick-and-morty' element={<HomePage/>}/>
        <Route path='/react-rick-and-morty/characters/:id' element={<CharacterDetails/>}/>
      </Routes>
    </div>
  )
}
