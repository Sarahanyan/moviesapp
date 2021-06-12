import React from "react"
import {Link} from "react-router-dom"

export const Navbar = () => {
    return(
        <nav className="nav-menu">
            <div className="nav-item latest">
                <Link to="/">
                    <h4>LATEST</h4>
                </Link>
            </div>
            <div className="nav-item trending">
                <Link to="/trending">
                    <h4>TRENDING</h4>
                </Link>
            </div>
            <div className="nav-item popular">
                <Link to="/popular">
                    <h4>POPULAR</h4>
                </Link>
            </div>
            <div className="nav-item toprated">
                <Link to="/toprated">
                    <h4>TOP RATED</h4>
                </Link>
            </div>
            <div className="nav-item watchlist">
                <Link to="/watchlist">
                    <h4>WATCHLIST</h4>
                </Link>
            </div>
            <div className="nav-item watched">
                <Link to="/watched">
                    <h4>WATCHED</h4>
                </Link>
            </div>
        </nav>
    )
}