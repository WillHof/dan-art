import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-white">

                    <a className="navbar-brand" href="/">Dan's Art</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {/* <li className={window.location.pathname === "" ? "nav-item active" : "nav-item"}>
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li> */}
                            <li className={window.location.pathname === "/Paintings" ? "nav-item active" : "nav-item"}>
                                <Link to="/Paintings" className="nav-link">
                                    Work
                                </Link>
                            </li>
                            <li className={window.location.pathname === "/About" ? "nav-item active" : "nav-item"}>
                                <Link to="/About" className="nav-link">
                                    About the Artist
                                </Link>
                            </li>
                            {/* <li className={window.location.pathname === "/Writing" ? "nav-item active" : "nav-item"}>
                                <Link to="/Writing" className="nav-link">
                                    Writing
                                </Link>
                            </li> */}
                            <li className={window.location.pathname === "/Contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/Contact" className="nav-link">
                                    Contact
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
