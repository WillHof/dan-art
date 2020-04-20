import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
import EmailForm from "../EmailForm"
import SlideShow from "../SlideShow"
export class Contact extends Component {


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-md-4 d-none d-md-block">
                            <Vnav />
                        </div>
                        <div className="d-block d-md-none col-sm-12">
                            <Nav />
                        </div>
                        <div className="col-md-7 col-sm-12 blockContainer mr-auto ml-auto">
                            <div id="slideShow">
                                <SlideShow />
                            </div>
                            <div className="row">
                                <div className="col-12 mt-1 mb-3 baskerville lineH">
                                    Those wishing to inquire about prices or to purchase pieces should use the form below.
                                </div>
                            </div>

                            <EmailForm />
                        </div>
                        <div className="col-md-1 d-none d-sm-block"></div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Contact

