import React, { useEffect, useState } from "react"
import {MoviesList} from "./MoviesList"

export const TrendingList = () => {
    const [trendingList, setTrendingList] = useState([])
    const fetchTrending = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        const movieData = await response.json()
        console.log(movieData);
        setTrendingList(movieData.results)
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return(
        <div>
            <h1>Trending</h1>
            <h3>Movies everyone is talking about this week</h3>
            <MoviesList movieslist={trendingList}/>
        </div>
    )
}