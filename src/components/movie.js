import React, { useState } from "react"

export const Movie = ({overview,title, vote_average, backdrop_path}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    return(
        <div className="movie-card">
            <img src={imgUrl} alt={`${title} movie poster`} />
            <h3>{title}</h3>
            <span>{vote_average}</span>
            <i className="fas fa-plus"></i>
            <i className="fas fa-eye"></i>
            <p>{overview}</p>
            <button>Add to watchlist</button>
        </div>
    )
}