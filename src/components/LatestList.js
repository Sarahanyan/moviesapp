import React, { useEffect, useState } from "react"
import {MoviesList} from "./MoviesList"

export const LatestList = () => {
    const [latestList, setLatestList] = useState([])
    const fetchLatest = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
        const movieData = await response.json()
        console.log(movieData);
        setLatestList(movieData.results)
    }

    useEffect(() => {
        fetchLatest()
    }, [])

    return(
        <div>
            <h1>Latest</h1>
            <h3>Keep up with the latest releases</h3>
            <MoviesList movieslist={latestList}/>
        </div>
    )
}