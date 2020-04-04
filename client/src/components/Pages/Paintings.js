import React, { Component } from "react";
import Nav from "../h-Nav";
import Vnav from "../v-Nav";
import axios from "axios";
import EarlyWork from "../../assets/EarlyWork/index";
import SmallAbstractions from "../../assets/SmallAbstractions/index";
import LargeAbstractions from "../../assets/LargeAbstractions/index";
import MonotypesDrawings from "../../assets/MonotypesDrawings/index";
import InstallationViews from "../../assets/InstallationViews/index";

export class Paintings extends Component {
    state = {
        page: "",
        names: [],
        dims: [],
    }
    //code snippet which allows loading file paths of a given folder
    // importAll = (r) => {
    //     return r.keys().map(r);
    // }
    // let paths = this.importAll(require.context("../../assets/showPaintings", false, /\.(png|jpe?g|svg)$/));
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search)
        let category = urlParams.get('category')
        this.setState({ page: category })
        this.getPaintings(category)

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
        }
        if (category === "InstallationViews") {
            imagePaths = InstallationViews
        }

        let namePath = /[\w-]+;/;
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
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 d-none d-md-block">
                            <Vnav />
                        </div>
                        <div className="d-block d-md-none col-sm-12">
                            <Nav />
                        </div>
                        <div className="col-md-6 col-sm-12 blockContainer mr-auto ml-auto">
                            {this.state.images ? this.state.images.map((danPainting, index) => (
                                <div key={index}>
                                    <div className="clearfix">
                                        <img src={danPainting} alt={danPainting.id} key={danPainting} className="paintingImage float-right"></img>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-right mb-4 h6 tgray" key={index}>{this.state.names[index]} {this.state.dims[index]}</div>
                                    </div>
                                </div>
                            )) :
                                <div className="col-md-6 col-sm-12 blockContainer mr-auto ml-auto">
                                    This section is under construction
                            </div>}
                        </div>
                        <div className="col-md-2 d-none d-sm-block"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Paintings
