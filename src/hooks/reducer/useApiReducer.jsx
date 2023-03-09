import React, { useReducer } from "react";

const initialState = {
    favourites : []
  }
  
  function useApiReducer() {
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
        case 'REM_TO_FAV':
          if(state.favourites.find(character => character.id === action.payload.id)){
            let favIndex = state.favourites.findIndex(character => character.id === action.payload.id)
            const test = state.favourites.splice(favIndex, 1)
            return {
              ...state,
              favourites: [...state.favourites]
            }
          }
        default:
            return state;
          }
        }
        
    const [favourites, dispatch] = useReducer(favouriteReducer, initialState);
    return {
      favourites,
      dispatch,
      // favouriteReducer,
    }
  }

  

  export { useApiReducer };