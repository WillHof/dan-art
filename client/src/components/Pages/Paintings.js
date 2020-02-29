import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
export class Paintings extends Component {
    state = {
        images: [],
        type: "Large Abstractions",
        names: [],
        dims: [],
    }
    importAll = (r) => {
        return r.keys().map(r);
    }
    componentDidMount() {
        let paths = this.importAll(require.context("../../Large Abstractions", false, /\.(png|jpe?g|svg)$/));
        let namePath = /[\w-]+;/;
        let dimPath = /[\dx\d]+\./;
        let pArr = [];
        let dArr = [];
        for (let index = 0; index < paths.length; index++) {
            const element = paths[index];
            let pName = element.match(namePath).pop();
            let pDims = element.match(dimPath).pop();
            pArr.push(pName.substring(0, (pName.length - 1)));
            dArr.push(pDims.substring(0, (pDims.length - 1)));
        }
        //combines path array with nonexistent array of objects to contain info about the paintings
        // for (let index = 0; index < paths.length; index++) {
        //     Object.assign(obj1[i],...paths[i])}
        this.setState({ images: paths, names: pArr, dims: dArr });
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
                            {this.state.images.map((danPainting, index) => (
                                <div key={index}>
                                    <img src={danPainting} alt={danPainting.id} key={danPainting} className="paintingImage"></img>
                                    <div className="row">
                                        <div className="col-12 garamond h6 text-center mb-4 mt-2" key={index}><b>{this.state.names[index]} {this.state.dims[index]}</b></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-2 d-none d-sm-block"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Paintings
