import React, { useState, useContext } from "react"
import {Link} from "react-router-dom"
import { GlobalContext } from "./context"

export const Navbar = () => {
    const {searchTerm, setSearchTerm} = useContext(GlobalContext)
    // const [searchTerm, setSearchTerm] = useState("")

    const handleChangeSearch = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
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
                <Link to="/search">
                    <input type="text" value={searchTerm} onChange={handleChangeSearch} className="search" />
                </Link>
            </div>
        </nav>
    )
}