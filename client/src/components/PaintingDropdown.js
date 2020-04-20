import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class PaintingDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "Small Abstractions"
        }
        this.onClick = this.onClick.bind(this)
    }
    onClick(e) {
        this.setState({
            category: e.target.getAttribute('value')
        })
    }
    render() {
        return (
            <div className="dropdown">
                <span className="dropdown-toggle" type="button" id="pDrop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.category}
                </span>
                <div className="dropdown-menu" aria-labelledby="pDrop">
                    <Link to="/Contact?category=LargeAbstractions" onClick={this.onClick} value="Large Abstractions" className={window.location.search === "?category=LargeAbstractions" ? "dropdown-item" : "dropdown-item tgray4"} >Large Abstractions</Link>
                    <Link to="/Contact?category=SmallAbstractions" onClick={this.onClick} value="Small Abstractions" className={window.location.search === "?category=SmallAbstractions" ? "dropdown-item" : "dropdown-item tgray4"}>Small Abstractions</Link>
                    <Link to="/Contact?category=RecentWork" onClick={this.onClick} value="Recent Work" className={window.location.search === "?category=RecentWork" ? "dropdown-item" : "dropdown-item tgray4"}>Recent Work</Link>
                    <Link to="/Contact?category=EarlyWork" onClick={this.onClick} value="Early Work" className={window.location.search === "?category=EarlyWork" ? "dropdown-item" : "dropdown-item tgray4"} >Early Work <i>(1970-1990)</i></Link>
                    <Link to="/Contact?category=MonotypesDrawings" onClick={this.onClick} value="Drawings" className={window.location.search === "?category=MonotypesDrawings" ? "dropdown-item" : "dropdown-item tgray4"} >Drawings</Link>
                    <Link to="/Contact?category=InstallationViews" onClick={this.onClick} value="Installation Views" className={window.location.search === "?category=InstallationViews" ? "dropdown-item" : "dropdown-item tgray4"} >Installation Views</Link>
                </div>
            </div>
        )
    }
}

export default PaintingDropdown
