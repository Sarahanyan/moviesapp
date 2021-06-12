import React, { useEffect, useContext, useState} from "react"
import {GlobalContext} from "../context"
import {MoviesList} from "./MoviesList"
import {Pages} from "../pagination"

export const LatestList = () => {
    const {fetchMovies, latestMovies, isLoadingData} = useContext(GlobalContext)
    const [pageNo, setPageNo] = useState(localStorage.getItem("pagenum") ? parseInt(localStorage.getItem("pagenum")) : 1)
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNo}`
        console.log(url);
        console.log("latest Movies in latestlIst.js", latestMovies);
  
    useEffect(() => {
        let mounted = true
        if (mounted) {
            fetchMovies(url, 'SET_LATEST_MOVIES')
            localStorage.setItem("pagenum", pageNo.toString())
        }

        return () => {
            mounted = false
        }
    }, [url])

    return(
        <div className="movies-wrapper">
            <h1 className="list-title">Latest</h1>
            <h3 className="list-subtitle">Keep up with the latest releases</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={latestMovies}/>}   
            <Pages pageno={pageNo} setPageNo={setPageNo} isLoadingData={isLoadingData}/>
    
        </div>
    )
}