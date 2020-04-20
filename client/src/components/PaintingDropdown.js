import React, { Component } from 'react';
export class PaintingDropdown extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         category: "Small Abstractions"
    //     }
    //     this.onClick = this.onClick.bind(this)
    // }

    render() {
        return (
            <div className="dropdown">
                <span className="dropdown-toggle" type="button" id="pDrop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.category}
                </span>
                <div className="dropdown-menu" aria-labelledby="pDrop">
                    {this.props.allCategories.map((currC, index) =>
                        (
                            <span key={index} value={currC} className={this.props.category === currC ? "dropdown-item" : "dropdown-item tgray4"} onClick={(e) => this.props.onClick(e)}>{currC}</span>
                        ))}
                    {/* <Link to="/Contact?category=LargeAbstractions" value="Large Abstractions" className={window.location.search === "?category=LargeAbstractions" ? "dropdown-item" : "dropdown-item tgray4"} >Large Abstractions</Link>
                    <Link to="/Contact?category=SmallAbstractions" value="Small Abstractions" className={window.location.search === "?category=SmallAbstractions" ? "dropdown-item" : "dropdown-item tgray4"}>Small Abstractions</Link>
                    <Link to="/Contact?category=RecentWork" value="Recent Work" className={window.location.search === "?category=RecentWork" ? "dropdown-item" : "dropdown-item tgray4"}>Recent Work</Link>
                    <Link to="/Contact?category=EarlyWork" value="Early Work" className={window.location.search === "?category=EarlyWork" ? "dropdown-item" : "dropdown-item tgray4"} >Early Work <i>(1970-1990)</i></Link>
                    <Link to="/Contact?category=MonotypesDrawings" value="Drawings" className={window.location.search === "?category=MonotypesDrawings" ? "dropdown-item" : "dropdown-item tgray4"} >Drawings</Link>
                    <Link to="/Contact?category=InstallationViews" value="Installation Views" className={window.location.search === "?category=InstallationViews" ? "dropdown-item" : "dropdown-item tgray4"} >Installation Views</Link> */}
                </div>
            </div>
        )
    }
}

export default PaintingDropdown
