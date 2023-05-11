import React from "react";
import "./Navbar.css";
import LandingPage from "../Portfolio/LandingPage";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className="color">
        <nav class="navbar navbar-expand-sm ">
            <a class="navbar-brand" href="/LandingPage">

                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="45" fill="currentColor" class="bi bi-house-door justify-left" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg></a>
            <a class="nav-link" href="#"><h2>Portfolio Manager</h2></a>
            </nav>
        </nav>


    )
}

export default Navbar;