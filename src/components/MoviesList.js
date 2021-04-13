import React, { useEffect, useState } from "react"
import {Movie} from "./movie.js"

export const MoviesList = (props) => {
    const [movies, setMovies] = useState([])
    console.log(props);
    const {movieslist} = props
    const films = [1, 2 , 3, 4]
    // const fetchMovies = async () => {
    //     const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=3`)
    //     const movieData = await response.json()
    //     console.log(movieData);
    //     setMovies(movieData.results)
    // }

    useEffect(
        () => {
            // setMovies(films)
            // fetchMovies()
        },[])

    return(
        <div className="movie-container">
            {movieslist ? movieslist.map((movie) => <Movie {...movie} key={movie.id}/>) : <h3>OOPS! NO CONTENT HERE</h3>}
        </div>
    )
        
}