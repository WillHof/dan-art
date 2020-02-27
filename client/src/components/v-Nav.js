import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Vnav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-white" id="VNav">
                    <a className="navbar-brand" id="nBrand" href="/">Dan's Art</a>

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="">
                        <li className={window.location.pathname === "" ? "nav-item active" : "nav-item"}>
                            <Link to="/" className="nav-link">
                                Home
                                </Link>
                        </li>
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
