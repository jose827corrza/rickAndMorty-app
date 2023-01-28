import React from 'react'

import { Character } from "../components/Character"

export const Characters = ({data}) => {
  return (
    
    <div className='grid grid-cols-2 md:grid-cols-4 p-24 gap-8 '>
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
                />
          ))
            }
      </div>
  )
}
