import React, { useState, useContext } from "react"
import {Link} from "react-router-dom"
import { GlobalContext } from "./context"
import { SearchForm } from "./searchform"

export const Navbar = () => {
    const {searchTerm, setSearchTerm, fetchMovies} = useContext(GlobalContext)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    console.log("in Navbar searchterm:", searchTerm);
    // const [searchTerm, setSearchTerm] = useState("")

    const handleChangeSearch = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (searchquery) => {
        fetchMovies(url, 'SET_MOVIE_SEARCH_RESULTS')
    }

    return(
        <nav>
            <div className="logo">
                <Link to="/">
                    <i className="fas fa-film fa-3x"></i>
                    <h4>MUVIZ</h4>
                </Link>
            </div>
            <div className="nav-item latest">
                <Link to="/">
                    <i className="fas fa-film fa-3x"></i>
                    <h4>LATEST</h4>
                </Link>
            </div>
            <div className="nav-item trending">
                <Link to="/trending">
                    <i className="fas fa-film fa-3x"></i>
                    <h4>TRENDING</h4>
                </Link>
            </div>
            <div className="nav-item popular">
                <Link to="/popular">
                    <i className="fas fa-film fa-3x"></i>
                    <h4>POPULAR</h4>
                </Link>
            </div>
            <div className="nav-item toprated">
                <Link to="/toprated">
                    <i className="fas fa-film fa-3x"></i>
                    <h4>TOP RATED</h4>
                </Link>
            </div>
            <div className="nav-item watchlist">
                <Link to="/watchlist">
                    <i className="fas fa-film fa-3x"></i>
                    <h4>WATCHLIST</h4>
                </Link>
            </div>
            <div className="nav-item watched">
                <Link to="/watched">
                    <i className="fas fa-film fa-3x"></i>
                    <h4>WATCHED</h4>
                </Link>
            </div>

            <div>
                {/* <Link to="/search"> */}

                {/* <SearchForm /> */}
                {/* </Link> */}
                {/* <Link to="/search">
                    <form method="GET" onSubmit={(event) => {
                        event.preventDefault()
                        handleSubmit(searchTerm)}}>
                        <input type="text" value={searchTerm} onChange={handleChangeSearch} className="search" />
                        <button>search</button>
                    </form>
                </Link> */}
            </div>
        </nav>
    )
}