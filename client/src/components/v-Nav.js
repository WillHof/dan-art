import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Vnav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    
                    <a className="navbar-brand" href="/">Dan's Art</a>
                   
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
                            <li className={window.location.pathname === "/Paintings" ? "nav-item active" : "nav-item"}>
                                <Link to="/Paintings" className="nav-link">
                                    Writing
                                </Link>
                            </li>
                            <li className={window.location.pathname === "/Paintings" ? "nav-item active" : "nav-item"}>
                                <Link to="/Paintings" className="nav-link">
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

export default Vnav
