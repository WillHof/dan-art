import React, { Component } from 'react'
import DDContent from './DDContent'
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
                       <DDContent />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
