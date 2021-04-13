import React, {useEffect, useReducer, useState} from "react"
import AppReducer from "./AppReducer"

const initialState = {
    popularMovies: [],
    trendingMovies: [],
    latestMovies: [],
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
}

export const GlobalContext = React.createContext()

export const GlobalContextProvider = ({children}) => {
    const [isLoadingData, setIsLoadingData] =  useState(false)
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const fetchMovies = async (url, actionForMovieType) => {
        setIsLoadingData(true)
        const response = await fetch(url)
        const movieData = await response.json()
        dispatch({type: actionForMovieType, payload: movieData.results})
        setIsLoadingData(false)
    }

    const addToWatchList = (movie) => {
        dispatch({type:'ADD_TO_WATCHLIST', payload: movie})
    }

    const addToWatchedList = (movie) => {
        dispatch({type:'ADD_TO_WATCHEDLIST', payload: movie})
    }

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        localStorage.setItem("watched", JSON.stringify(state.watched))

    }, [state])

    return(
        <GlobalContext.Provider value={{
            fetchMovies,
            addToWatchList,
            addToWatchedList,
            isLoadingData,
            popularMovies: state.popularMovies,
            trendingMovies: state.trendingMovies,
            latestMovies: state.latestMovies,
            watchlist: state.watchlist,
            watched: state.watched,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}