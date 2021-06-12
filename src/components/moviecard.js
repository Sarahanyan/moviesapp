import React, {useContext, useState} from "react"
import {Link} from "react-router-dom"
import {GlobalContext} from "./context"
import {Alert} from "."

export const MovieCard = ({singleMovie}) => {
    const {id, overview,title, vote_average, backdrop_path} = singleMovie
    const imgUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    const {watchlist, watched, addToWatchList, addToWatchedList, 
            removeFromWatchList, removeFromWatched} = useContext(GlobalContext)
    const inWatchList = watchlist.find((item) => item.id === singleMovie.id)
    const inWatched = watched.find((item) => item.id === singleMovie.id)
    const [alertMsg, setAlertMsg] = useState("")
    const [showAlert, setShowAlert] = useState("")

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
        <div className="movie-card" >
            <div className="movie-card-header">
                <Alert message={alertMsg} showAlert={showAlert} setShowAlert={setShowAlert}/>
                <Link to={`/movies/${id}`}>
                    <div className="movie-img">
                        <img src={imgUrl} alt={`${title} movie poster`} />
                    </div>
                </Link>
                    <div className="movie-card-icons">
                        <span>
                            <i className="fas fa-star"></i>
                            <span>{vote_average}</span>
                        </span>
                        <span>
                            { !inWatchList && 
                                <i className="fas fa-plus" title="add to watch list" onClick={() => handleAddToWatchList(singleMovie)}></i>
                            }
                            {(!inWatched) && 
                                <i className="fas fa-eye" title="add to watched list" onClick={() => handleAddToWatched(singleMovie)}></i>
                            }
                            {inWatchList && 
                                <i className="fas fa-trash" title="remove from watch list" onClick={() => removeFromWatchList(singleMovie)}></i>
                            }
                            {inWatched && 
                                <i className="fas fa-eye-slash" title="remove from watched list" onClick={() => removeFromWatched(singleMovie)}></i>
                            }
                        </span>
                    </div>
                    <h4>{title}</h4>
            </div>
            <div className="movie-description">
                <p>{overview ? overview : "This movie does not have an overview"}</p>
            </div>  
        </div>
    )
}