import React, { Component } from 'react'
import DDContent from './DDContent'
export class Vnav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-white quicksand" id="VNav">
                    <DDContent />
                </nav>
            </div>
        )
    }
}

export default Vnav
