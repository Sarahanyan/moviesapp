import React, {useContext, useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {GlobalContext} from "./context"
import {MoviesList} from "./MoviesList"
import {Alert} from "."

export const MoviePage = () => {
    const {id} = useParams()
    const {similarMovies, fetchMovies, isLoadingData} = useContext(GlobalContext)
    const [movie, setMovie] = useState({})
    const {overview, title, vote_average, poster_path, release_date, genres, vote_count} = movie
    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
    const similarMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const {watchlist, watched, addToWatchList} = useContext(GlobalContext)
    const inWatchList = movie ? watchlist.find((item) => item.id === movie.id) : false
    const inWatched = movie ? watched.find((item) => item.id === movie.id) : false
    const [alertMsg, setAlertMsg] = useState("")
    const [showAlert, setShowAlert] = useState("")

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`).then(response => {
            return response.json()
            }
        ).then((data) => {
            console.log(data);
            setMovie(data)
            fetchMovies(similarMoviesUrl, "SET_SIMILAR_MOVIES")
        })

    }, [])

    const handleAddToWatchList = (movie) => {
        if (inWatchList) {
            setAlertMsg("Already in watchlist")
            setShowAlert(true)
            console.log(alertMsg);
        }else{
            setAlertMsg("Added to watchlist")
            setShowAlert(true)
            console.log(alertMsg);
            addToWatchList(movie)
        }
    }

    return(
        <div className="movie-card">
            <Alert message={alertMsg} showAlert={showAlert} setShowAlert={setShowAlert}/>
            <img src={imgUrl} alt={`${title} movie poster`} />
            <div className="movie-card-header">
                <h3>{title}</h3>
                <span>{vote_average}</span>
                <div className="movie-card-btns">
                { !inWatchList && 
                    <i className="fas fa-plus" onClick={() => handleAddToWatchList(movie)}></i>
                }
                {(!inWatched) && <i className="fas fa-eye"></i>}
                </div>
            </div>
            <p>{overview}</p>
            
            <h3>Similar Movies</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={similarMovies}/>}
        </div>
    )
}