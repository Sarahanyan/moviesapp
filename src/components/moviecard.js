import React, {useContext, useState} from "react"
import {Link} from "react-router-dom"
import {GlobalContext} from "./context"
import {Alert} from "."

export const MovieCard = ({singleMovie}) => {
    const {id, overview,title, vote_average, backdrop_path} = singleMovie
    const imgUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    const {watchlist, watched, addToWatchList, addToWatchedList} = useContext(GlobalContext)
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
        <div className="movie-card">
                <Alert message={alertMsg} showAlert={showAlert} setShowAlert={setShowAlert}/>
                <Link to={`/movies/${id}`}>
                    <img src={imgUrl} alt={`${title} movie poster`} />
                </Link>
                <div className="movie-card-header">
                    <h3>{title}</h3>
                    <span>{vote_average}</span>
                    <div className="movie-card-btns">
                    { !inWatchList && 
                        <i className="fas fa-plus" onClick={() => handleAddToWatchList(singleMovie)}></i>
                    }
                    {(!inWatched) && 
                        <i className="fas fa-eye" onClick={() => handleAddToWatched(singleMovie)}></i>}
                    </div>
                </div>
                <p>{overview}</p>
                
            </div>
    )
}