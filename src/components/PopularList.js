import React, { useEffect, useState, useContext} from "react"
import { GlobalContext} from "./context"
import {MoviesList} from "./MoviesList"
import {Pages} from "./pages"

export const PopularList = () => {
    const {popularMovies, fetchMovies, isLoadingData} = useContext(GlobalContext)
    const [pageNo, setPageNo] = useState(localStorage.getItem("pagenum") ? parseInt(localStorage.getItem("pagenum")) : 1)
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNo}`
    console.log(url, "pageno", pageNo);
    console.log(typeof(pageNo.toString()));
    console.log("popular Movies in PopularlIst.js", popularMovies);

    useEffect(() => {
        fetchMovies(url, 'SET_POPULAR_MOVIES')
        localStorage.setItem("pagenum", pageNo.toString())
    }, [url])

    return(
        <div>
            <h1>Popular</h1>
            <h3>Check out the most popular movies</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={popularMovies}/>}
            <Pages pageno={pageNo} setPageNo={setPageNo} isLoadingData={isLoadingData}/>
        </div>
    )
}