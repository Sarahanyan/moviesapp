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
        <div className="movies-wrapper"> 
            <h1 className="list-title">Find any movie</h1>
            {isLoadingData ? <h2>Loading...</h2> : <>
                <h3 className="list-subtitle">{searchResultsMsg}</h3>
                <MoviesList movieslist={searchResults}/>
                </>
            }
        </div>
    )
}