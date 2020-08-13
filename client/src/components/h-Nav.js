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

                            <li className={window.location.pathname === "/Main/Paintings" ? "nav-item dropdown-toggler active" : "nav-item dropdown-toggler"}>
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="collapse" data-target="#dropmenuHorizontal" aria-haspopup="true" aria-expanded="false">
                                    WORK
                            </span>
                                <div className="collapse" aria-labelledby="navbarDropdown" id="dropmenuHorizontal">
                                    <Link to="/Main/Paintings?category=LargeAbstractions" className={window.location.search === "?category=LargeAbstractions" ? "dropdown-item" : "dropdown-item tgray4"} >Large Abstractions</Link>
                                    <Link to="/Main/Paintings?category=SmallAbstractions" className={window.location.search === "?category=SmallAbstractions" ? "dropdown-item" : "dropdown-item tgray4"}>Small Abstractions</Link>
                                    <Link to="/Main/Paintings?category=RecentWork" className={window.location.search === "?category=RecentWork" ? "dropdown-item" : "dropdown-item tgray4"}>Recent Work</Link>
                                    <Link to="/Main/Paintings?category=EarlyWork" className={window.location.search === "?category=EarlyWork" ? "dropdown-item" : "dropdown-item tgray4"} >Early Work <i>(1970-1990)</i></Link>
                                    {/* <Link to="/Main/Paintings?category=MonotypesDrawings" className={window.location.search === "?category=MonotypesDrawings" ? "dropdown-item" : "dropdown-item tgray4"} >Drawings</Link> */}
                                    <Link to="/Main/Paintings?category=InstallationViews" className={window.location.search === "?category=InstallationViews" ? "dropdown-item" : "dropdown-item tgray4"} >Installation Views</Link>
                                </div>
                            </li>
                            <li className={window.location.pathname === "/Main/About" ? "nav-item active" : "nav-item"}>
                                <Link to="/Main/About" className="nav-link">
                                    ABOUT THE ARTIST
                                </Link>
                            </li>
                            <li className={window.location.pathname === "/Main/Contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/Main/Contact" className="nav-link">
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
