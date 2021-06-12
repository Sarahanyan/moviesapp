import React, { useState, useContext } from "react"
import {Link} from "react-router-dom"
import { GlobalContext } from "./context"

export const SearchForm = () => {
    const {searchTerm, setSearchResultsMsg, setSearchTerm, fetchMovies} = useContext(GlobalContext)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    console.log("in Navbar searchterm:", searchTerm);
    // const [searchTerm, setSearchTerm] = useState("")

    const handleChangeSearch = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (searchquery) => {
        if (searchquery) {
            setSearchResultsMsg(`Search Results for ${searchTerm}`)
            fetchMovies(url, 'SET_MOVIE_SEARCH_RESULTS')
        }
    }

    return(
        <div className="search-bar">
                <form method="GET" onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmit(searchTerm)}}>
                    <span className="search-icon-cont">
                     <i className="fas fa-search fa-lg"></i>
                    </span>
                    <input type="text" value={searchTerm} onChange={handleChangeSearch} className="search" />
                    <button type="submit" onClick={(event) => {
                            event.preventDefault()
                        handleSubmit(searchTerm)}}>
                    <Link to="/search">
                        search
                    </Link>
                    </button>
                </form>
        </div>
    )
}