import React, {useContext, useEffect} from "react"
import { GlobalContext } from "../context"
import {MoviesList} from "./MoviesList"

export const WatchedList = () => {
    const {watched} = useContext(GlobalContext)

    return(
        <div>
            <h1>Watched</h1>
            <h3>Movies you have already watched</h3>
            <MoviesList movieslist={watched}/>
        </div>
    )
}