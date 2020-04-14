import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
import painting from "../../assets/LargeAbstractions/DH1;50x58.jpeg"
import EmailForm from "../EmailForm"
import SlideShow from "../SlideShow"
export class Contact extends Component {


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 d-none d-md-block">
                            <Vnav />
                        </div>
                        <div className="d-block d-md-none col-sm-12">
                            <Nav />
                        </div>
                        <div className="col-md-6 col-sm-12  blockContainer mr-auto ml-auto">
                            <div id="slideShow">
                                <SlideShow />
                                {/* <img src={painting} alt="Painting" id="aboutImage" /> */}
                            </div>
                            <div className="row">
                                <div className="col-12 mt-3 mb-3 baskerville">
                                    Those wishing to inquire about prices or to purchase pieces should use the form below for a prompt response.
                                </div>
                            </div>

                            <EmailForm />
                        </div>
                        <div className="col-md-2 d-none d-sm-block"></div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Contact

