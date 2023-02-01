import { useState, useEffect} from 'react'

export const useFetchApi = (url, loadingTime, ...args) => {
    const [characters , setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if(isLoading){
          fetch(url)
          .then(response => response.json())
          .then(data => {
            setCharacters(data.results)
            setIsLoading(!isLoading)
              setTimeout(() => {
                // setIsLoading(!isLoading)
              }, loadingTime)
              // setIsLoading(!isLoading)
            })
        }
      },[...args])

    return {
        characters,
        isLoading,
        setIsLoading,
    }
}