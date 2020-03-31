import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
import axios from 'axios'
export class Paintings extends Component {
    state = {
        images: [],
        type: "",
        names: [],
        dims: [],
    }
    importAll = (r) => {
        return r.keys().map(r);
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search)
        const page = urlParams.get('page')
        // this.setState({ type: page })
        // this.getPaintings(page)
        // this.setState({ images: this.getPaintings(page) })
        let paths = this.importAll(require.context("../../LargeAbstractions", false, /\.(png|jpe?g|svg)$/));
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
        // combines path array with nonexistent array of objects to contain info about the paintings
        // for (let index = 0; index < paths.length; index++) {
        //     Object.assign(obj1[i],...paths[i])}
        this.setState({ images: paths, names: pArr, dims: dArr });
    }
    // getPaintings = async (page) => {
    //     axios.post('/api/paintingData', { "page": page }).then((res) => {
    //         console.log(res)
    //         let namePath = /[\w-]+;/;
    //         let dimPath = /[\dx\d]+\./;
    //         let pArr = [];
    //         let dArr = [];
    //         for (let index = 0; index < res.data.length; index++) {
    //             const element = res.data[index];
    //             let pName = element.match(namePath);
    //             let pDims = element.match(dimPath);
    //             pArr.push(pName[0].substring(0, (pName[0].length - 1)));
    //             dArr.push(pDims[0].substring(0, (pDims[0].length - 1)));
    //         }
    //         this.setState({ images: res.data, names: pArr, dims: dArr })
    //     })
    // }
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
                                    <div className="clearfix">
                                        <img src={danPainting} alt={danPainting.id} key={danPainting} className="paintingImage float-right"></img>
                                        {/* <img src={'/client/src/' + this.state.type + '/' + danPainting} alt={danPainting.id} key={danPainting} className="paintingImage float-right"></img> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-right mb-4 h6 tgray" key={index}>{this.state.names[index]} {this.state.dims[index]}</div>
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
