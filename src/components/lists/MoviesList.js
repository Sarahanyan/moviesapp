import React, { useEffect, useState } from "react"
import {MovieCard} from "../moviecard"

export const MoviesList = (props) => {
    const {movieslist} = props

    return(
        <div className="movies-list-container">
            {movieslist ? movieslist.map((movie) => <MovieCard singleMovie={movie} key={movie.id}/>) : <h3>OOPS! NO CONTENT HERE</h3>}
        </div>
    )
        
}