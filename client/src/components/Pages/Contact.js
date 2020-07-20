import React, { Component } from 'react'
import EmailForm from "../EmailForm"
// import SlideShow from "../SlideShow"
// import PaintingDropdown from '../PaintingDropdown'
export class Contact extends Component {

    // Categories for the slideshow, without it, this component is stateless. 
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     currentCategory: "SmallAbstractions",
    //     //     allCategories:
    //     //         [
    //     //             "LargeAbstractions",
    //     //             "SmallAbstractions",
    //     //             "RecentWork",
    //     //             "EarlyWork",
    //     //         ],
    //     // }
    // }

    handleClick(e) {
        this.setState({
            currentCategory: e.target.getAttribute("value")
        })
    }

    render() {
        return (

            <div className="col-md-7 col-sm-12 blockContainer mr-auto ml-auto pt-4">

                {
                            /* Slideshow code here
                            <div className="row">
                                <div className="col-12">
                                    <PaintingDropdown onClick={(e) => this.handleClick(e)} category={this.state.currentCategory} allCategories={this.state.allCategories} />
                                </div>
                            </div>
                            <div id="slideShow">
                                <SlideShow category={this.state.currentCategory} />
                            </div> */}

                <div className="row">
                    <div className="col-12  mb-3 baskerville lineH">
                        Those wishing to inquire about prices or to purchase pieces should use the form below.
                                </div>
                </div>

                <EmailForm />

                <div className="col-md-1 d-none d-sm-block"></div>
            </div>

        )
    }
}

export default Contact

