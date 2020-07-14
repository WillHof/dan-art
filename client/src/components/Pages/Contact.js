import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
import EmailForm from "../EmailForm"
import SlideShow from "../SlideShow"
import PaintingDropdown from '../PaintingDropdown'
export class Contact extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     currentCategory: "SmallAbstractions",
        //     allCategories:
        //         [
        //             "LargeAbstractions",
        //             "SmallAbstractions",
        //             "RecentWork",
        //             "EarlyWork",
        //         ],
        // }
    }
    handleClick(e) {
        this.setState({
            currentCategory: e.target.getAttribute("value")
        })
    }

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
                            {/* <div className="row">
                                <div className="col-12">
                                    <PaintingDropdown onClick={(e) => this.handleClick(e)} category={this.state.currentCategory} allCategories={this.state.allCategories} />
                                </div>
                            </div>
                            <div id="slideShow">
                                <SlideShow category={this.state.currentCategory} />
                            </div> */}
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

