import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
export class Writing extends Component {
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
                        <div className="col-md-8 col-sm-12">  Writing Here</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Writing
