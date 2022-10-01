import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const CharacterDetails = () => {


  const [character, setCharacter] = useState([]);

 const { id }  = useParams()

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

      const data = await response.json()
    
      setCharacter(data)
    }

    fetchData()
  }, [id]);

  return (
    <div>
     <Link to='/react-rick-and-morty'>
        <button className='btn btn-secondary m-4'><i class="bi bi-arrow-bar-left"></i></button>
    </Link>
        <div className='text-center'>
            <img
                className='img-fluid rounded-pill py-4'
                src={character.image}
                alt={character.name}
            />
            <h2>{character.name}</h2>
            <h4 className={character.status === 'Alive' ? 'text-success' : 'text-danger'}> Status: {character.status}</h4>
            <h5 className='text-secondary'>Specie: {character.species}</h5>
            <h6 > Gender: {character.gender}</h6>
        </div>
    </div>
  )
}
