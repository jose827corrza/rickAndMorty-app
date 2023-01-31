import { createContext } from 'react'
import { useApiReducer } from './useApiReducer';

const ApiContext = createContext();

function ApiProvider() {
    const { favourites, dispatch } = useApiReducer();

    return (
        <ApiContext.Provider value={{
            favourites,
            dispatch
        }}>
            {props.children}
        </ApiContext.Provider>
    )
}

export {ApiContext, ApiProvider}