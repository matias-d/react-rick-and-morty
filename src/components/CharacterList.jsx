import React,{ useState, useEffect} from 'react'
import { useQuery } from '../hooks/useQuery';
import { Character } from './Character';

function NavPage({page, onPage}){
   return(
    <div className='d-flex justify-content-between py-4'>

        {
            page === 1 ? 
            (<button className='btn btn-primary btn-sm'
            onClick={null}
            >Previous Page</button>)
            :
            <button className='btn btn-primary btn-sm'
            onClick={() => onPage(page - 1)}
            >Previous Page</button>
        }
            <p>Page {page}</p>
            <button className='btn btn-primary btn-sm'
            onClick={() => onPage(page + 1)}
            >Next Page</button>
    </div>
   ) 
}
  
export const CharacterList = () => {

    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const query = useQuery()
    const search = query.get('search')

    useEffect(() => {
        async function fetchData(){
            const URLsearch = search ? `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=alive`
            : `https://rickandmortyapi.com/api/character?page=${page}`;

          const response = await fetch(URLsearch)
    
          const data = await response.json()
            
          setCharacter(data.results)
          setLoading(false)
        }
    
        fetchData()
      }, [page, search]);


  return (
    <div className='container'>

    <NavPage page={page} onPage={setPage}/>

        {
            loading ? <h1 className='text-center display-1'>Loading...</h1>
            : <div className='row'>
                {
                character.map(character =>{
                    return(
                        <div className='col-md-4'>
                            <Character key={character.id} character={character}/>
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
