import React, { useEffect, useContext } from "react"
import {GlobalContext} from "./context"

import {MoviesList} from "./MoviesList"

export const LatestList = () => {
    const {fetchMovies, latestMovies, isLoadingData} = useContext(GlobalContext)
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    
    // const url = ` https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`

    useEffect(() => {
        fetchMovies(url, 'SET_LATEST_MOVIES')
    }, [latestMovies])

    return(
        <div>
            <h1>Latest</h1>
            <h3>Keep up with the latest releases</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={latestMovies}/>}       
        </div>
    )
}