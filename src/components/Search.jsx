import React from 'react'

export const Search = ({search, searchInput, handleSearch}) => {
  return (
    <>
        <input 
        placeholder='Search your fav character'
        className=' py-1 px-2 ml-3 w-1/3 mt-2 rounded-md justify-center border-4 border-deep-purple-space dark:border-cyan-400 focus:ring-0'
        type="text" 
        value={search}
        onChange={handleSearch}
        ref={searchInput}
      />
    </>
  )
}
