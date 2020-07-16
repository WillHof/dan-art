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
                        {this.state.images ? this.state.images.map(
                            (currImage) => (
                                <div>
                                    <img src={currImage}></img>
                                </div>
                            )
                        ) :
                            <div>not found</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default InstallationViews
