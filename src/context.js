import {useReducer, userReducer} from "react"

const fetchMovies = async () => {
        const response = await fetch(url)
        const movieData = await response.json()
        return movieData
    }

const initialState = {

}

const GlobalContext = React.createContext()

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer)
}