import React, { useEffect, useContext, useState } from "react"
import {GlobalContext} from "../context"
import {MoviesList} from "./MoviesList"
import {Pages} from "../pagination"

export const TopRatedList = () => {
    const {fetchMovies, topRatedMovies, isLoadingData} = useContext(GlobalContext)
    const [pageNo, setPageNo] = useState(localStorage.getItem("pagenum") ? parseInt(localStorage.getItem("pagenum")) : 1)
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNo}`
        console.log(url);

    console.log("toprated Movies in topratedlIst.js", topRatedMovies);


    useEffect(() => {
        let mounted = true
        if(mounted){
            fetchMovies(url, 'SET_TOPRATED_MOVIES')
            localStorage.setItem("pagenum", pageNo.toString())
        }

        return () => mounted=false
        }, [url])

    return(
        <div className="movies-wrapper">
            <h1 className="list-title">Top Rated Movies</h1>
            <h3 className="list-subtitle">These movies have the highest rating</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={topRatedMovies}/>}
            <Pages pageno={pageNo} setPageNo={setPageNo} isLoadingData={isLoadingData}/>      
        </div>
    )
}