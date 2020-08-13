import React, { Component } from 'react'
import Logo from "../Logo"
import Nav from "../h-Nav"
import Vnav from "../v-Nav"

export class Main extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-none d-md-block">
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
                        <div className="d-none d-md-block col-md-4 col-xl-3">
                            <Vnav />
                        </div>

                        {this.props.children}

                    </div>

                </div>
            </div>

        )
    }
}

export default Main
