import React, {useContext, useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {GlobalContext} from "./context"
import {MoviesList} from "./lists/MoviesList"
import {Alert} from "."

export const MoviePage = () => {
    const {id} = useParams()
    const {similarMovies, fetchMovies, isLoadingData, watchlist, 
                watched, addToWatchList, addToWatchedList, removeFromWatched, removeFromWatchList
                    } = useContext(GlobalContext)

    const [movie, setMovie] = useState({})
    const {overview, title, vote_average, poster_path, release_date, genres, vote_count} = movie

    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
    const similarMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
        
    const inWatchList = movie ? watchlist.find((item) => item.id === movie.id) : false
    const inWatched = movie ? watched.find((item) => item.id === movie.id) : false
    const [alertMsg, setAlertMsg] = useState("")
    const [showAlert, setShowAlert] = useState("")

    useEffect(() => {
        let mounted = true
        if (mounted) {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`).then(response => {
                return response.json()
                }
            ).then((data) => {
                console.log(data);
                setMovie(data)
                fetchMovies(similarMoviesUrl, "SET_SIMILAR_MOVIES")
            })
            
        }

        return () => mounted=false

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
    const handleAddToWatched = (movie) => {
        if (inWatched) {
            setAlertMsg("Already in watched")
            setShowAlert(true)
            console.log(alertMsg);
        }else{
            setAlertMsg("Added to watched")
            setShowAlert(true)
            console.log(alertMsg);
            addToWatchedList(movie)
        }
    }

    return(
        <div className="movie-page">
            <div className="single-movie-cont">
                <h2>{title}</h2>
                <img src={imgUrl} alt={`${title} movie poster`} />
                <div className="single-movie-details">
                    <Alert message={alertMsg} showAlert={showAlert} setShowAlert={setShowAlert}/>
                    <div className="movie-card-icons">
                        <span>
                            <i className="fas fa-star"></i>
                            <span>{vote_average}</span>
                        </span>
                        <span>
                            { !inWatchList && 
                                <i className="fas fa-plus" title="add to watch list" onClick={() => handleAddToWatchList(movie)}></i>
                            }
                            {(!inWatched) && 
                                <i className="fas fa-eye" title="add to watched list" onClick={() => handleAddToWatched(movie)}></i>
                            }
                            {inWatchList && 
                                <i className="fas fa-trash" title="remove from watch list" onClick={() => removeFromWatchList(movie)}></i>
                            }
                            {inWatched && 
                                <i className="fas fa-eye-slash" title="remove from watched list" onClick={() => removeFromWatched(movie)}></i>
                            }
                        </span>
                    </div>
                    <div className="movie-overview">
                        <p>{overview ? overview : "This movie does not have an overview"}</p>
                    </div>
                </div>
            </div>
            
            <h3>Similar Movies</h3>
            {isLoadingData ? <h2>Loading...</h2> : <MoviesList movieslist={similarMovies}/>}
        </div>
    )
}