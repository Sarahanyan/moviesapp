import React from "react"
import { Logo } from "./logo"

export const MobileNav = () => {
    
    const handleOpenMenu = () => {
        const menuIcon = document.querySelector(".fa-bars")
        const closeMenuIcon = document.querySelector(".fa-times")
        const menulist = document.querySelector(".nav-menu")
        menuIcon.style.display = "none"
        closeMenuIcon.style.display = "inline"
        menulist.classList.add("show")
    }

    const handleCloseMenu = () => {
        const menuIcon = document.querySelector(".fa-bars")
        const closeMenuIcon = document.querySelector(".fa-times")
        const menulist = document.querySelector(".nav-menu")
        menuIcon.style.display = "inline"
        closeMenuIcon.style.display = "none"
        menulist.classList.remove("show")
    }

    const handleShowSearch = () => {
        const searchBar = document.querySelector(".search-bar")
        searchBar.classList.add("show")
    }

    return(
        <div className="mobile-nav">
            <Logo />
            <span className="mobile-nav-icons">
                <i className="fas fa-bars fa-2x" onClick={handleOpenMenu}></i>
                <i className="fas fa-times fa-2x" onClick={handleCloseMenu}></i>
            </span>
        </div>
    )
}