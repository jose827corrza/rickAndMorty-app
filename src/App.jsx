import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { Search } from "./components/Search"
import { useFetchApi } from "./hooks/useFetchApi"
import { Characters } from "./pages/Characters"
import { LoadingPage } from "./pages/LoadingPage"


function App() {
  // const [characters , setCharacters] = useState([])
  // const [isLoading, setIsLoading] = useState(true)


  // useEffect(() => {
  //     fetch('https://rickandmortyapi.com/api/character')
  //     .then(response => response.json())
  //     .then(data => {
  //         setCharacters(data.results)
  //         setTimeout(() => {
  //             setIsLoading(!isLoading)
  //           }, 1500)
  //           // setIsLoading(!isLoading)
  //         })
  //       },[])
        const [currentPage, setCurrentPage] = useState(2)
        let API = `https://rickandmortyapi.com/api/character?page=${currentPage}`
        const { characters, isLoading, setIsLoading } = useFetchApi(API, 3000, [currentPage])
  return (
    // <div className='dark:bg-slate-500 bg-gray-200 w-full h-full'> `url(${bg})`
    <>
    <Header />
    <div className='bg-fixed h-max' style={{backgroundImage: 'url(/background.jpeg)'}}>
      
        <>
          {/* <Header /> */}
          <Characters 
            data={characters} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        </>
    </div>
    </>
  )
}

export default App

