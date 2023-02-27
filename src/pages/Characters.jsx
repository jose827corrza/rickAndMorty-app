import React, { useMemo, useState, useRef, useCallback} from 'react'

import { Character } from "../components/Character"
import { Search } from '../components/Search';

import { useApiReducer} from '../hooks/reducer/useApiReducer';
import { LoadingPage } from './LoadingPage';


export const Characters = ({data, currentPage, setCurrentPage, setIsLoading, isLoading}) => {
  const { dispatch, favourites} = useApiReducer();
  const [search, setSearch] = useState('')
  const searchInput = useRef(null);
  const setFavorite = (favourite) => {
    dispatch({ type: 'ADD_TO_FAV', payload: favourite})
    // console.log(favourites);
  }

  const unsetFavorite = (favourite) => {
    dispatch({ type: 'REM_TO_FAV', payload: favourite})
  }
  //Replaced below with useCallback
  // const handleSearch = () => {
  //   // setSearch(event.target.value)
  //   setSearch(searchInput.current.value)
  // }

  // const filteredCharacters = data.filter((character) => {
  //   return character.name.toLowerCase().includes(search.toLowerCase())
  // })

  const filteredCharacters = useMemo(() => 
    data.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase())
    })
    ,[data, search]
  )

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

  const handleCurrentPage =(sign) => {
    if(sign === '+'){
      setCurrentPage(currentPage + 1)
      setTimeout(() =>{
        setIsLoading(false)
      }, 1000)
      setIsLoading(true)
    } else if (sign === '-') {
      setCurrentPage(currentPage - 1)
      setIsLoading(true)
    }
  }

  const handleSearchPage = (event) => {
    setCurrentPage(event.target.value)
  }
  return (
    
    <>
      {/* <input 
        placeholder='Search your fav character'
        className=' py-1 px-2 ml-3 w-1/3 mt-2 rounded-md justify-center'
        type="text" 
        value={search}
        onChange={handleSearch}
        ref={searchInput}
      /> */}
      <div className=' flex align-middle'>
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
      <p className='py-3 pl-3 text-white'>Pagina Actual</p>
      {currentPage > 1 ? 
        <button 
          className='dark:bg-cyan-400 bg-deep-purple-space rounded-md mx-2 p-2 mt-2'
          onClick={() => handleCurrentPage('-')}
          >
            Prev
        </button> 
        : 
        <></>
      }
      <input 
        value={currentPage} 
        className='rounded-md mx-2 p-2 mt-2 w-10'
        onChange={() => handleSearchPage(event)}  
      />
      <button 
        className='dark:bg-cyan-400 bg-deep-purple-space rounded-md mx-2 p-2 mt-2'
        onClick={() => handleCurrentPage('+')}
        >
          Next
      </button>
      </div>

      <div className='md:grid md:grid-cols-8 md:px-8 px-4 md:gap-6 gap-4 flex overflow-x-auto'>
        {
          favourites.favourites.map((favourite) => (
            <li key={favourite.id}>
              <img className='rounded-full md:h-24 h-18 hover:opacity-50' src={favourite.image} alt="fav_img" onClick={() => unsetFavorite(favourite)}/>
              <p className='text-white'>{favourite.name}</p>
            </li>
          ))
        }
      </div>

      {/* // Here list of characters */}

      {
        !isLoading ? 
        (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   md:p-24 gap-8 '>
            
            
            {
              // It is EXTREMELY IMPORTANT, inside the map function, after the arrow fuction return inside  ()
              // Otherwise it won't render
            // data.map(character => (
            filteredCharacters.map(character => (
              <Character 
                  key={character.id} 
                  name={character.name} 
                  imgUrl={character.image}
                  status={character.status}
                  species={character.species}
                  id={character.id}
                  isFavorite={() => setFavorite(character)}
                  />
            ))
              }
        </div>)
        :
        <LoadingPage />
      }
    </>
  )
}
