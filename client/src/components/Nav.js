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
                            <li className="nav-item active">
                                <Link to="/Home" className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
                                    Home
                        </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/About" className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                                    About the Artist
                        </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Paintings" className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>
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
