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
        <div>
            <Link to="/search">
                <form method="GET" onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmit(searchTerm)}}>
                    <input type="text" value={searchTerm} onChange={handleChangeSearch} className="search" />
                    <button type="submit" onClick={(event) => {
                    event.preventDefault()
                    handleSubmit(searchTerm)}}>search</button>
                </form>
            </Link>
        </div>
    )
}