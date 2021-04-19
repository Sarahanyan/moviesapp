import React, {useContext, useEffect} from "react"
import {MoviesList} from "./MoviesList"
import { GlobalContext } from "./context"

export const SearchList = () => {
    const {searchTerm, fetchMovies, searchResults, isLoadingData} = useContext(GlobalContext)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    console.log("searched Movies in searchlIst.js", searchResults);



    useEffect(() => {
        fetchMovies(url, 'SET_MOVIE_SEARCH_RESULTS')
    }, [])

    return(
        <div>
            <h1>Search Results</h1>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={searchResults}/>}
        </div>
    )
}