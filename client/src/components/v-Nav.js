import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Vnav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-white quicksand" id="VNav">
                    <a className="navbar-brand" id="nBrand" href="/">
                        <div className="quicksand">DAN HOFSTADTER</div>
                        <div className="baskerville"><i>p a i n t i n g s</i></div>
                    </a>

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="">
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
                                <Link to="/Paintings?category=SmallAbstractions" className="dropdown-item">Small Abstractions</Link>
                                <Link to="/Paintings?category=LargeAbstractions" className="dropdown-item" >Large Abstractions</Link>
                                <Link to="/Paintings?category=EarlyWork" className="dropdown-item" >Early Work <i>(Pre-1990)</i></Link>
                                <Link to="/Paintings?category=MonotypesDrawings" className="dropdown-item" >Drawings</Link>
                                <Link to="/Paintings?category=InstallationViews" className="dropdown-item" >Installation Views</Link>
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
                </nav>
            </div>
        )
    }
}

export default Vnav
