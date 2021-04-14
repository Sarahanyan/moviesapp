import React, { useEffect, useContext } from "react"
import {GlobalContext} from "./context"
import {MoviesList} from "./MoviesList"


export const TrendingList = () => {
    const {fetchMovies, trendingMovies, isLoadingData} = useContext(GlobalContext)
    const url=`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

    useEffect(() => {
        fetchMovies(url, 'SET_TRENDING_MOVIES')
    }, [trendingMovies])

    return(
        <div>
            <h1>Trending</h1>
            <h3>Movies everyone is talking about this week</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={trendingMovies}/>}       

            
        </div>
    )
}