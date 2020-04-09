import React, { Component } from "react";
import Nav from "../h-Nav";
import Vnav from "../v-Nav";
import EarlyWork from "../../assets/EarlyWork/index";
import RecentWork from "../../assets/RecentWork/index";
import SmallAbstractions from "../../assets/SmallAbstractions/index";
import LargeAbstractions from "../../assets/LargeAbstractions/index";
import MonotypesDrawings from "../../assets/MonotypesDrawings/index";
import InstallationViews from "../../assets/InstallationViews/index";

export class Paintings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: "",
            names: "",
            dims: "",
        }

    }
    //code snippet which allows loading file paths of a given folder
    // importAll = (r) => {
    //     return r.keys().map(r);
    // }
    // let paths = this.importAll(require.context("../../assets/showPaintings", false, /\.(png|jpe?g|svg)$/));
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        let pp = params.get('category')
        pp ? this.getPaintings(pp) : this.getPaintings("SmallAbstractions")
    }
    componentDidUpdate(prevProps, prevState) {
        const params = new URLSearchParams(this.props.location.search)
        let pp = params.get('category')
        if (this.props.location.search !== prevProps.location.search) {
            this.getPaintings(pp)
        }
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
                        <div className="col-md-6 col-sm-12 col-lg-4 blockContainer mr-auto ml-auto">
                            {this.state.images ? this.state.images.map((danPainting, index) => (
                                <div key={index}>
                                    <div className="clearfix">
                                        <img src={danPainting} alt={danPainting.id} key={danPainting} data-toggle="modal" data-target={"#p" + index} className="paintingImage float-right"></img>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-right mb-4 h6 tgray pDesc" key={index}>{this.state.names[index]} {this.state.dims[index]}</div>
                                    </div>
                                </div>
                            )) :
                                <div className="col-md-6 col-sm-12 blockContainer mr-auto ml-auto">
                                    There are no paintings here yet.
                            </div>}
                        </div>
                        <div className="col-md-2 d-none d-sm-block"></div>
                    </div>
                </div>
                {this.state.images ? this.state.images.map((danPainting, index) => (
                    <div className="modal fade" id={"p" + index} key={"k" + index} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body d-flex justify-content-center">
                                    <img src={danPainting} alt={danPainting.id} data-dismiss="modal" className="modalImage" aria-label="Close"></img>
                                    {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>)) : null}

            </div>
        )
    }
}

export default Paintings
