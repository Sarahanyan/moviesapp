import React, {useContext, useEffect, useState} from "react"
import {MoviesList} from "./MoviesList"
import { GlobalContext } from "../context"

export const SearchList = () => {
    const {searchTerm, fetchMovies, searchResults, 
            searchResultsMsg, isLoadingData, } = useContext(GlobalContext)
    // console.log("searched Movies in searchlIst.js", searchResults);

    useEffect(() => {

    }, [searchTerm, searchResults])

    return(
        <div> 
            {isLoadingData ? <h2>Loading...</h2> : <>
                <h2>{searchResultsMsg}</h2>
                <MoviesList movieslist={searchResults}/>
                </>
            }
        </div>
    )
}