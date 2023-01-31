import React, { useContext} from 'react'

import { Character } from "../components/Character"

import { useApiReducer} from '../hooks/reducer/useApiReducer';


export const Characters = ({data}) => {
  const { dispatch, favourites} = useApiReducer();
  const setFavorite = (favourite) => {
    dispatch({ type: 'ADD_TO_FAV', payload: favourite})
    // console.log(favourites);
  }

  const unsetFavorite = (favourite) => {
    dispatch({ type: 'REM_TO_FAV', payload: favourite})
  }
  
  return (
    
    <>
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   md:p-24 gap-8 '>
          
          
          {
            // It is EXTREMELY IMPORTANT, inside the map function, after the arrow fuction return inside  ()
            // Otherwise it won't render
          data.map(character => (
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
      </div>
    </>
  )
}
