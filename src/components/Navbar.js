import React, { useState } from "react"
import {Link} from "react-router-dom"

export const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleChangeSearch = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    return(
        <nav>
            <div className="logo">
                <Link to="/">
                    <i className="fas fa-film fa-3x"></i>
                    <h1>MUVIZ</h1>
                </Link>
            </div>
            <div className="nav-item latest">
                <Link to="/">
                    <i className="fas fa-film fa-3x"></i>
                    <h1>LATEST</h1>
                </Link>
            </div>
            <div className="nav-item trending">
                <Link to="/trending">
                    <i className="fas fa-film fa-3x"></i>
                    <h1>TRENDING</h1>
                </Link>
            </div>
            <div className="nav-item populat">
                <Link to="/popular">
                    <i className="fas fa-film fa-3x"></i>
                    <h1>POPULAR</h1>
                </Link>
            </div>
            <div className="nav-item watchlist">
                <Link to="/watchlist">
                    <i className="fas fa-film fa-3x"></i>
                    <h1>WATCHLIST</h1>
                </Link>
            </div>
            <div className="nav-item watched">
                <Link to="/watched">
                    <i className="fas fa-film fa-3x"></i>
                    <h1>WATCHED</h1>
                </Link>
            </div>

            <div>
                <input type="text" value={searchTerm} onChange={handleChangeSearch} className="search" />
            </div>
        </nav>
    )
}