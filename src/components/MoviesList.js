import React, { useEffect, useState } from "react"
import {Movie} from "./movie.js"

export const MoviesList = (props) => {
    const [movies, setMovies] = useState([])
    console.log(props);
    const {movieslist} = props
    const films = [1, 2 , 3, 4]

    return(
        <div className="movie-container">
            {movieslist ? movieslist.map((movie) => <Movie singleMovie={movie} key={movie.id}/>) : <h3>OOPS! NO CONTENT HERE</h3>}
        </div>
    )
        
}