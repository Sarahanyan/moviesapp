import React, { useEffect, useContext, useState} from "react"
import {GlobalContext} from "./context"
import {MoviesList} from "./MoviesList"
import {Pages} from "./pages"


export const LatestList = () => {
    const {fetchMovies, latestMovies, isLoadingData} = useContext(GlobalContext)
    const [pageNo, setPageNo] = useState(localStorage.getItem("pagenum") ? parseInt(localStorage.getItem("pagenum")) : 1)
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNo}`
        console.log(url);
        console.log("latest Movies in latestlIst.js", latestMovies);
  
    useEffect(() => {
        fetchMovies(url, 'SET_LATEST_MOVIES')
        localStorage.setItem("pagenum", pageNo.toString())
    }, [])

    return(
        <div>
            <h1>Latest</h1>
            <h3>Keep up with the latest releases</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={latestMovies}/>}   
            <Pages pageno={pageNo} setPageNo={setPageNo} isLoadingData={isLoadingData}/>
    
        </div>
    )
}