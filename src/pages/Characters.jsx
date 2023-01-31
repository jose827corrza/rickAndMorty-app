import React, { useContext, useReducer} from 'react'

import { Character } from "../components/Character"
// import { ApiContext } from '../hooks/reducer'

// import { dispatch, favourites} from '../hooks/reducer/useApiReducer';

const initialState = {
    favourites : []
  }
  
  const favouriteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAV':
          if (Array.isArray(state.favourites) && state.favourites.length){
            if (state.favourites.find(character => character.id === action.payload.id)){
              return {
                ...state
              }
            }
            return {
              ...state,
              favourites: [...state.favourites, action.payload]
            }
          } else {
            return {
              ...state,
              favourites: [action.payload]
            }
          }
        default:
          return state;
    }
  }

export const Characters = ({data}) => {
  const [favourites, dispatch] = useReducer(favouriteReducer, initialState);
  // const {
  //   favourites,
  //   dispatch,
  // } = useContext(ApiContext);
  const setFavorite = (favourite) => {
    dispatch({ type: 'ADD_TO_FAV', payload: favourite})
    // console.log(favourites);
  }
  
  return (
    
    <div className='grid grid-cols-2 md:grid-cols-4 p-24 gap-8 '>
          {
            favourites.favourites.map((favourite) => (
              <li key={favourite.id}>
                <p>{favourite.name}</p>
              </li>
            ))
          }
          
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
  )
}
