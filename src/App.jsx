import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { Characters } from "./pages/Characters"
import { LoadingPage } from "./pages/LoadingPage"


function App() {
  const [characters , setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results)
      setTimeout(() => {
        setIsLoading(!isLoading)
      }, 1500)
      // setIsLoading(!isLoading)
    })
  },[])

  return (
    // <div className='dark:bg-slate-500 bg-gray-200 w-full h-full'> `url(${bg})`
    <div className='bg-fixed' style={{backgroundImage: 'url(/background.jpeg)'}}>
      {
        !isLoading ? (
        <>
          <Header />
          <Characters data={characters} />
        </>)
        :
        <LoadingPage />
      }
    </div>
  )
}

export default App

