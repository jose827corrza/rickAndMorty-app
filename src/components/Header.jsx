import React, { useState } from 'react'
import { FaMoon, FaSun} from 'react-icons/fa'

export const Header = () => {
    const [isDark, setIsDark] = useState(false);

    const toogleDarkMode = () => {
        if (!isDark) {
            document.documentElement.classList.add('dark')
            console.log('activated dark mode');
            setIsDark(true);
          } else {
            document.documentElement.classList.remove('dark')
            console.log('Deactivated dark mode');
            setIsDark(false);
          }
    }
  return (
    <div className='flex justify-between px-5 bg-deep-purple-space dark:bg-cyan-500 py-4 max-w-full'>
        <h1 className='font-splineSans text-3xl text-white'>React Hooks Training</h1>
        <button
            onClick={toogleDarkMode}
        >{isDark ? <FaSun size={24} color={'#DDB947'}/> : <FaMoon size={24} color={'#1D3A73'}/>  }</button>
    </div>
  )
}
