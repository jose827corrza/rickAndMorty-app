import React, { useReducer } from "react";

const initialState = {
    favourites : []
  }
  
  function useApiReducer() {
    const [favourites, dispatch] = useReducer(favouriteReducer, initialState);
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

    return {
      favourites,
      dispatch,
      favouriteReducer,
    }
  }

  

  export { useApiReducer };