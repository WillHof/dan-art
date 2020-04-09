import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-white">

                    <a className="navbar-brand quicksand" href="/">DAN HOFSTADTER</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse quicksand" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {/* <li className={window.location.pathname === "" ? "nav-item active" : "nav-item"}>
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li> */}
                            <li className={window.location.pathname === "/Paintings" ? "nav-item dropdown-toggler active" : "nav-item dropdown-toggler"}>
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="collapse" data-target="#dropmenu" aria-haspopup="true" aria-expanded="false">
                                    WORK
                            </span>
                                <div className="collapse" aria-labelledby="navbarDropdown" id="dropmenu">
                                    <Link to="/Paintings?category=SmallAbstractions" className={window.location.search === "?category=SmallAbstractions" ? "dropdown-item active" : "dropdown-item"}>Small Abstractions</Link>
                                    <Link to="/Paintings?category=LargeAbstractions" className={window.location.search === "?category=LargeAbstractions" ? "dropdown-item active" : "dropdown-item"} >Large Abstractions</Link>
                                    <Link to="/Paintings?category=EarlyWork" className={window.location.search === "?category=EarlyWork" ? "dropdown-item active" : "dropdown-item"} >Early Work <i>(Pre-1990)</i></Link>
                                    <Link to="/Paintings?category=MonotypesDrawings" className={window.location.search === "?category=MonotypesDrawings" ? "dropdown-item active" : "dropdown-item"} >Drawings</Link>
                                    <Link to="/Paintings?category=InstallationViews" className={window.location.search === "?category=InstallationViews" ? "dropdown-item active" : "dropdown-item"} >Installation Views</Link>
                                </div>
                            </li>
                            <li className={window.location.pathname === "/About" ? "nav-item active" : "nav-item"}>
                                <Link to="/About" className="nav-link">
                                    ABOUT THE ARTIST
                                </Link>
                            </li>
                            {/* <li className={window.location.pathname === "/Writing" ? "nav-item active" : "nav-item"}>
                                <Link to="/Writing" className="nav-link">
                                    Writing
                                </Link>
                            </li> */}
                            <li className={window.location.pathname === "/Contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/Contact" className="nav-link">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
