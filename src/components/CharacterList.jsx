import React,{ useState, useEffect} from 'react'
import { Character } from './Character';


function NavPage({page, onPage}){
   return(
    <header className='d-flex justify-content-between align-items-center'>
        <button 
        onClick={() => onPage(page - 1) }
        className='btn btn-primary btn-s'>
        Previous Page
        </button>

        <p className='font-weight-bold'>page {page}</p>    

        <button 
        onClick={() => onPage(page + 1)}
        className='btn btn-primary btn-s'>
        Next Page
        </button> 
    </header>   
   ) 
}


export const CharacterList = () => {

    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData(){
          const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    
          const data = await response.json()
            
          setCharacter(data.results)
          setLoading(false)
        }
    
        fetchData()
      }, [page]);

  return (
    <div className='container'>

    <NavPage page={page} onPage={setPage}/>

        {
            loading ? <h1>Loading...</h1>
            : <div className='row'>
                {
                character.map(character =>{
                    return(
                        <div className='col-md-4' key={character.id}>
                            <Character character={character}/>
                        </div>
                    )
                })
                }
            </div>
        }
        
    <NavPage page={page} onPage={setPage}/>    
    </div>
  )
}
