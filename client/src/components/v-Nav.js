import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Vnav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-white quicksand" id="VNav">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="">
                        <li className={window.location.pathname === "/Paintings" ? "nav-item dropdown-toggler active" : "nav-item dropdown-toggler"}>
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="collapse" data-target="#dropmenu" aria-haspopup="true" aria-expanded="false">
                                WORK
                            </span>
                            <div className="collapse" aria-labelledby="navbarDropdown" id="dropmenu">
                                <Link to="/Main/Paintings?category=LargeAbstractions" className={window.location.search === "?category=LargeAbstractions" ? "dropdown-item" : "dropdown-item tgray4"} >Large Abstractions</Link>
                                <Link to="/Main/Paintings?category=SmallAbstractions" className={window.location.search === "?category=SmallAbstractions" ? "dropdown-item" : "dropdown-item tgray4"}>Small Abstractions</Link>
                                <Link to="/Main/Paintings?category=RecentWork" className={window.location.search === "?category=RecentWork" ? "dropdown-item" : "dropdown-item tgray4"}>Recent Work</Link>
                                <Link to="/Main/Paintings?category=EarlyWork" className={window.location.search === "?category=EarlyWork" ? "dropdown-item" : "dropdown-item tgray4"} >Early Work <i>(1970-1990)</i></Link>
                                <Link to="/Main/Drawings" className={window.location.pathname === "/Main/Drawings" ? "dropdown-item" : "dropdown-item tgray4"} >Drawings <i>(1990-2020)</i></Link>
                                <Link to="/Main/InstallationViews" className={window.location.pathname === "/Main/InstallationViews" ? "dropdown-item" : "dropdown-item tgray4"} >Installation Views</Link>
                            </div>
                        </li>
                        <li className={window.location.pathname === "/About" ? "nav-item active" : "nav-item"}>
                            <Link to="/Main/About" className="nav-link">
                                ABOUT THE ARTIST
                                </Link>
                        </li>

                        <li className={window.location.pathname === "/Contact" ? "nav-item active" : "nav-item"}>
                            <Link to="/Main/Contact" className="nav-link">
                                CONTACT
                                </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Vnav
