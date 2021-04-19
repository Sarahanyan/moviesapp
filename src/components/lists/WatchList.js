import React, {useContext} from "react"
import { GlobalContext } from "../context"
import {MoviesList} from "./MoviesList"

export const WatchList = () => {
    const {watchlist} = useContext(GlobalContext)
    return(
        <div>
            <h1>WatchList</h1>
            <h3>Keep track of the movies you want to watch here</h3>
            <MoviesList movieslist={watchlist}/>
        </div>
    )
}