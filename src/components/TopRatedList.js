import React, { useEffect, useContext } from "react"
import {GlobalContext} from "./context"

import {MoviesList} from "./MoviesList"

export const TopRatedList = () => {
    const {fetchMovies, topRatedMovies, isLoadingData} = useContext(GlobalContext)
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

    useEffect(() => {
        fetchMovies(url, 'SET_TOPRATED_MOVIES')
    }, [topRatedMovies])

    return(
        <div>
            <h1>TOP RATED MOVIES</h1>
            <h3>These movies have the highest rating</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={topRatedMovies}/>}       
        </div>
    )
}