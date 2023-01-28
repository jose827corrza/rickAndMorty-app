import React from 'react'

export const Character = ({name, imgUrl, status, species}) => {
  return (
    <>
        <div className="max-w-md rounded overflow-hidden shadow-lg bg-deep-purple-space hover:shadow-slate-500/50 dark:bg-cyan-500 hover:scale-105 transform-gpu transition duration-700 dark:hover:shadow-cyan-500/50">
            <img className="w-full" src={imgUrl} alt="Sunset in the mountains"/>
            <div className="px-6 py-1">
                <div className="font-splineSans text-xl mb-2 text-white">{name}</div>
                <div className={`font-splineSans text-xl mb-2 mx-2 text-white ${status !== 'Alive' ? 'inline-block bg-red-400 rounded-full px-3 py-1' : 'inline-block bg-green-400 rounded-full px-3 py-1'}`}>{status}</div>
                <div className="font-splineSans text-xl mb-2 text-white">{species}</div>
            </div>
        </div>
        {/* <div>
           <span>{status}</span> 
           <span>{species}</span> 
        </div> */}
    </>
  )
}
