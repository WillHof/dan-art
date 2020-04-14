import React, { Component } from 'react'

import EarlyWork from "../assets/EarlyWork/index";
import RecentWork from "../assets/RecentWork/index";
import SmallAbstractions from "../assets/SmallAbstractions/index";
import LargeAbstractions from "../assets/LargeAbstractions/index";
import MonotypesDrawings from "../assets/MonotypesDrawings/index";
import InstallationViews from "../assets/InstallationViews/index";

export class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: "",
            names: "",
            dims: "",
            index: 0
        }
        this.onClick = this.onClick.bind(this)
    }
    componentDidMount() {
        this.getPaintings("SmallAbstractions")
    }
    getPaintings = (category) => {
        let imagePaths = []
        if (category === "EarlyWork") {
            imagePaths = EarlyWork;
        };
        if (category === "LargeAbstractions") {
            imagePaths = LargeAbstractions
        };
        if (category === "SmallAbstractions") {
            imagePaths = SmallAbstractions
        };
        if (category === "MonotypesDrawings") {
            imagePaths = MonotypesDrawings
        };
        if (category === "InstallationViews") {
            imagePaths = InstallationViews
        };
        if (category === "RecentWork") {
            imagePaths = RecentWork
        }

        let namePath = /(\w|(\w+\s)*)+;/;
        let dimPath = /[\d.*x\d]+\./;
        let pArr = [];
        let dArr = [];
        if (imagePaths.length) {
            for (let index = 0; index < imagePaths.length; index++) {
                const element = imagePaths[index];
                let pName = element.match(namePath);
                let pDims = element.match(dimPath);
                pArr.push(pName[0].substring(0, (pName[0].length - 1)));
                dArr.push(pDims[0].substring(0, (pDims[0].length - 1)));
            }
            this.setState({ images: imagePaths, names: pArr, dims: dArr })
        }
        else {
            this.setState({ images: "", names: "", dims: "" })
        }
    }
    onClick(e) {
        e.preventDefault()
        let x = this.state.index + Number(e.target.getAttribute('value'))
        console.log(x < 0)

        if (x < 0) {
            this.setState({ index: this.state.images.length - 1 })
        }
        if (x > this.state.images.length - 1) {
            this.setState({ index: 0 })
        }
        else {
            this.setState({ index: x })
        }
    }
    render() {
        return (
            <div>
                <div className="relative">
                    <div className="arrowContainerL" value={-1} onClick={this.onClick}>
                        <div id="leftArrow" value={-1}>
                            <span className="carousel-control-prev-icon" value={-1}></span>
                        </div>
                    </div>
                    <div className="arrowContainerR" value={1} onClick={this.onClick}>
                        <div id="rightArrow" value={1}>
                            <span className="carousel-control-next-icon" value={1}></span>
                        </div>
                    </div>
                    <div className="stuff">
                        <img src={this.state.images[this.state.index]} id="aboutImage" className="mr-auto ml-auto" alt={this.state.names[this.state.index]} />
                        <div className="row">
                            <div className="col-12 text-right mb-4 h6 tgray pDesc">{this.state.names[this.state.index]} {this.state.dims[this.state.index]}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SlideShow
