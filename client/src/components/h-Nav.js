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
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="collapse" data-target="#dropmenuHorizontal" aria-haspopup="true" aria-expanded="false">
                                    WORK
                            </span>
<<<<<<< HEAD
                                <div className="collapse" aria-labelledby="navbarDropdown" id="dropmenuHorizontal">
                                    <Link to="/Paintings?category=RecentWork" className={window.location.search === "?category=RecentWork" ? "dropdown-item" : "dropdown-item tgray4"}>Recent Work</Link>
                                    <Link to="/Paintings?category=SmallAbstractions" className={window.location.search === "?category=SmallAbstractions" ? "dropdown-item" : "dropdown-item tgray4"}>Small Abstractions</Link>
=======
                                <div className="collapse" aria-labelledby="navbarDropdown" id="dropmenu">
>>>>>>> 7c7e7727cd6343652bc8026db0425c410cfb96bb
                                    <Link to="/Paintings?category=LargeAbstractions" className={window.location.search === "?category=LargeAbstractions" ? "dropdown-item" : "dropdown-item tgray4"} >Large Abstractions</Link>
                                    <Link to="/Paintings?category=SmallAbstractions" className={window.location.search === "?category=SmallAbstractions" ? "dropdown-item" : "dropdown-item tgray4"}>Small Abstractions</Link>
                                    <Link to="/Paintings?category=RecentWork" className={window.location.search === "?category=RecentWork" ? "dropdown-item" : "dropdown-item tgray4"}>Recent Work</Link>
                                    <Link to="/Paintings?category=EarlyWork" className={window.location.search === "?category=EarlyWork" ? "dropdown-item" : "dropdown-item tgray4"} >Early Work <i>(1970-1990)</i></Link>
                                    <Link to="/Paintings?category=MonotypesDrawings" className={window.location.search === "?category=MonotypesDrawings" ? "dropdown-item" : "dropdown-item tgray4"} >Drawings</Link>
                                    <Link to="/Paintings?category=InstallationViews" className={window.location.search === "?category=InstallationViews" ? "dropdown-item" : "dropdown-item tgray4"} >Installation Views</Link>
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
