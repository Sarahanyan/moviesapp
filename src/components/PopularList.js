import React, { useEffect, useState } from "react"
import {MoviesList} from "./MoviesList"

export const PopularList = () => {
    const [popularList, setPopularList] = useState([])
    const fetchPopular = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=3`)
        const movieData = await response.json()
        console.log(movieData);
        setPopularList(movieData.results)
    }

    useEffect(() => {
        fetchPopular()
    }, [])

    return(
        <div>
            <h1>Popular</h1>
            <h3>Check out the most popular movies</h3>
            <MoviesList movieslist={popularList}/>
        </div>
    )
}