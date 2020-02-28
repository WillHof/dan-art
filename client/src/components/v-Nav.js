import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Vnav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-white" id="VNav">
                    <a className="navbar-brand cLight" id="nBrand" href="/">DAN HOFSTADTER</a>

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="">
                        {/* <li className={window.location.pathname === "" ? "nav-item active" : "nav-item"}>
                            <Link to="/" className="nav-link">
                                Home
                                </Link>
                        </li> */}
                        <li className={window.location.pathname === "/Paintings" ? "nav-item dropdown-toggler active" : "nav-item dropdown-toggler"}>
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="collapse" data-target="#dropmenu" aria-haspopup="true" aria-expanded="false">
                                Work
                            </span>
                            <div className="collapse" aria-labelledby="navbarDropdown" id="dropmenu">
                                <Link to="/Paintings?SmallAbstractions" className="dropdown-item">SMALL ABSTRACTIONS</Link>
                                <Link to="/Paintings?LargeAbstractions" className="dropdown-item" >LARGE ABSTRACTIONS</Link>
                                <Link to="/Paintings?EarlyWork" className="dropdown-item" >EARLY WORK</Link>
                                <Link to="/Paintings?MonotypesDrawings" className="dropdown-item" >MONOTYPES/DRAWINGS</Link>
                                <Link to="/Paintings?InstallationViews" className="dropdown-item" >INSTALLATION VIEWS</Link>
                            </div>
                        </li>
                        <li className={window.location.pathname === "/About" ? "nav-item active" : "nav-item"}>
                            <Link to="/About" className="nav-link">
                                About the Artist
                                </Link>
                        </li>
                        <li className={window.location.pathname === "/Writing" ? "nav-item active" : "nav-item"}>
                            <Link to="/Writing" className="nav-link">
                                Writing
                                </Link>
                        </li>
                        <li className={window.location.pathname === "/Contact" ? "nav-item active" : "nav-item"}>
                            <Link to="/Contact" className="nav-link">
                                Contact
                                </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Vnav
