import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

export const Search = () => {


    const [search, setSearch] = useState('');

    const query = useQuery()
    const filter = query.get('search')
    const navigate = useNavigate()

    useEffect(() => {
        setSearch(filter || '')
    }, [filter]);

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/react-rick-and-morty/?search=' + search)
    }

  return (
    <form  onSubmit={handleSubmit} className='d-flex justify-content-center'>
        <input
        onChange={(e) => setSearch(e.target.value)} 
        value={search}
        placeholder='Search Character'
        className='rounded'/>
        <button type='submit' className='btn btn-secondary border-0'><i class="bi bi-search"></i></button>
    </form>
  )
}
