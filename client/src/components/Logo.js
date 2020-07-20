import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Logo extends Component {
    render() {
        return (
            <div>
                <Link to="/" style={{ textDecoration: "none" }} className="navbar-brand" id="nBrand">
                    <div className="quicksand" style={{ color: "black" }}>DAN HOFSTADTER</div>
                    <div className="baskerville" style={{ color: "black" }}><i>p a i n t i n g s</i></div>
                </Link>
            </div>
        )
    }
}

export default Logo
