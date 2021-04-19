import React, { useEffect, useContext, useState } from "react"
import {GlobalContext} from "./context"
import {MoviesList} from "./MoviesList"
import {Pages} from "./pages"

export const TopRatedList = () => {
    const {fetchMovies, topRatedMovies, isLoadingData} = useContext(GlobalContext)
    const [pageNo, setPageNo] = useState(localStorage.getItem("pagenum") ? parseInt(localStorage.getItem("pagenum")) : 1)
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNo}`
        console.log(url);

    console.log("toprated Movies in topratedlIst.js", topRatedMovies);


    useEffect(() => {
        fetchMovies(url, 'SET_TOPRATED_MOVIES')
        localStorage.setItem("pagenum", pageNo.toString())
    }, [])

    return(
        <div>
            <h1>TOP RATED MOVIES</h1>
            <h3>These movies have the highest rating</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={topRatedMovies}/>}
            <Pages pageno={pageNo} setPageNo={setPageNo} isLoadingData={isLoadingData}/>      
        </div>
    )
}