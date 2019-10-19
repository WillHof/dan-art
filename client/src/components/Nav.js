import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/">Dan's Art</a>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className={window.location.pathname === "" ? "nav-item active" : "nav-item"}>
                                <Link to="/" className="nav-link">
                                    Home
                        </Link>
                            </li>
                            <li className={window.location.pathname === "/About" ? "nav-item active" : "nav-item"}>
                                <Link to="/About" className="nav-link">
                                    About the Artist
                        </Link>
                            </li>
                            <li className={window.location.pathname === "/Paintings" ? "nav-item active" : "nav-item"}>
                                <Link to="/Paintings" className="nav-link">
                                    Paintings
                        </Link>
                            </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
