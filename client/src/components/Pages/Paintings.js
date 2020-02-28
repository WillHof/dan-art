import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
export class Paintings extends Component {
    state = {
        images: []
    }
    importAll = (r) => {
        return r.keys().map(r);
    }
    componentDidMount() {
        var images = require.context("../../Large Abstractions", false, /\.(png|jpe?g|svg)$/);
        this.setState({ images: this.importAll(images) });
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
                            {this.state.images.map(danPainting => (
                                <img src={danPainting} alt={danPainting.id} key={danPainting} className="paintingImage"></img>
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
