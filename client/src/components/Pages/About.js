import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
import painting from "../../DSelf.jpg"
export class About extends Component {
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
                            <img src={painting} id="contactImage" alt="Dan Self Portrait" />
                        </div>
                        <div className="col-md-2 d-none d-sm-block"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About
