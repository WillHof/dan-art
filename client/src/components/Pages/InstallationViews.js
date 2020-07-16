import React, { Component } from 'react'
import InstallationImages from "../../assets/InstallationViews/index"
import Logo from "../Logo"
import Vnav from "../v-Nav"
import Nav from "../h-Nav"

export class InstallationViews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        };
    }
    componentDidMount() {
        this.setState({ images: InstallationImages })
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mt-4 d-none d-md-block">
                            <div className="pl-3">
                                <Logo />
                            </div>
                        </div>
                    </div>

                    <div className="row d-block d-md-none">
                        <div className="col-sm-12">
                            <Nav />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="d-none d-md-block col-md-4 col-lg-3 col-xl-3">
                            <Vnav />
                        </div>
                        <div className="col-sm-12 col-md-8 col-xl-7 pt-4 blockContainer mr-auto ml-auto">

                            {this.state.images[0] ?
                                <div>

                                    <div className="d-flex flex-wrap ">
                                        <div className="flex-column" style={{ flex: "50%" }}>
                                            <img src={this.state.images[0]} className="paintingImage"></img>
                                            <div className="flex-row">
                                                <div className="flex-column" style={{ flex: "50%" }}>
                                                    <img src={this.state.images[3]} className="paintingImage"></img>
                                                </div>
                                                <div className="flex-column" style={{ flex: "50%" }}>
                                                    <img src={this.state.images[2]} className="paintingImage"></img>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="flex-column" style={{ flex: "50%" }}>
                                            <img src={this.state.images[1]} className="paintingImage"></img>
                                        </div>


                                    </div>



                                </div>
                                :
                                <div>not found</div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InstallationViews
